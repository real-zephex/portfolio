"use client";

import { useCallback, useState } from "react";

type Challenge = { a: number; b: number; exp: number; sig: string };

const ResumeGate = () => {
  const [open, setOpen] = useState(false);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [download, setDownload] = useState(false);

  const openChallenge = useCallback(async (dl: boolean) => {
    setDownload(dl);
    setError("");
    setAnswer("");
    setOpen(true);
    setChallenge(null);
    try {
      const res = await fetch("/api/challenge");
      const data = await res.json();
      setChallenge(data);
    } catch {
      setError("Could not load the challenge. Try again.");
    }
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setChallenge(null);
    setAnswer("");
    setError("");
  }, []);

  const submit = useCallback(async () => {
    if (!challenge || busy || answer.trim() === "") return;
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/challenge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...challenge, answer: Number(answer) }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Incorrect answer.");
        setBusy(false);
        return;
      }
      const url = `/resume?token=${encodeURIComponent(data.token)}${download ? "&dl=1" : ""}`;
      // Programmatic click — avoids popup blockers after the async fetch.
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      close();
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setBusy(false);
    }
  }, [challenge, answer, busy, download, close]);

  return (
    <>
      <div className="flex flex-col gap-3 shrink-0">
        <button onClick={() => openChallenge(false)} className="btn-editorial text-center text-[11px]">
          View PDF ↗
        </button>
        <button
          onClick={() => openChallenge(true)}
          className="mono-label text-[11px] text-center text-muted hover:text-accent transition-colors border border-rule px-6 py-2 hover:border-accent"
        >
          Download
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Math challenge">
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={close} />
          <div className="relative w-full max-w-sm editorial-card p-8 shadow-2xl">
            <span className="mono-label text-[10px] text-accent block mb-2">Human check</span>
            <h3 className="serif-title text-2xl font-semibold italic mb-1">Quick sum</h3>
            <p className="text-muted text-sm sans-body mb-4">
              Solve to prove you&apos;re human — keeps the bots off the résumé.
            </p>

            {challenge ? (
              <>
                <p className="serif-title text-4xl font-semibold text-center my-5">
                  {challenge.a} + {challenge.b} = ?
                </p>
                <input
                  type="number"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && submit()}
                  placeholder="Your answer"
                  autoFocus
                  className="w-full border border-rule bg-background px-4 py-2.5 text-center serif-title text-2xl focus:outline-none focus:border-accent transition-colors"
                />
                {error && (
                  <p className="mt-2.5 text-center text-sm text-red-600 sans-body">{error}</p>
                )}
                <div className="mt-5 flex gap-3">
                  <button
                    onClick={close}
                    className="flex-1 mono-label text-[11px] text-muted hover:text-foreground transition-colors border border-rule px-4 py-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={submit}
                    disabled={busy || answer.trim() === ""}
                    className="flex-1 btn-editorial text-[11px] disabled:opacity-50"
                  >
                    {busy ? "Checking…" : "Unlock"}
                  </button>
                </div>
              </>
            ) : (
              <p className="text-center text-sm text-muted py-6 sans-body">
                {error || "Preparing challenge…"}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeGate;
