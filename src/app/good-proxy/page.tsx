import Link from "next/link";
import type { Metadata } from "next";
import { FiZap, FiGlobe, FiFilm, FiShield, FiCloud, FiCode } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Good Proxy",
  description:
    "Good Proxy — a lightweight CORS proxy built with Bun & Hono. Handles VTT, HLS streams, disguised files, and runs on Cloudflare Workers.",
};

const features = [
  {
    icon: <FiGlobe className="size-5" />,
    title: "CORS made easy",
    text: "Bypass CORS errors by adding the right headers to requests. Point your frontend at it and cross-origin fetch just works.",
  },
  {
    icon: <FiFilm className="size-5" />,
    title: "Media-aware",
    text: "Identifies disguised files and handles VTT subtitle files and HLS stream manifests with proper content transformation.",
  },
  {
    icon: <FiCode className="size-5" />,
    title: "URL rewriting",
    text: "Automatically rewrites URLs inside fetched content to proxy paths, so relative resources keep working through the proxy.",
  },
  {
    icon: <FiCloud className="size-5" />,
    title: "Runs on the edge",
    text: "Deploys to Cloudflare Workers via Wrangler — a proxy that's fast, global, and free-tier friendly.",
  },
  {
    icon: <FiZap className="size-5" />,
    title: "Bun + Hono",
    text: "Built with Bun and Hono for a tiny footprint and instant cold starts. Simple by design.",
  },
  {
    icon: <FiShield className="size-5" />,
    title: "Lightweight & open",
    text: "A focused tool that does one thing well. Open source, with 26 stars and counting.",
  },
];

export default function GoodProxyPage() {
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
          <span className="mono-label text-[10px] text-muted">Bun &middot; Hono &middot; Cloudflare Workers</span>
        </div>
        <h1 className="serif-title text-5xl sm:text-7xl font-semibold leading-[0.9] tracking-tight">Good Proxy</h1>
        <p className="serif-title text-xl md:text-2xl mt-5 text-accent italic">
          a simple proxy to bypass CORS, made using Bun and Hono ⚡
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed sans-body text-foreground/90">
          Good Proxy is a lightweight proxy server built with Hono that fetches
          and transforms resources from remote servers. It handles VTT files,
          HLS streams, and disguised files while providing enhanced CORS
          support and URL transformation. It&apos;s my most-starred public
          project — 26 stars and used by people who just want their frontend
          to talk to the internet without fighting the browser.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="https://github.com/real-zephex/Good-Proxy" target="_blank" className="btn-editorial text-[11px]">
            <span className="inline-flex items-center gap-2">Source on GitHub</span>
          </Link>
          <Link href="https://goodproxy.goodproxy.workers.dev" target="_blank" className="btn-editorial text-[11px] border-accent text-accent hover:bg-accent hover:text-background">
            <span className="inline-flex items-center gap-2">Live demo ↗</span>
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
            CORS is the most annoying wall between a frontend developer and
            their data. Good Proxy exists to knock it down — not with a
            heavyweight server, but with a tiny edge function that does
            exactly what&apos;s needed and nothing else. It&apos;s the kind of
            tool that makes you wonder why every project needs a proxy at all.
          </p>
          <div className="mt-8 editorial-card p-8">
            <span className="mono-label text-[10px] text-accent block mb-4">Philosophy</span>
            <p className="serif-title text-2xl italic leading-snug">
              “Small tools, sharp edges. One problem, one proxy, zero config.”
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-16 pt-10">
        <div className="rule-double w-full" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-8">
          <div>
            <h4 className="serif-title text-2xl font-semibold mb-3">Try it live.</h4>
            <p className="text-muted text-base sans-body max-w-sm">
              Deployed on Cloudflare Workers and open source. Point your fetch at it and go.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mono-label text-[10px] text-muted">Elsewhere</span>
            <Link href="https://github.com/real-zephex/Good-Proxy" target="_blank" className="link-underline mono-label text-xs">GitHub ↗</Link>
            <Link href="https://goodproxy.goodproxy.workers.dev" target="_blank" className="link-underline mono-label text-xs">Live proxy ↗</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
