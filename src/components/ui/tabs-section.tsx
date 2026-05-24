"use client";

import Link from "next/link";
import React, { JSX, useState } from "react";
import { LuSchool, LuUniversity } from "react-icons/lu";
import {
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCplusplus,
  SiNextdotjs,
  SiBun,
  SiHono,
  SiTailwindcss,
  SiGo,
} from "react-icons/si";

import Toast from "../utils/toast";
import Cards from "../utils/cards";
import ProjectCard from "../utils/project-card";
import SkillBadge from "../utils/skill-badge";
import GitHubRepoList from "../utils/github-repo-list";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [element, setElement] = useState<JSX.Element>(<></>);

  // Data
  const languages = [
    {
      name: "Go",
      icon: <SiGo className="text-cyan-500" />,
      variant: "info" as const,
    },
    {
      name: "Python",
      icon: <FaPython className="text-blue-400" />,
      variant: "info" as const,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" />,
      variant: "secondary" as const,
    },
    {
      name: "C++",
      icon: <SiCplusplus className="text-blue-600" />,
      variant: "primary" as const,
    },
    {
      name: "Java",
      icon: <FaJava className="text-red-400" />,
      variant: "accent" as const,
    },
  ];

  const tools = [
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-500" />,
      variant: "warning" as const,
    },
    { name: "GitHub", icon: <FaGithub />, variant: "neutral" as const },
  ];

  const miscellaneous = [
    { name: "NextJS", icon: <SiNextdotjs />, variant: "neutral" as const },
    {
      name: "Bun",
      icon: <SiBun className="text-yellow-100" />,
      variant: "warning" as const,
    },
    {
      name: "Hono",
      icon: <SiHono className="text-orange-400" />,
      variant: "warning" as const,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-400" />,
      variant: "info" as const,
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400" />,
      variant: "info" as const,
    },
  ];

  const projects = [
    {
      title: "Good Proxy",
      description:
        "A CORS proxy to bypass well, CORS errors by adding necessary headers to the requests. It is capable of identifying disguised files, handle VTT and HLS files. Made using Bun and Hono.",
      link: "https://github.com/real-zephex/Good-Proxy",
      linkText: "Good Proxy",
      color: "text-teal-300",
      tags: ["Bun", "Hono", "TypeScript"],
      githubSupport: true,
      order: 1,
      preview: "https://goodproxy.goodproxy.workers.dev",
    },
    {
      title: "Rapid Chat",
      description:
        "A privacy first AI chat application. It features some of the very fast LLMs currently available without any telemetry.",
      link: "https://github.com/real-zephex/Rapid-Chat",
      linkText: "Rapid Chat",
      color: "text-cyan-300",
      tags: ["Next.js", "AI", "TailwindCSS"],
      githubSupport: true,
      order: 2,
      preview: "https://speedchat.vercel.app",
    },
    {
      title: "Nirmal Spices Website",
      description:
        "A fullstack application for Nirmal Spices Business. It features both a frontend and a CMS.",
      link: "https://nirmalspices.com",
      linkText: "Nirmal Spices",
      color: "text-sky-400",
      tags: ["Full Stack", "CMS", "Next.js", "Paid Project"],
      githubSupport: false,
      order: 3,
    },
  ];

  // Toast Handler
  let toastTimeout: NodeJS.Timeout;

  function handleToast(message: string) {
    const toast = Toast(message);
    setElement(toast);

    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }

    toastTimeout = setTimeout(() => {
      setElement(<></>);
    }, 2000);
  }

  const tabs = [
    { id: "info", label: "Info" },
    { id: "all-repos", label: "All Repos" },
    { id: "qualifications", label: "Qualifications" },
    { id: "trainings", label: "Trainings" },
  ];

  return (
    <main className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20">
      <div className="flex flex-col w-full mt-16 md:mt-32">
        {/* Editorial Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-16 border-b-2 border-foreground pb-4 lg:pb-8 fade-up">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl md:text-8xl serif-title font-medium leading-tight">
              zephex ⚡
            </h1>
            <p className="text-xl md:text-2xl mt-2 lg:mt-4 text-accent font-medium serif-title italic">
              someone who enjoys coding
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col md:items-end justify-between">
            <div className="text-left md:text-right mb-6 md:mb-0">
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Navigation Sidebar/Top */}
          <div className="lg:col-span-3">
            <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar whitespace-nowrap gap-2 lg:gap-4 sticky top-12 -mx-6 px-6 lg:mx-0 lg:px-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`text-left text-base md:text-lg py-2 border-b-2 lg:border-b-0 lg:border-l-4 px-3 md:px-4 transition-all duration-300 shrink-0 ${
                    activeTab === tab.id
                      ? "border-accent text-accent font-bold translate-x-1"
                      : "border-transparent text-muted hover:text-foreground md:hover:translate-x-1"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9 min-h-[60vh] fade-in">
            {/* ==================== INFO CONTENT ==================== */}
            {activeTab === "info" && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-4xl serif-title mb-8 border-l-8 border-accent pl-6">About Me</h2>
                  <div className="prose prose-xl max-w-none text-foreground/90 leading-relaxed">
                    <p className="serif-title text-2xl italic leading-relaxed">
                      Hey, I&apos;m{" "}
                      <span className="font-bold underline decoration-accent decoration-4">zephex</span>. 
                      I&apos;m a second-year B.Tech student studying Computer Science and Cyber Security.
                    </p>
                    <p className="mt-6 text-lg sans-body">
                      I like to build things for the web that are fast, secure, and well-designed. 
                      I spend most of my time working on <span className="text-accent font-semibold px-1">full-stack web development</span>, 
                      building CLI tools, tinkering with Linux servers, and occasionally playing Minecraft. This site is a collection of my recent projects and experiments.
                    </p>
                  </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-muted/20">
                  <div>
                    <h3 className="text-xs uppercase tracking-tighter font-black text-muted mb-6">Languages</h3>
                    <div className="flex flex-wrap gap-3">
                      {languages.map((item, index) => (
                        <span key={index} className="px-4 py-2 border border-foreground/10 editorial-card text-sm font-bold flex items-center gap-2">
                          {item.icon} {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-tighter font-black text-muted mb-6">Frameworks</h3>
                    <div className="flex flex-wrap gap-3">
                      {miscellaneous.map((item, index) => (
                        <span key={index} className="px-4 py-2 border border-foreground/10 editorial-card text-sm font-bold flex items-center gap-2">
                          {item.icon} {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-tighter font-black text-muted mb-6">Workflow</h3>
                    <div className="flex flex-wrap gap-3">
                      {tools.map((item, index) => (
                        <span key={index} className="px-4 py-2 border border-foreground/10 editorial-card text-sm font-bold flex items-center gap-2">
                          {item.icon} {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== PROJECTS CONTENT ==================== */}
            {/* activeTab === "projects" && (
              <div className="space-y-12">
                <div className="border-4 border-foreground p-8 relative">
                  <div className="absolute -top-4 -right-4 bg-accent text-background px-4 py-1 text-xs font-black uppercase tracking-widest">
                    Status: In Progress
                  </div>
                  <h3 className="text-3xl serif-title font-bold mb-4">The Jewelry Archive</h3>
                  <p className="text-lg opacity-80 mb-6">An e-commerce platform blending luxury aesthetics with high-performance payment orchestration.</p>
                  <button className="btn-editorial" onClick={() => handleToast("Early access coming soon...")}>Learn More</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <div key={index} className="editorial-card p-8 group">
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-4xl font-black text-foreground/10 group-hover:text-accent/20 transition-colors">0{index + 1}</span>
                        <div className="flex gap-2">
                          {project.tags.map((tag, tIndex) => (
                            <span key={tIndex} className="text-[10px] uppercase font-bold tracking-tighter border border-foreground/20 px-2 py-0.5">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <h3 className="text-2xl serif-title font-bold mb-3">{project.title}</h3>
                      <p className="text-muted text-sm leading-relaxed mb-8">{project.description}</p>
                      <Link href={project.link} target="_blank" className="text-sm font-black uppercase tracking-widest border-b-2 border-accent hover:border-foreground transition-all">
                        View Case Study
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ) */}

            {/* ==================== ALL REPOS CONTENT ==================== */}
            {activeTab === "all-repos" && (
              <div className="space-y-8">
                <header className="flex justify-between items-center border-b border-foreground/10 pb-6">
                  <h2 className="text-2xl md:text-3xl serif-title">The Repository Feed</h2>
                  <Link href="https://github.com/real-zephex" target="_blank" className="btn-editorial text-xs">Profile ↗</Link>
                </header>
                <div className="grid grid-cols-1 gap-4">
                  <GitHubRepoList />
                </div>
              </div>
            )}

            {/* ==================== QUALIFICATIONS CONTENT ==================== */}
            {activeTab === "qualifications" && (
              <div className="space-y-12">
                <div className="border-l-4 border-foreground pl-8 py-4">
                  <span className="text-xs uppercase font-black text-muted">Academic Path</span>
                  <div className="mt-8 space-y-16">
                    <div>
                      <h3 className="text-2xl md:text-3xl serif-title font-bold italic">Lamrin Tech Skills University</h3>
                      <p className="text-accent font-bold mt-1">2024 — Present</p>
                      <p className="mt-4 text-base md:text-lg">B.Tech in Computer Science Engineering (Cyber Security Specialist)</p>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl serif-title font-bold italic">Kundan Vidya Mandir</h3>
                      <p className="text-accent font-bold mt-1">2010 — 2024</p>
                      <p className="mt-4 text-base md:text-lg">Secondary & Senior Secondary Education</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== TRAININGS CONTENT ==================== */}
            {activeTab === "trainings" && (
              <div className="space-y-12">
                <div className="max-w-3xl">
                  <div className="bg-foreground text-background p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl serif-title italic mb-4">AR/VR Deep Dive</h3>
                    <p className="text-xs md:text-sm opacity-80 uppercase tracking-widest">NIELIT Ropar • 5 Days</p>
                    <p className="mt-6">Intensive exploration of WebXR, A-Frame, and immersive spatial design.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Editorial Footer */}
        <footer className="mt-16 md:mt-32 pt-12 md:pt-16 border-t-2 border-foreground flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <h4 className="text-xl serif-title font-bold mb-4">Let&apos;s talk shop.</h4>
            <p className="text-muted text-sm">Open for collaborative projects and research opportunities in Web & Security.</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase font-black text-muted tracking-[0.2em]">Contact</span>
            <Link href="mailto:zephex@duck.com" className="text-xl md:text-2xl break-all serif-title italic hover:text-accent transition-colors">zephex@duck.com</Link>
          </div>
          <div className="flex gap-8">
            <Link href="https://github.com/real-zephex" target="_blank" className="font-black uppercase text-xs border-b-2 border-foreground hover:border-accent pb-1 transition-all">GitHub</Link>
            <Link href="https://www.linkedin.com/in/zephex/" target="_blank" className="font-black uppercase text-xs border-b-2 border-foreground hover:border-accent pb-1 transition-all">LinkedIn</Link>
          </div>
        </footer>
      </div>
      {element}
    </main>
  );
};

export default TabsSection;
