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
} from "react-icons/si";

import Toast from "../utils/toast";
import Cards from "../utils/cards";
import ProjectCard from "../utils/project-card";
import SkillBadge from "../utils/skill-badge";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [element, setElement] = useState<JSX.Element>(<></>);

  // Data
  const languages = [
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
      order: 2,
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
      order: 3,
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
      order: 6,
    },
    {
      title: "Dramalama",
      description:
        "A free media website powered by Typescript, Tailwind CSS, and DaisyUI",
      link: "https://github.com/real-zephex/Dramalama",
      linkText: "Dramalama",
      color: "text-sky-300",
      tags: ["Media", "Frontend", "DaisyUI"],
      githubSupport: true,
      order: 1,
      preview: "https://free-media.netlify.app",
    },
    {
      title: "Mangathingy",
      description:
        "A free manga website powered by Typescript, Tailwind CSS, and DaisyUI with sign-in features to keep track of your reading progress.",
      link: "https://github.com/real-zephex/MangaThingy",
      linkText: "Mangathingy",
      color: "text-amber-300",
      tags: ["Manga", "Auth", "Frontend"],
      githubSupport: true,
      order: 5,
      preview: "https://read-mangas.netlify.app",
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
    { id: "qualifications", label: "Qualifications" },
    { id: "trainings", label: "Trainings" },
    { id: "projects", label: "Projects" },
    { id: "info", label: "Info" },
  ];

  return (
    <main className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-20">
      <div className="flex flex-col items-center w-full mt-8">
        {/* Tabs Header */}
        <div
          role="tablist"
          className="tabs tabs-glass p-2 rounded-2xl inline-flex justify-center mb-6"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              className={`tab h-10 px-6 transition-all duration-300 ${
                activeTab === tab.id
                  ? "tab-active bg-cyan-500/15 text-primary"
                  : "hover:bg-white/5"
              }`}
              onClick={() => {
                setActiveTab(tab.id);
                // handleToast(`Viewing ${tab.label.toLowerCase()}...`);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="w-full glass rounded-3xl p-6 md:p-8 min-h-[400px] transition-all duration-500 fade-in">
          {/* ==================== QUALIFICATIONS CONTENT ==================== */}
          {activeTab === "qualifications" && (
            <div className="space-y-8 animate-fade-in">
              {/* School */}
              <div className="timeline-item">
                <section className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <LuSchool size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-300">
                      Kundan Vidya Mandir
                    </h3>
                    <p className="text-white/60 text-sm">2010 - 2024</p>
                  </div>
                </section>
                <div className="glass p-4 rounded-xl ml-2">
                  <ul className="list-disc list-inside space-y-1 text-white/80">
                    <li>
                      <span className="font-semibold text-primary">
                        10th Grade:
                      </span>{" "}
                      89%
                    </li>
                    <li>
                      <span className="font-semibold text-primary">
                        12th Grade:
                      </span>{" "}
                      83.2%
                    </li>
                  </ul>
                </div>
              </div>

              {/* University */}
              <div className="timeline-item">
                <section className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-xl bg-lime-500/10 border border-lime-500/20">
                    <LuUniversity size={24} className="text-lime-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-lime-300">
                      Lamrin Tech Skills University
                    </h3>
                    <p className="text-white/60 text-sm">2024 - 2028</p>
                  </div>
                </section>
                <div className="glass p-4 rounded-xl ml-2">
                  <p className="text-white/80 leading-relaxed">
                    B.Tech in Computer Science Engineering with specialization
                    in
                    <span className="text-accent font-medium ml-1">
                      Cyber Security
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ==================== TRAININGS CONTENT ==================== */}
          {activeTab === "trainings" && (
            <div className="animate-fade-in">
              <div className="p-6 border-b border-white/5 bg-white/5 rounded-t-2xl mb-6 -mt-6 -mx-6 md:-mx-8 md:-mt-8">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                  AR/VR Training
                </h3>
                <p className="text-white/60 mt-1 ml-5">
                  5-day intensive training at NIELIT, Ropar on WebXR and
                  A-Frame.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Cards
                  title="3D Donut"
                  message="A 3D donut which changes color."
                  url="https://doonut.glitch.me"
                  image="/image.png"
                />
                <Cards
                  title="Rain Scenery"
                  message="Immersive rain scenery with ocean and physics."
                  url="https://rain-aframe.glitch.me"
                  image="/rain.png"
                />
                <Cards
                  title="3D Abstract"
                  message="Abstract 3D world exploration."
                  url="https://idekwhatthehellisthis.glitch.me"
                  image="/waste.png"
                />
              </div>
            </div>
          )}

          {/* ==================== PROJECTS CONTENT ==================== */}
          {activeTab === "projects" && (
            <div className="animate-fade-in">
              {/* Featured/Current Work */}
              <div
                role="alert"
                className="alert glass shadow-glow-cyan mb-8 border-l-4 border-l-primary cursor-pointer hover:scale-[1.01] transition-transform"
                onClick={() =>
                  handleToast("Hold your horses! It's not ready yet!")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-primary h-6 w-6 shrink-0 animate-pulse"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div>
                  <h3 className="font-bold text-white">Currently Working On</h3>
                  <div className="text-xs text-white/70">
                    Jewelry shop e-commerce platform with full database and
                    payment integration.
                  </div>
                </div>
              </div>

              {/* Project Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {projects
                  .sort((a, b) => a.order - b.order)
                  .map((project, index) => (
                    <ProjectCard key={index} {...project} index={index} />
                  ))}
              </div>
            </div>
          )}

          {/* ==================== INFO CONTENT ==================== */}
          {activeTab === "info" && (
            <div className="animate-fade-in">
              <div className="glass p-6 rounded-2xl mb-8 bg-white/5">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  About Me
                </h3>
                <p className="text-lg leading-relaxed text-white/80">
                  Hey there! Welcome to my portfolio! I&apos;m Sumit, a
                  first-year B.Tech student at LTSU Ropar specializing in
                  Computer Science with Cyber Security. While my academic focus
                  is on security, my interest truly lies in
                  <span className="text-primary font-medium mx-1">
                    web development
                  </span>
                  , Linux, and spending way too much time playing Minecraft.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Languages */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>{" "}
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((item, index) => (
                      <SkillBadge
                        key={index}
                        name={item.name}
                        icon={item.icon}
                        variant={item.variant}
                      />
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>{" "}
                    Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((item, index) => (
                      <SkillBadge
                        key={index}
                        name={item.name}
                        icon={item.icon}
                        variant={item.variant}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>{" "}
                  Frameworks & Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {miscellaneous.map((item, index) => (
                    <SkillBadge
                      key={index}
                      name={item.name}
                      icon={item.icon}
                      variant={item.variant}
                    />
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-white/60">
                  Or drop me an email at{" "}
                  <Link
                    href="mailto:zephex@duck.com"
                    className="text-primary hover:text-primary-300 hover:underline transition-all"
                  >
                    zephex@duck.com
                  </Link>
                </div>

                <div className="flex gap-3">
                  <Link
                    href="https://github.com/real-zephex"
                    target="_blank"
                    className="btn btn-sm btn-outline hover:btn-primary"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/zephex/"
                    target="_blank"
                    className="btn btn-sm btn-outline hover:btn-secondary text-white"
                  >
                    <FaLinkedin className="mr-2" /> LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {element}
    </main>
  );
};

export default TabsSection;
