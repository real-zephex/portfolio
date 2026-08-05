import { createHmac, timingSafeEqual } from "node:crypto";

const SECRET =
  process.env.RESUME_CHALLENGE_SECRET ?? "dev-resume-challenge-secret";

function hmac(data: string): string {
  return createHmac("sha256", SECRET).update(data).digest("base64url");
}

function safeEqual(a: string, b: string): boolean {
  const ea = Buffer.from(a);
  const eb = Buffer.from(b);
  return ea.length === eb.length && timingSafeEqual(ea, eb);
}

/** Sign a challenge (a, b, expiry) so the client can't tamper with the numbers. */
export function signChallenge(a: number, b: number, exp: number): string {
  return hmac(`v1|${a}|${b}|${exp}`);
}

export function verifyChallenge(
  a: unknown,
  b: unknown,
  exp: unknown,
  sig: string
): boolean {
  if (typeof a !== "number" || typeof b !== "number") return false;
  if (typeof exp !== "number" || !Number.isFinite(exp) || exp < Date.now())
    return false;
  if (typeof sig !== "string" || !sig) return false;
  return safeEqual(signChallenge(a, b, exp), sig);
}

/** Sign a short-lived token that authorizes downloading the resume PDF. */
export function signPdfToken(exp: number): string {
  return hmac(`pdf|${exp}`);
}

export function verifyPdfToken(exp: number, sig: string): boolean {
  if (!Number.isFinite(exp) || exp < Date.now()) return false;
  if (typeof sig !== "string" || !sig) return false;
  return safeEqual(signPdfToken(exp), sig);
}
