"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeaderSection = () => {
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    // Trigger typewriter animation after mount
    const timer = setTimeout(() => setShowGreeting(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-12 fade-up">
      {/* Profile Image with Glow */}
      <div className="profile-glow mb-8">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-white/10">
          <Image
            src="/pic.jpg"
            alt="Profile Photo"
            width={160}
            height={160}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            priority
          />
        </div>
      </div>

      {/* Greeting with Typewriter Effect */}
      <div className="mb-4 h-14 flex items-center justify-center">
        {showGreeting && (
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="inline-block typewriter">
              Konichiwa
              <span className="text-primary"> !</span>
            </span>
          </h1>
        )}
      </div>

      {/* Name with Animated Gradient */}
      <h2 className="text-2xl md:text-3xl font-medium mb-4 fade-up delay-2">
        I am{" "}
        <span className="gradient-text font-bold text-3xl md:text-4xl">
          Sumit Kumar
        </span>
      </h2>

      {/* Tagline */}
      <p className="text-white/60 text-lg md:text-xl mb-8 max-w-xl fade-up delay-3">
        Full-Stack Developer • Minecraft Enjoyer
      </p>

      {/* Social Links */}
      <div className="flex items-center gap-4 fade-up delay-4">
        <Link
          href="https://github.com/real-zephex"
          target="_blank"
          className="btn btn-circle glass glass-hover text-xl"
          aria-label="GitHub Profile"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/zephex/"
          target="_blank"
          className="btn btn-circle glass glass-hover text-xl text-blue-400"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="mailto:zephex@duck.com"
          className="btn btn-circle glass glass-hover text-xl text-emerald-400"
          aria-label="Email"
        >
          <FaEnvelope />
        </Link>
      </div>
    </section>
  );
};

export default HeaderSection;
