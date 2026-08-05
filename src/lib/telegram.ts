// Telegram alert helper for the portfolio.
// Fire-and-forget: never throws, never blocks the request that triggered it.

const TOKEN = process.env.PORTFOLIO_TELEGRAM_BOT_TOKEN ?? "";
const CHAT_ID = process.env.PORTFOLIO_TELEGRAM_CHAT_ID ?? "";

export function telegramEnabled(): boolean {
  return Boolean(TOKEN && CHAT_ID);
}

/** Escape user-controlled strings so they can't break Telegram's HTML parse mode. */
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Send a message to the configured Telegram chat. Never throws. */
export async function sendTelegram(text: string): Promise<boolean> {
  if (!telegramEnabled()) return false;
  try {
    const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(5000),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export type VisitorInfo = {
  ip: string;
  country: string;
  city: string;
  isp: string;
  browser: string;
  os: string;
  device: string;
  referer: string;
  path: string;
};

const UA_BROWSERS: [RegExp, string][] = [
  [/Edg\//, "Edge"],
  [/OPR\//, "Opera"],
  [/Chrome\//, "Chrome"],
  [/Firefox\//, "Firefox"],
  [/Safari\//, "Safari"],
  [/curl\//, "curl"],
  [/Go-http-client/, "Go http"],
  [/python-requests/, "Python requests"],
  [/TelegramBot/, "Telegram Bot"],
];

const UA_OS: [RegExp, string][] = [
  [/Windows NT/, "Windows"],
  [/Android/, "Android"],
  [/iPhone|iPad|iPod/, "iOS"], // must come before macOS — iPhone UAs contain "like Mac OS X"
  [/Mac OS X/, "macOS"],
  [/Linux/, "Linux"],
];

export function parseUA(ua: string) {
  let browser = "Unknown";
  for (const [re, name] of UA_BROWSERS) {
    if (re.test(ua)) { browser = name; break; }
  }
  let os = "Unknown";
  for (const [re, name] of UA_OS) {
    if (re.test(ua)) { os = name; break; }
  }
  const device = /Mobi|Android|iPhone|iPad/.test(ua) ? "Mobile" : "Desktop";
  return { browser, os, device };
}

/** Extract the real client IP from proxy headers (Vercel sends x-forwarded-for). */
export function clientIP(req: Request): string {
  const fwd =
    req.headers.get("x-forwarded-for") ??
    req.headers.get("x-vercel-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

const LOCAL = /^(::1|127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|unknown)$/;

/** Best-effort geo enrichment via ipwho.is (free, no key). Never throws. */
async function geoLookup(ip: string): Promise<{ country: string; city: string; isp: string }> {
  if (LOCAL.test(ip)) {
    return { country: "Localhost", city: "dev machine", isp: "your own network" };
  }
  try {
    const res = await fetch(`https://ipwho.is/${ip}`, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error("geo http");
    const j = await res.json();
    if (!j.success) throw new Error("geo fail");
    return {
      country: j.country ?? "?",
      city: j.city ?? "?",
      isp: j.connection?.isp ?? "?",
    };
  } catch {
    return { country: "?", city: "?", isp: "?" };
  }
}

/** Full "who is this" dossier for a request. */
export async function describeRequest(req: Request): Promise<VisitorInfo> {
  const ip = clientIP(req);
  const ua = req.headers.get("user-agent") ?? "unknown";
  const { browser, os, device } = parseUA(ua);
  const geo = await geoLookup(ip);
  return {
    ip,
    ...geo,
    browser,
    os,
    device,
    referer: req.headers.get("referer") ?? "direct",
    path: new URL(req.url).pathname,
  };
}

/** Format a VisitorInfo into a Telegram block. */
export function formatVisitor(v: VisitorInfo): string {
  const t = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  return [
    `<b>IP:</b> <code>${esc(v.ip)}</code>`,
    `<b>Location:</b> ${esc(v.city)}, ${esc(v.country)}`,
    `<b>ISP:</b> ${esc(v.isp)}`,
    `<b>Browser:</b> ${esc(v.browser)} on ${esc(v.os)} (${esc(v.device)})`,
    `<b>Referrer:</b> ${esc(v.referer)}`,
    `<b>When:</b> ${esc(t)} IST`,
  ].join("\n");
}
