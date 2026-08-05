import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { verifyPdfToken } from "@/lib/resume-challenge";

export const dynamic = "force-dynamic";

/** Serve the resume PDF — requires a valid signed token from /api/challenge. */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token") ?? "";
  const [expStr, sig] = token.split(".");
  const exp = Number(expStr);

  if (!sig || !verifyPdfToken(exp, sig)) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const file = await readFile(path.join(process.cwd(), "private", "resume.pdf"));
  const download = url.searchParams.get("dl") === "1";

  return new NextResponse(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": download
        ? 'attachment; filename="zephex-resume.pdf"'
        : 'inline; filename="zephex-resume.pdf"',
      "Cache-Control": "no-store, private",
    },
  });
}
