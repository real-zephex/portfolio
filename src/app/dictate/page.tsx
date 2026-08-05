import Link from "next/link";
import type { Metadata } from "next";
import { FiMic, FiZap, FiMonitor, FiCommand, FiActivity, FiCheckCircle } from "react-icons/fi";

export const metadata: Metadata = {
  title: "dictate",
  description:
    "dictate — a free, open-source Wispr Flow alternative. System-wide AI voice dictation in Go, with a floating HUD and near-instant transcription.",
};

const features = [
  {
    icon: <FiCommand className="size-5" />,
    title: "Global hotkey",
    text: "Toggle dictation from anywhere with Ctrl+Space. No window juggling, no focus stealing — it just works over whatever you're doing.",
  },
  {
    icon: <FiMic className="size-5" />,
    title: "System-wide input",
    text: "Listens to your microphone, transcribes, copies to the clipboard, and injects keystrokes into the focused window — any app.",
  },
  {
    icon: <FiZap className="size-5" />,
    title: "Near-instant transcription",
    text: "Powered by Groq's whisper-large-v3-turbo. Speech becomes text faster than you can reach for the keyboard.",
  },
  {
    icon: <FiMonitor className="size-5" />,
    title: "Floating HUD",
    text: "A Wispr Flow-inspired overlay docked at the bottom of the screen: live waveform reacting to your voice, with listening/processing/success/error states.",
  },
  {
    icon: <FiActivity className="size-5" />,
    title: "Cross-platform engine",
    text: "Native clipboard and paste delivery across Wayland, X11, macOS, and Windows — the same binary everywhere.",
  },
  {
    icon: <FiCheckCircle className="size-5" />,
    title: "Free & open source",
    text: "A real alternative to paid dictation tools. Your speech goes to Groq's API, your data stays yours.",
  },
];

export default function DictatePage() {
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
          <span className="mono-label text-[10px] text-muted">Go &middot; Groq Whisper &middot; Voice</span>
        </div>
        <h1 className="serif-title text-5xl sm:text-7xl font-semibold leading-[0.9] tracking-tight">dictate</h1>
        <p className="serif-title text-xl md:text-2xl mt-5 text-accent italic">
          my attempt at a free, open-source Wispr Flow
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed sans-body text-foreground/90">
          dictate is an AI-powered voice dictation app written in Go. Press
          Ctrl+Space, speak, and your words appear in whatever you&apos;re
          typing — anywhere on your system. It listens with your microphone,
          transcribes with Groq&apos;s Whisper API, and pastes the result into
          the active window, all behind a floating HUD with a live waveform.
          Paid tools do this; now an open-source one does too.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="https://github.com/real-zephex/dictate" target="_blank" className="btn-editorial text-[11px]">
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
            Dictation software is a solved problem that everyone charges for.
            dictate proves the stack is open: Go for the engine, Groq for the
            transcription, and a GTK HUD that respects your focus. It&apos;s the
            kind of tool that makes you wonder why you ever typed your
            long-form thoughts at all.
          </p>
          <div className="mt-8 editorial-card p-8">
            <span className="mono-label text-[10px] text-accent block mb-4">From the README</span>
            <p className="serif-title text-2xl italic leading-snug">
              “The interface includes a beautiful Wispr Flow-inspired floating
              HUD overlay with real-time waveform visualizers and status
              transition animations.”
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-16 pt-10">
        <div className="rule-double w-full" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-8">
          <div>
            <h4 className="serif-title text-2xl font-semibold mb-3">Speak up.</h4>
            <p className="text-muted text-base sans-body max-w-sm">
              Open source, one Go binary. Issues, PRs, and wild feature ideas welcome.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mono-label text-[10px] text-muted">Elsewhere</span>
            <Link href="https://github.com/real-zephex/dictate" target="_blank" className="link-underline mono-label text-xs">GitHub ↗</Link>
            <Link href="mailto:hi@zephex.in" className="link-underline mono-label text-xs">hi@zephex.in</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
