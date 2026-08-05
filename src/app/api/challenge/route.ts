import { NextResponse } from "next/server";
import { signChallenge, signPdfToken, verifyChallenge } from "@/lib/resume-challenge";

const CHALLENGE_TTL = 2 * 60 * 1000; // 2 minutes to answer
const PDF_TTL = 5 * 60 * 1000; // token valid for 5 minutes

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/** Issue a fresh math challenge. */
export async function GET() {
  const a = rand(2, 20);
  const b = rand(2, 20);
  const exp = Date.now() + CHALLENGE_TTL;
  return NextResponse.json({ a, b, exp, sig: signChallenge(a, b, exp) });
}

/** Verify the answer; on success return a short-lived PDF token. */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { a, b, exp, sig, answer } = body ?? {};

    if (!verifyChallenge(a, b, exp, sig)) {
      return NextResponse.json(
        { error: "Challenge expired or tampered. Refresh and try again." },
        { status: 400 }
      );
    }
    if (Number(answer) !== a + b) {
      return NextResponse.json({ error: "Incorrect answer." }, { status: 400 });
    }

    const pdfExp = Date.now() + PDF_TTL;
    return NextResponse.json({ token: `${pdfExp}.${signPdfToken(pdfExp)}` });
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }
}
