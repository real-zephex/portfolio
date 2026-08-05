import Link from "next/link";
import type { Metadata } from "next";
import { FiTerminal, FiCpu, FiDatabase, FiMessageSquare, FiGlobe, FiMail, FiMic } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

export const metadata: Metadata = {
  title: "askcli",
  description:
    "askcli — a local-first, agentic AI assistant for the terminal. Written in Go, with tool use, long-term memory, and Telegram integration.",
};

const features = [
  {
    icon: <FiTerminal className="size-5" />,
    title: "REPL & one-shot",
    text: "Interactive chat with slash commands for runtime config, or one-shot questions with piped stdin. Streaming markdown as responses arrive.",
  },
  {
    icon: <FiCpu className="size-5" />,
    title: "Agent mode",
    text: "The AI runs shell commands, edits files, makes HTTP calls, manages lists and memories, and sends files over Telegram — behind approval gates you control.",
  },
  {
    icon: <FiDatabase className="size-5" />,
    title: "Local state, always",
    text: "Chat history in SQLite, vector memory for long-term context, named lists and todos. Your data stays on your machine.",
  },
  {
    icon: <FaTelegramPlane className="size-5" />,
    title: "Telegram background",
    text: "Processes messages, voice notes, images, and documents from Telegram while you work — the agent travels with you.",
  },
  {
    icon: <FiGlobe className="size-5" />,
    title: "Remote server mode",
    text: "Client/server mode connects to a local ask server over HTTP, with key-based auth for remote sessions.",
  },
  {
    icon: <FiMic className="size-5" />,
    title: "Voice & media",
    text: "Voice-note transcription via Groq, text-to-speech via Eleven Labs, and clipboard tools on Linux.",
  },
];

export default function AskcliPage() {
  return (
    <main className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-10 pb-24">
      <header className="relative mb-12">
        <div className="flex items-center justify-between mono-label text-[10px] text-muted mb-3">
          <Link href="/" className="link-underline">← Back to index</Link>
          <span>Featured project</span>
        </div>
        <div className="rule-double w-full" />
      </header>

      <section className="py-10 md:py-14">
        <div className="flex items-center gap-3 mb-5">
          <span className="rubber-stamp text-[10px]">Featured</span>
          <span className="mono-label text-[10px] text-muted">Go &middot; Gemini &middot; Agentic CLI</span>
        </div>
        <h1 className="serif-title text-5xl sm:text-7xl font-semibold leading-[0.9] tracking-tight">askcli</h1>
        <p className="serif-title text-xl md:text-2xl mt-5 text-accent italic">
          the AI agent that lives in your terminal
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed sans-body text-foreground/90">
          askcli is a local-first, agentic AI assistant written in Go. It talks
          to LLMs from the terminal — quick one-shots or a full REPL — and when
          you turn on agent mode, it stops answering questions and starts doing
          work: running shell commands, editing files, making HTTP calls, and
          managing its own memory. Everything you tell it stays on your machine.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="https://github.com/real-zephex/askcli" target="_blank" className="btn-editorial text-[11px]">
            <span className="inline-flex items-center gap-2">Source on GitHub</span>
          </Link>
          <Link href="/" className="mono-label text-[11px] text-muted hover:text-foreground transition-colors border border-rule px-6 py-2 hover:border-accent">
            Back to portfolio
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center gap-4 mb-8">
          <span className="chapter-no italic text-2xl text-accent">I.</span>
          <h2 className="serif-title text-3xl md:text-4xl font-semibold">What it does</h2>
          <div className="rule-single flex-1" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <article key={f.title} className="editorial-card p-7">
              <span className="text-accent inline-flex mb-4">{f.icon}</span>
              <h3 className="serif-title text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted text-[15px] leading-relaxed sans-body">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="flex items-center gap-4 mb-8">
          <span className="chapter-no italic text-2xl text-accent">II.</span>
          <h2 className="serif-title text-3xl md:text-4xl font-semibold">Why it matters</h2>
          <div className="rule-single flex-1" />
        </div>
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed sans-body text-foreground/90">
            Most AI tools live in a browser tab and forget you the moment you
            switch away. askcli is the opposite — it&apos;s a resident of your
            shell, fast to invoke, local-first by design, and powerful enough to
            act on its own. The approval-gated agent mode is the interesting
            part: you get autonomy when you trust it, and a safety rail when you
            don&apos;t.
          </p>
          <div className="mt-8 editorial-card p-8">
            <span className="mono-label text-[10px] text-accent block mb-4">Design principle</span>
            <p className="serif-title text-2xl italic leading-snug">
              “The terminal is the last place an AI can be both powerful and
              honest — no hidden UI, no telemetry, just the work.”
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-16 pt-10">
        <div className="rule-double w-full" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-8">
          <div>
            <h4 className="serif-title text-2xl font-semibold mb-3">Try it.</h4>
            <p className="text-muted text-base sans-body max-w-sm">
              Written in Go, one binary, quick start in the README. The repo is
              open — contributions welcome.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mono-label text-[10px] text-muted">Elsewhere</span>
            <Link href="https://github.com/real-zephex/askcli" target="_blank" className="link-underline mono-label text-xs">GitHub ↗</Link>
            <Link href="mailto:hi@zephex.in" className="link-underline mono-label text-xs">hi@zephex.in</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
