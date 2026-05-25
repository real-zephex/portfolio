"use client";

import { JSX } from "react";
import { FaJava, FaPython, FaGitAlt, FaGithub, FaReact } from "react-icons/fa";
import { SiTypescript, SiCplusplus, SiNextdotjs, SiBun, SiHono, SiTailwindcss, SiGo, SiCodeberg, SiVercel, SiNetlify } from "react-icons/si";

export interface Skill {
  name: string;
  icon: JSX.Element;
  variant: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "neutral";
}

export interface Project {
  title: string;
  description: string;
  link: string;
  linkText: string;
  color: string;
  tags: string[];
  githubSupport: boolean;
  order: number;
  preview?: string;
}

export interface Qualification {
  institution: string;
  period: string;
  description: string;
}

export interface Training {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

export interface TabConfig {
  id: string;
  label: string;
}

export const languages: Skill[] = [
  { name: "Go", icon: <SiGo className="text-cyan-500" />, variant: "info" },
  { name: "Python", icon: <FaPython className="text-blue-400" />, variant: "info" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, variant: "secondary" },
  { name: "C++", icon: <SiCplusplus className="text-blue-600" />, variant: "primary" },
  { name: "Java", icon: <FaJava className="text-red-400" />, variant: "accent" },
];

export const tools: Skill[] = [
  { name: "Git", icon: <FaGitAlt className="text-orange-500" />, variant: "warning" },
  { name: "GitHub", icon: <FaGithub />, variant: "neutral" },
  { name: "Codeberg", icon: <SiCodeberg className="text-blue-400" />, variant: "info" },
  { name: "Vercel", icon: <SiVercel />, variant: "neutral" },
  { name: "Netlify", icon: <SiNetlify className="text-teal-400" />, variant: "info" },
];

export const miscellaneous: Skill[] = [
  { name: "NextJS", icon: <SiNextdotjs />, variant: "neutral" },
  { name: "Bun", icon: <SiBun className="text-yellow-100" />, variant: "warning" },
  { name: "Hono", icon: <SiHono className="text-orange-400" />, variant: "warning" },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" />, variant: "info" },
  { name: "React", icon: <FaReact className="text-cyan-400" />, variant: "info" },
];

export const projects: Project[] = [
  {
    title: "askcli",
    description:
      "Local-first, agentic CLI assistant with tool use, long-term memory, Telegram integration, and TTS/STT support.",
    link: "https://github.com/real-zephex/askcli",
    linkText: "askcli",
    color: "text-emerald-300",
    tags: ["Go", "CLI", "AI"],
    githubSupport: true,
    order: 1,
  },
  {
    title: "Good Proxy",
    description:
      "A CORS proxy to bypass CORS errors by adding necessary headers to requests. Capable of identifying disguised files and handling VTT and HLS files. Built with Bun and Hono.",
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
      "A privacy-first AI chat application featuring some of the fastest LLMs currently available, without any telemetry.",
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
      "A fullstack application for Nirmal Spices Business featuring both a frontend and a CMS.",
    link: "https://nirmalspices.com",
    linkText: "Nirmal Spices",
    color: "text-sky-400",
    tags: ["Full Stack", "CMS", "Next.js", "Paid Project"],
    githubSupport: false,
    order: 4,
  },
];

export const qualifications: Qualification[] = [
  {
    institution: "Lamrin Tech Skills University",
    period: "2024 — Present",
    description: "B.Tech in Computer Science Engineering (Cyber Security Specialist)",
  },
  {
    institution: "Kundan Vidya Mandir",
    period: "2010 — 2024",
    description: "Secondary & Senior Secondary Education",
  },
];

export const trainings: Training[] = [
  {
    title: "AR/VR Deep Dive",
    organization: "NIELIT Ropar",
    duration: "5 Days",
    description: "Intensive exploration of WebXR, A-Frame, and immersive spatial design.",
  },
];

export const tabs: TabConfig[] = [
  { id: "info", label: "Info" },
  { id: "repos", label: "Repos" },
  { id: "qualifications", label: "Education" },
  { id: "trainings", label: "Trainings" },
];
