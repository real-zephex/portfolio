"use client";

import Link from "next/link";
import React, { JSX, useState, useCallback } from "react";

import Toast from "../utils/toast";
import GitHubRepoList from "../utils/github-repo-list";
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

      if (toastTimeout) {
        clearTimeout(toastTimeout);
      }

      const timeout = setTimeout(() => {
        setElement(<></>);
      }, 2000);
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
        return <InfoContent />;
      case "apps":
        return <AppsContent />;
      case "repos":
        return <ReposContent />;
      case "qualifications":
        return <QualificationsContent />;
      case "trainings":
        return <TrainingsContent />;
      default:
        return null;
    }
  };

  return (
    <main className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 pb-20">
      <div className="flex flex-col w-full mt-16 md:mt-32">
        {/* Hero */}
        <header className="relative mb-16 lg:mb-20 pb-12 lg:pb-16">
          {/* Vertical decorative rule */}
          <div className="hidden lg:block absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent" />
          <div className="hidden lg:block absolute -left-[34px] top-0 w-[3px] h-[3px] rounded-full bg-accent/80" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:pl-6">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase font-black tracking-[0.25em] text-muted mb-4 block fade-up">
                Full-Stack &middot; Security &middot; Open Source
              </span>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl serif-title font-medium leading-[0.9] tracking-tight fade-up">
                zephex
              </h1>
              <p className="text-xl lg:text-2xl mt-4 text-accent serif-title italic fade-up">
                someone who enjoys coding
                <span className="inline-block w-[3px] h-[1em] bg-accent ml-1 align-middle animate-blink" />
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-4 shrink-0 fade-up">
              <div className="w-16 h-16 rounded-full border-2 border-accent/30 flex items-center justify-center text-2xl font-black serif-title text-accent">
                Z
              </div>
              <div className="text-[10px] uppercase font-black tracking-[0.15em] text-muted leading-relaxed">
                <span className="block">real-zephex</span>
                <span className="block text-accent">github</span>
              </div>
            </div>
          </div>

          {/* Bottom decorative double-line */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-px bg-gradient-to-r from-accent/40 via-accent/10 to-transparent" />
            <div className="h-px bg-foreground/10 mt-[3px]" />
          </div>
        </header>

        {/* Pill Tab Navigation */}
        <nav className="flex flex-wrap justify-center gap-2 mb-12 lg:mb-16">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => handleTabSwitch(tab.id)}
              className={`relative px-5 py-2.5 text-sm font-bold uppercase tracking-[0.12em] transition-all duration-300 rounded-full ${
                activeTab === tab.id
                  ? "bg-foreground text-background"
                  : "text-muted hover:text-foreground border border-transparent hover:border-foreground/20"
              }`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <div className="relative min-h-[50vh]">
          <div key={activeTab} className="animate-fade-in">
            {renderContent(activeTab)}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-xs">
              <h4 className="text-xl serif-title font-bold mb-4">
                Let&apos;s talk shop.
              </h4>
              <p className="text-muted text-sm">
                Open for collaborative projects and research opportunities in Web
                & Security.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-black text-muted tracking-[0.2em]">
                Contact
              </span>
              <Link
                href="mailto:hi@zephex.in"
                className="text-xl md:text-2xl break-all serif-title italic hover:text-accent transition-colors"
              >
                hi@zephex.in
              </Link>
            </div>
            <div className="flex gap-8">
              <Link
                href="https://github.com/real-zephex"
                target="_blank"
                className="font-black uppercase text-xs border-b-2 border-foreground hover:border-accent pb-1 transition-all"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/zephex/"
                target="_blank"
                className="font-black uppercase text-xs border-b-2 border-foreground hover:border-accent pb-1 transition-all"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </footer>
      </div>
      {element}
    </main>
  );
};

/* ──────────────── Info Content ──────────────── */

const InfoContent = () => {
  return (
    <div className="space-y-16">
      {/* About Me */}
      <section>
        <h2 className="text-4xl serif-title mb-8 border-l-8 border-accent pl-6">
          About Me
        </h2>
        <div className="prose prose-xl max-w-none text-foreground/90 leading-relaxed">
          <p className="serif-title text-2xl italic leading-relaxed">
            Hey, I&apos;m{" "}
            <span className="font-bold underline decoration-accent decoration-4">
              zephex
            </span>
            . I&apos;m a second-year B.Tech student studying Computer Science
            and Cyber Security.
          </p>
          <p className="mt-6 text-lg sans-body">
            I like to build things for the web that are fast, secure, and
            well-designed. I spend most of my time working on{" "}
            <span className="text-accent font-semibold px-1">
              full-stack web development
            </span>
            , building CLI tools, tinkering with Linux servers, and
            occasionally playing Minecraft. This site is a collection of my
            recent projects and experiments.
          </p>
        </div>
      </section>

      {/* Skills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-muted/20">
        <div>
          <h3 className="section-label">Languages</h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-foreground/10 border-l-2 border-l-accent/50 editorial-card text-sm font-bold flex items-center gap-2"
              >
                {item.icon} {item.name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="section-label">Frameworks</h3>
          <div className="flex flex-wrap gap-3">
            {miscellaneous.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-foreground/10 border-l-2 border-l-accent/50 editorial-card text-sm font-bold flex items-center gap-2"
              >
                {item.icon} {item.name}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="section-label">Workflow</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-foreground/10 border-l-2 border-l-accent/50 editorial-card text-sm font-bold flex items-center gap-2"
              >
                {item.icon} {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ──────────────── Apps Content ──────────────── */

const AppsContent = () => {
  return (
    <div className="space-y-12">
      <header className="flex justify-between items-center border-b border-foreground/10 pb-6">
        <h2 className="text-2xl md:text-3xl serif-title">Live Subdomains</h2>
        <span className="text-[10px] uppercase font-black tracking-widest text-muted">
          Hosted on zephex.in
        </span>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subdomains.map((app, index) => (
          <div
            key={app.name}
            className="editorial-card p-8 group fade-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-4xl font-black text-foreground/10 group-hover:text-accent/20 transition-colors">
                0{app.order}
              </span>
              <div className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center text-[10px] font-black text-muted">
                LIVE
              </div>
            </div>
            <h3 className="text-xl serif-title font-bold mb-2">{app.name}</h3>
            <p className="text-accent text-xs font-bold mb-4 tracking-tight">
              {app.url.replace("https://", "")}
            </p>
            <p className="text-muted text-sm leading-relaxed mb-8">
              {app.description}
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={app.url}
                target="_blank"
                className="text-sm font-black uppercase tracking-widest border-b-2 border-accent hover:border-foreground transition-all"
              >
                Visit Platform ↗
              </Link>
              {app.demo && (
                <Link
                  href={app.demo}
                  target="_blank"
                  className="text-sm font-bold uppercase tracking-widest text-muted hover:text-foreground transition-colors"
                >
                  Demo ↗
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ──────────────── Repos Content ──────────────── */

const ReposContent = () => {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center border-b border-foreground/10 pb-6">
        <h2 className="text-2xl md:text-3xl serif-title">
          The Repository Feed
        </h2>
        <Link
          href="https://github.com/real-zephex"
          target="_blank"
          className="btn-editorial text-xs"
        >
          Profile ↗
        </Link>
      </header>
      <GitHubRepoList />
    </div>
  );
};

/* ──────────────── Education Content ──────────────── */

const QualificationsContent = () => {
  return (
    <div className="space-y-12">
      <div className="border-l-4 border-foreground/20 pl-8 py-4">
        <span className="text-xs uppercase font-black text-muted">
          Academic Path
        </span>
        <div className="mt-8 space-y-16">
          {qualifications.map((q, i) => (
            <div key={i}>
              <h3 className="text-2xl md:text-3xl serif-title font-bold italic">
                {q.institution}
              </h3>
              <p className="text-accent font-bold mt-1">{q.period}</p>
              <p className="mt-4 text-base md:text-lg">{q.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ──────────────── Trainings Content ──────────────── */

const TrainingsContent = () => {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl">
        {trainings.map((t, i) => (
          <div key={i} className="bg-foreground text-background p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl serif-title italic mb-4">
              {t.title}
            </h3>
            <p className="text-xs md:text-sm opacity-80 uppercase tracking-widest">
              {t.organization} &middot; {t.duration}
            </p>
            <p className="mt-6">{t.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsSection;
