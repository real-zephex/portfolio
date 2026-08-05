import { NextResponse } from "next/server";
import { after } from "next/server";
import { describeRequest, formatVisitor, sendTelegram } from "@/lib/telegram";

export const dynamic = "force-dynamic";

// In-memory dedupe: same IP + path won't re-ping for 15 minutes.
// (Per warm instance on serverless — plenty for a portfolio.)
const seen = new Map<string, number>();
const DEDUPE_MS = 15 * 60 * 1000;

export async function POST(req: Request) {
  let payload: { path?: string; seconds?: number; interactions?: number } = {};
  try {
    const text = await req.text();
    payload = text ? JSON.parse(text) : {};
  } catch {
    /* ignore malformed beacons */
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const key = `${ip}|${payload.path ?? "/"}`;
  const now = Date.now();
  const last = seen.get(key);
  if (last && now - last < DEDUPE_MS) {
    return NextResponse.json({ ok: true }); // already pinged, silently swallow
  }
  seen.set(key, now);
  if (seen.size > 500) seen.clear(); // keep the map tiny

  after(async () => {
    const info = await describeRequest(req);
    const msg =
      `👀 <b>ENGAGED VISITOR</b>\n` +
      `Someone spent <b>${Math.round(payload.seconds ?? 0)}s</b> on <code>${info.path}</code> ` +
      `with <b>${payload.interactions ?? 0}</b> interactions.\n\n` +
      formatVisitor(info);
    await sendTelegram(msg);
  });

  return NextResponse.json({ ok: true });
}
