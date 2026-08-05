import Link from "next/link";
import type { Metadata } from "next";
import { FiArrowUpRight, FiGithub, FiTerminal, FiMessageSquare, FiGlobe, FiCpu } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Immortal Agent",
  description:
    "Immortal Agent — an agentic AI runtime that stays alive after a model finishes a response. Terminal TUI + Telegram bot, built in Go.",
};

const features = [
  {
    icon: <FiTerminal className="size-5" />,
    title: "Terminal-first TUI",
    text: "A Bubble Tea interface that keeps you in the flow — chat, tool calls, and logs in one pane, with the input pinned where it belongs.",
  },
  {
    icon: <FaTelegramPlane className="size-5" />,
    title: "Telegram bot",
    text: "The same agent answers on Telegram, so it travels with you. Long-running conversations don't die when the terminal closes.",
  },
  {
    icon: <FiCpu className="size-5" />,
    title: "Real tool use",
    text: "Summarised tool calls, error-aware logging, and browser automation through agent-browser — the agent acts, not just chats.",
  },
  {
    icon: <FiGlobe className="size-5" />,
    title: "Model-agnostic",
    text: "Routes through OpenRouter, with provider flexibility baked in — swap models without rebuilding the runtime.",
  },
];

export default function ImmortalAgentPage() {
  return (
    <main className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-10 pb-24">
      {/* Masthead */}
      <header className="relative mb-12">
        <div className="flex items-center justify-between mono-label text-[10px] text-muted mb-3">
          <Link href="/" className="link-underline">← Back to index</Link>
          <span>Featured project</span>
        </div>
        <div className="rule-double w-full" />
      </header>

      {/* Hero */}
      <section className="py-10 md:py-14">
        <div className="flex items-center gap-3 mb-5">
          <span className="rubber-stamp text-[10px]">Featured</span>
          <span className="mono-label text-[10px] text-muted">Go &middot; Bubble Tea &middot; AI runtime</span>
        </div>
        <h1 className="serif-title text-5xl sm:text-7xl font-semibold leading-[0.9] tracking-tight">
          Immortal Agent
        </h1>
        <p className="serif-title text-xl md:text-2xl mt-5 text-accent italic">
          an agent runtime that stays alive after a model finishes a response
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed sans-body text-foreground/90">
          Immortal Agent is my agentic AI assistant — a long-lived runtime that
          doesn&apos;t stop thinking when the LLM stops talking. It lives in the
          terminal as a TUI, answers on Telegram, calls tools, drives a browser,
          and remembers the thread between sessions. Built in Go, designed to
          outlive any single model response.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="https://github.com/real-zephex/immortal"
            target="_blank"
            className="btn-editorial text-[11px]"
          >
            <span className="inline-flex items-center gap-2">
              <FiGithub className="size-4" /> Source on GitHub
            </span>
          </Link>
          <Link
            href="/"
            className="mono-label text-[11px] text-muted hover:text-foreground transition-colors border border-rule px-6 py-2 hover:border-accent"
          >
            Back to portfolio
          </Link>
        </div>
      </section>

      {/* Features */}
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

      {/* Why */}
      <section className="mt-14">
        <div className="flex items-center gap-4 mb-8">
          <span className="chapter-no italic text-2xl text-accent">II.</span>
          <h2 className="serif-title text-3xl md:text-4xl font-semibold">Why it matters</h2>
          <div className="rule-single flex-1" />
        </div>
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed sans-body text-foreground/90">
            Most AI wrappers are fire-and-forget: the model answers, the app
            forgets. Immortal Agent treats each conversation as a <em>session</em>{" "}
            that survives — the runtime keeps state, keeps context, and keeps
            executing long after the model&apos;s turn ends. It&apos;s the
            difference between asking a question and running an operation.
          </p>
          <div className="mt-8 editorial-card p-8">
            <span className="mono-label text-[10px] text-accent block mb-4">Roadmap</span>
            <p className="serif-title text-2xl italic leading-snug">
              “Currently learning Rust — the plan is a full rewrite of the runtime
              in Rust within the next six months.”
            </p>
            <div className="rule-single mt-5 mb-3" />
            <p className="mono-label text-[10px] text-muted">— zephex</p>
          </div>
        </div>
      </section>

      {/* Colophon */}
      <footer className="mt-16 pt-10">
        <div className="rule-double w-full" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-8">
          <div>
            <h4 className="serif-title text-2xl font-semibold mb-3">Want in?</h4>
            <p className="text-muted text-base sans-body max-w-sm">
              Contributions, ideas, or a conversation about agent runtimes —
              the inbox is open.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mono-label text-[10px] text-muted">Elsewhere</span>
            <Link href="https://github.com/real-zephex/immortal" target="_blank" className="link-underline mono-label text-xs">
              GitHub ↗
            </Link>
            <Link href="mailto:hi@zephex.in" className="link-underline mono-label text-xs">
              hi@zephex.in
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
