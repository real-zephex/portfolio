"use client";

import Link from "next/link";
import React, { JSX, useState, useCallback } from "react";

import Toast from "../utils/toast";
import GitHubRepoList from "../utils/github-repo-list";
import ResumeGate from "../resume/resume-gate";
import {
  languages,
  tools,
  miscellaneous,
  qualifications,
  trainings,
  subdomains,
  tabs,
} from "@/components/lib/data";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [element, setElement] = useState<JSX.Element>(<></>);
  const [toastTimeout, setToastTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleToast = useCallback(
    (message: string) => {
      const toast = Toast(message);
      setElement(toast);

      if (toastTimeout) clearTimeout(toastTimeout);

      const timeout = setTimeout(() => setElement(<></>), 2200);
      setToastTimeout(timeout);
    },
    [toastTimeout]
  );

  const handleTabSwitch = useCallback(
    (tabId: string) => {
      if (tabId === activeTab) return;
      setActiveTab(tabId);
    },
    [activeTab]
  );

  const renderContent = (tabId: string) => {
    switch (tabId) {
      case "info":
        return <InfoContent onCopy={handleToast} />;
      case "apps":
        return <AppsContent />;
      case "repos":
        return <ReposContent />;
      case "qualifications":
        return <QualificationsContent />;
      case "trainings":
        return <TrainingsContent />;
      case "resume":
        return <ResumeContent />;
      default:
        return null;
    }
  };

  const activeIndex = tabs.findIndex((t) => t.id === activeTab) + 1;

  return (
    <main className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-10 pb-24">
      <div className="flex flex-col w-full mt-10 md:mt-16">
        {/* ─── Masthead ─────────────────────────────────────────────── */}
        <header className="relative mb-14">
          {/* top folio strip */}
          <div className="flex items-center justify-between mono-label text-[10px] text-muted mb-3">
            <span>Portfolio &middot; Vol. IV</span>
            <span className="hidden sm:inline">Rupnagar, Punjab — India</span>
            <span>No. {String(activeIndex).padStart(2, "0")}</span>
          </div>

          <div className="rule-double w-full" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:pl-0 py-8">
            <div className="max-w-2xl">
              <h1 className="serif-title text-6xl sm:text-8xl lg:text-9xl font-semibold leading-[0.85] tracking-tight fade-up">
                zephex
              </h1>
              <p className="serif-title text-xl sm:text-2xl mt-5 text-accent italic fade-up" style={{ animationDelay: "0.1s" }}>
                a journal of things built in code
                <span className="inline-block w-[3px] h-[1em] bg-accent ml-2 align-middle animate-blink" />
              </p>
            </div>

            <div className="hidden sm:flex flex-col items-end gap-1 fade-up" style={{ animationDelay: "0.15s" }}>
              <span className="mono-label text-[10px] text-muted">B.Tech — Cyber Security</span>
              <span className="serif-title text-lg italic">full-stack &amp; security</span>
              <div className="flex items-center gap-2 mt-2">
                <span className="rubber-stamp text-[10px]">Open to work</span>
              </div>
            </div>
          </div>

          <div className="rule-double w-full" />
        </header>

        {/* ─── Chapter navigation ───────────────────────────────────── */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-14">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => handleTabSwitch(tab.id)}
              className={`group relative flex items-baseline gap-2 px-1 py-2 mono-label text-xs transition-colors duration-300 ${
                activeTab === tab.id ? "text-accent" : "text-muted hover:text-foreground"
              }`}
            >
              <span className="chapter-no italic text-base">{String.fromCharCode(65 + i)}.</span>
              {tab.label}
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] bg-accent transition-all duration-300 ${
                  activeTab === tab.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* ─── Tab content ──────────────────────────────────────────── */}
        <div className="relative min-h-[50vh]">
          <div key={activeTab} className="animate-fade-in">
            {renderContent(activeTab)}
          </div>
        </div>

        {/* ─── Colophon / footer ────────────────────────────────────── */}
        <footer className="mt-16 pt-10">
          <div className="rule-double w-full" />
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 py-8">
            <div className="max-w-xs">
              <h4 className="serif-title text-2xl font-semibold mb-3">
                Let&apos;s talk shop.
              </h4>
              <p className="text-muted text-base leading-relaxed sans-body">
                Open for collaborative projects, freelance work, and research
                opportunities in Web &amp; Security.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="mono-label text-[10px] text-muted">Correspondence</span>
              <Link
                href="mailto:hi@zephex.in"
                className="serif-title text-2xl md:text-3xl italic link-underline hover:text-accent transition-colors"
              >
                hi@zephex.in
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="mono-label text-[10px] text-muted">Elsewhere</span>
              <Link href="https://github.com/real-zephex" target="_blank" className="link-underline mono-label text-xs">
                GitHub ↗
              </Link>
              <Link href="https://www.linkedin.com/in/zephex/" target="_blank" className="link-underline mono-label text-xs">
                LinkedIn ↗
              </Link>
            </div>
          </div>
          <div className="border-t border-rule py-4 flex flex-col sm:flex-row justify-between gap-2 mono-label text-[10px] text-muted">
            <span>Set in Fraunces &amp; Newsreader &middot; Printed on recycled electrons</span>
            <span>&copy; {new Date().getFullYear()} zephex</span>
          </div>
        </footer>
      </div>
      {element}
    </main>
  );
};

/* ──────────────── I. About ──────────────── */

const InfoContent = ({ onCopy }: { onCopy: (m: string) => void }) => {
  return (
    <div className="space-y-16">
      {/* About — magazine spread */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <span className="chapter-no italic text-2xl text-accent">I.</span>
          <h2 className="serif-title text-4xl md:text-5xl font-semibold">About Me</h2>
          <div className="rule-single flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <p className="drop-cap serif-title text-2xl md:text-3xl italic leading-snug">
              Hey, I&apos;m{" "}
              <span className="font-semibold not-italic underline decoration-accent decoration-4 underline-offset-4">
                zephex
              </span>
              . A third-year B.Tech student in Computer Science &amp; Cyber Security,
              building things for the web that are fast, secure, and well-designed.
            </p>
            <p className="mt-6 text-lg leading-relaxed sans-body text-foreground/90">
              I spend most of my time on full-stack web development, CLI tools,
              and Linux servers — plus the occasional Minecraft session. I&apos;ve
              built agentic AI assistants that live in the terminal and on
              Telegram, audited real-world web platforms (findings reported to
              CERT-In), and I&apos;m currently learning Rust with plans to rewrite
              my favourite Go project in it.
            </p>
            <p className="mt-5 text-lg leading-relaxed sans-body text-foreground/85">
              This site is a living archive of those projects and experiments — a
              desk drawer of things I&apos;ve made and learned along the way.
            </p>
          </div>
          <div className="lg:col-span-4">
            <aside className="editorial-card p-6">
              <span className="mono-label text-[10px] text-accent mb-4 block">Pull quote</span>
              <p className="serif-title text-xl italic leading-snug">
                “Good software is quiet. It does its job and gets out of the way.”
              </p>
              <div className="rule-single mt-5 mb-3" />
              <p className="mono-label text-[10px] text-muted">— zephex, on design</p>
            </aside>
          </div>
        </div>
      </section>

      {/* Skills — index / table of contents */}
      <section className="pt-4">
        <div className="flex items-center gap-4 mb-8">
          <span className="chapter-no italic text-2xl text-accent">II.</span>
          <h2 className="serif-title text-4xl md:text-5xl font-semibold">The Toolkit</h2>
          <div className="rule-single flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { label: "Languages", items: languages },
            { label: "Frameworks", items: miscellaneous },
            { label: "Workflow", items: tools },
          ].map((col) => (
            <div key={col.label}>
              <h3 className="mono-label text-[10px] text-muted mb-4 pb-2 border-b border-rule">
                {col.label}
              </h3>
              <div className="flex flex-col">
                {col.items.map((item, i) => (
                  <div key={i} className="group flex items-center py-1.5">
                    <span className="flex items-center gap-2.5 text-[15px] font-medium text-foreground/90">
                      <span className="text-accent/70">{item.icon}</span>
                      {item.name}
                    </span>
                    <span className="dotted-leader" />
                    <span className="mono-label text-[9px] text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.variant}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

/* ──────────────── III. Apps ──────────────── */

const AppsContent = () => {
  return (
    <div className="space-y-12">
      <header className="flex items-center gap-4 border-b border-rule pb-6">
        <span className="chapter-no italic text-2xl text-accent">III.</span>
        <h2 className="serif-title text-3xl md:text-4xl font-semibold">Live Subdomains</h2>
        <span className="ml-auto mono-label text-[10px] text-muted hidden sm:inline">
          Hosted on zephex.in
        </span>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subdomains.map((app, index) => (
          <article
            key={app.name}
            className="editorial-card p-7 group fade-up"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="flex justify-between items-start mb-6">
              <span className="serif-title italic text-5xl font-semibold text-rule-strong/40 group-hover:text-accent/40 transition-colors">
                {String(app.order).padStart(2, "0")}
              </span>
              <span className="rubber-stamp text-[9px]">Live</span>
            </div>
            <h3 className="serif-title text-2xl font-semibold mb-1.5 group-hover:text-accent transition-colors">
              {app.name}
            </h3>
            <p className="mono-label text-[10px] text-accent mb-4 truncate">
              {app.url.replace("https://", "")}
            </p>
            <p className="text-muted text-[15px] leading-relaxed mb-7 sans-body">
              {app.description}
            </p>
            <div className="flex items-center gap-5 pt-4 border-t border-rule flex-wrap">
              <Link
                href={app.url}
                target="_blank"
                className="mono-label text-[11px] link-underline text-foreground"
              >
                Visit platform ↗
              </Link>
              {app.demo && (
                <Link
                  href={app.demo}
                  target="_blank"
                  className="mono-label text-[11px] text-muted hover:text-foreground transition-colors"
                >
                  Demo ↗
                </Link>
              )}
              {app.github && (
                <Link
                  href={app.github}
                  target="_blank"
                  className="mono-label text-[11px] text-muted hover:text-accent transition-colors"
                >
                  Source ↗
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

/* ──────────────── IV. Repos ──────────────── */

const ReposContent = () => {
  return (
    <div className="space-y-8">
      <header className="flex items-center gap-4 border-b border-rule pb-6">
        <span className="chapter-no italic text-2xl text-accent">IV.</span>
        <h2 className="serif-title text-3xl md:text-4xl font-semibold">The Repository Feed</h2>
        <Link
          href="https://github.com/real-zephex"
          target="_blank"
          className="ml-auto btn-editorial text-[10px]"
        >
          Profile ↗
        </Link>
      </header>
      <GitHubRepoList />
    </div>
  );
};

/* ──────────────── V. Education ──────────────── */

const QualificationsContent = () => {
  return (
    <div className="space-y-12">
      <header className="flex items-center gap-4 border-b border-rule pb-6">
        <span className="chapter-no italic text-2xl text-accent">V.</span>
        <h2 className="serif-title text-3xl md:text-4xl font-semibold">Academic Path</h2>
      </header>

      <div className="border-l-2 border-rule pl-8 md:pl-12 flex flex-col gap-14">
        {qualifications.map((q, i) => (
          <div key={i} className="relative">
            {/* chapter marker */}
            <span className="absolute -left-[45px] md:-left-[57px] top-2 size-3 rounded-full bg-accent ring-4 ring-background" />
            <span className="mono-label text-[10px] text-accent">{q.period}</span>
            <h3 className="serif-title text-3xl md:text-4xl font-semibold italic mt-1">
              {q.institution}
            </h3>
            <p className="mt-3 text-lg text-foreground/85 sans-body leading-relaxed">
              {q.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ──────────────── Trainings ──────────────── */

const TrainingsContent = () => {
  return (
    <div className="space-y-12">
      <header className="flex items-center gap-4 border-b border-rule pb-6">
        <span className="chapter-no italic text-2xl text-accent">VI.</span>
        <h2 className="serif-title text-3xl md:text-4xl font-semibold">Trainings</h2>
      </header>

      <div className="max-w-3xl">
        {trainings.map((t, i) => (
          <article key={i} className="relative bg-foreground text-background p-8 md:p-10">
            <span className="absolute top-0 left-0 w-16 h-1 bg-accent" />
            <span className="mono-label text-[10px] opacity-60">
              {t.organization} &middot; {t.duration}
            </span>
            <h3 className="serif-title text-3xl md:text-4xl italic font-semibold mt-3 mb-5">
              {t.title}
            </h3>
            <p className="text-lg leading-relaxed sans-body opacity-90">
              {t.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

/* ──────────────── Résumé ──────────────── */

const ResumeContent = () => {
  return (
    <div className="space-y-12">
      <header className="flex items-center gap-4 border-b border-rule pb-6">
        <span className="chapter-no italic text-2xl text-accent">F.</span>
        <h2 className="serif-title text-3xl md:text-4xl font-semibold">Résumé</h2>
        <span className="ml-auto mono-label text-[10px] text-muted hidden sm:inline">
          PDF &middot; One page
        </span>
      </header>

      <div className="max-w-3xl">
        <article className="editorial-card p-8 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex-1">
              <span className="mono-label text-[10px] text-accent block mb-3">
                Curriculum Vitae
              </span>
              <h3 className="serif-title text-3xl md:text-4xl font-semibold italic mb-3">
                zephex
              </h3>
              <p className="text-muted text-[15px] leading-relaxed sans-body">
                Full-stack developer &amp; cyber security enthusiast. One page,
                ready for print or PDF. Last updated August 2026.
              </p>
            </div>
            <ResumeGate />
          </div>
          <div className="rule-single mt-8 mb-5" />
          <p className="mono-label text-[9px] text-muted leading-relaxed">
            Hiring? The résumé links to GitHub, LinkedIn, and this very site.
            Letters of recommendation available on request. (Spoiler: the
            answer to the sum is always an integer.)
          </p>
        </article>
      </div>
    </div>
  );
};

export default TabsSection;
