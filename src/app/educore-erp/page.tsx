import Link from "next/link";
import type { Metadata } from "next";
import { FiUsers, FiBookOpen, FiCalendar, FiClipboard, FiBarChart2, FiShield, FiDatabase, FiLayers } from "react-icons/fi";

export const metadata: Metadata = {
  title: "EduCore ERP",
  description:
    "EduCore ERP — an academic management platform built with Next.js, Convex, and Clerk. Role-based access, attendance analytics, sessions, exams, and marks.",
};

const features = [
  {
    icon: <FiUsers className="size-5" />,
    title: "Role-based access",
    text: "Four-tier model — admin, teacher, student, staff — with Clerk auth and server-side Convex authorization. New accounts wait in 'pending' until an admin approves.",
  },
  {
    icon: <FiBookOpen className="size-5" />,
    title: "Academic structure",
    text: "Classes, students, semesters, and subjects with validation and indexing. Every record belongs somewhere — no orphans.",
  },
  {
    icon: <FiCalendar className="size-5" />,
    title: "Session scheduling",
    text: "Teachers schedule sessions tied to class + subject + teacher, with date/time metadata. Teachers only see their own sessions and subjects.",
  },
  {
    icon: <FiClipboard className="size-5" />,
    title: "Attendance workflow",
    text: "Per-session attendance with P/A/DL/UM statuses, bulk defaults, and auto pre-created rows for every student — marking takes seconds, not registers.",
  },
  {
    icon: <FiBarChart2 className="size-5" />,
    title: "Analytics matrix",
    text: "Class-wide attendance matrix with subject/date filters, sorting, and Good/Fair/Poor buckets with class averages. Instant visibility for mentors and parents.",
  },
  {
    icon: <FiLayers className="size-5" />,
    title: "Exams & marks",
    text: "Define exams per semester, enter marks in a spreadsheet-style grid with validation, and enforce subject ownership so teachers only edit their own subjects.",
  },
  {
    icon: <FiDatabase className="size-5" />,
    title: "Data integrity",
    text: "Cascade cleanup on deletes, indexes on hot paths, and bulk-optimized queries keep it fast even at thousands of records.",
  },
  {
    icon: <FiShield className="size-5" />,
    title: "Secure by default",
    text: "Enterprise auth, server-side role checks in every operation, and end-to-end validation. The UI can't show what the backend won't serve.",
  },
];

export default function EduCorePage() {
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
          <span className="mono-label text-[10px] text-muted">Next.js &middot; Convex &middot; Clerk</span>
        </div>
        <h1 className="serif-title text-5xl sm:text-7xl font-semibold leading-[0.9] tracking-tight">EduCore ERP</h1>
        <p className="serif-title text-xl md:text-2xl mt-5 text-accent italic">
          an academic management platform for real institutions
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed sans-body text-foreground/90">
          EduCore ERP digitizes the core operations of a school or college:
          student enrollment, classes and subjects, session scheduling,
          attendance with analytics, exams, and marks — all behind granular
          role-based access. Built with Next.js, Convex, and Clerk, it replaces
          spreadsheets and registers with one real-time, secure source of
          truth. This is the project I pitch to institutions looking for an
          ERP portal.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="https://github.com/real-zephex/mentor-mentee-attendance" target="_blank" className="btn-editorial text-[11px]">
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
            Institutions run on attendance registers, marks sheets, and
            whispered updates. EduCore ERP turns that into a live system:
            attendance that takes seconds, analytics that surface at-risk
            students automatically, and role scoping that keeps teachers in
            their lane and admins in control. It&apos;s not a demo — it&apos;s
            a deployable product, designed to grow into a full ERP suite.
          </p>
          <div className="mt-8 editorial-card p-8">
            <span className="mono-label text-[10px] text-accent block mb-4">Why I built it</span>
            <p className="serif-title text-2xl italic leading-snug">
              “A classmate needed a better way to track mentor-mentee
              attendance. I built the system; the product wrote itself.”
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-16 pt-10">
        <div className="rule-double w-full" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-8">
          <div>
            <h4 className="serif-title text-2xl font-semibold mb-3">Building an ERP?</h4>
            <p className="text-muted text-base sans-body max-w-sm">
              This is the foundation. Custom modules, branding, deployment —
              the same architecture, scoped to your institution.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="mono-label text-[10px] text-muted">Elsewhere</span>
            <Link href="https://github.com/real-zephex/mentor-mentee-attendance" target="_blank" className="link-underline mono-label text-xs">GitHub ↗</Link>
            <Link href="mailto:hi@zephex.in" className="link-underline mono-label text-xs">hi@zephex.in</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
