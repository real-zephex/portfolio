import Link from "next/link";
import React from "react";
import { LuSchool, LuUniversity } from "react-icons/lu";

const TabsSection = async () => {
  const languages = ["Python", "TypeScript", "HTML", "CSS", "C++"];
  const tools = ["Git"];
  const miscellaneous = ["NextJS", "Bun", "Hono"];
  const data = [
    {
      title: "Dramalama",
      description:
        "A free media website powered by Typescript, Tailwind CSS, and DaisyUI",
      link: "https://dramalama.netlify.app",
      linkText: "Dramalama",
      color: "text-sky-300",
      linkClass: "link-info",
    },
    {
      title: "Mangathingy",
      description:
        "A free manga website powered by Typescript, Tailwind CSS, and DaisyUI with sign-in features to keep track of your reading progress.",
      link: "https://mangathingy.netlify.app",
      linkText: "Mangathingy",
      color: "text-amber-300",
      linkClass: "link-accent",
    },
    {
      title: "Good Proxy",
      description:
        "A CORS proxy to bypass well, CORS errors by adding necessary headers to the requests. It is capable of identifying disguised files, handle VTT and HLS files. Made using Bun and Hono.",
      link: "https://github.com/real-zephex/Good-Proxy",
      linkText: "Good Proxy",
      color: "text-teal-300",
      linkClass: "link-error",
    },
    {
      title: "AI Thingy",
      description:
        "An AI chatbot made using NextJS and Gemini Flash 1.5 from google.",
      link: "https://github.com/real-zephex/Ai-Thingy",
      linkText: "AI Thingy",
      color: "text-lime-300",
      linkClass: "link-default",
    },
    {
      title: "Basic Notes",
      description:
        "A very basic web based notes taking application which stores your notes in local storage",
      link: "https://github.com/real-zephex/BasicNotes",
      linkText: "Basic Notes",
      color: "text-orange-300",
      linkClass: "link-accent",
    },
    {
      title: "ShortDeezLinks",
      description: "A link shortener (uses SQLITE as database)",
      link: "https://github.com/real-zephex/ShortDeezLinks",
      linkText: "Short Deez Links",
      color: "text-indigo-300",
      linkClass: "link-info",
    },
  ];

  return (
    <div
      role="tablist"
      className="tabs tabs-boxed mt-2 w-full bg-base-300/75 rounded-xl"
    >
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Qualifications"
        defaultChecked
      />
      <div role="tabpanel" className="tab-content p-4">
        <div>
          <section className="flex items-center">
            <LuSchool size={30} color="#93c5fd" />
            <h3 className="ml-3 text-2xl font-semibold text-blue-300">
              Kundan Vidya Mandir (2010-2024)
            </h3>
          </section>
          <ul className="mt-2">
            <li>10th grade: 89%</li>
            <li>12th grade: 83.2%</li>
          </ul>
        </div>

        <div className="mt-4">
          <section className="flex items-center">
            <LuUniversity size={30} color="#bef264" />
            <h3 className="ml-3 text-2xl font-semibold text-lime-300">
              Lamrin Tech Skills University (2024 - 2028)
            </h3>
          </section>
          <p className="mt-2">
            B.Tech in Computer Science Engineering with specialization in Cyber
            Security
          </p>
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Projects"
      />
      <div role="tabpanel" className="tab-content p-4">
        {data.map((project, index) => (
          <section key={index} className={index !== 0 ? "mt-4" : ""}>
            <h3 className={`font-bold text-2xl ${project.color}`}>
              {project.title}
            </h3>
            <p>{project.description}</p>
            <p>
              Check it out:{" "}
              <Link
                href={project.link}
                className={`link ${project.linkClass}`}
                target="_blank"
              >
                {project.linkText}
              </Link>
            </p>
          </section>
        ))}
      </div>

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Info"
      />
      <div className="tab-content p-4 text-lg leading-relaxed">
        <p className="mb-4">
          Hey there! Glad you made it here. Welcome to my portfolio! I&apos;m
          Sumit, a first-year B.Tech student at LTSU Ropar specializing in
          Computer Science with Cyber Security. While my academic focus is on
          security, my interest truly lies in web development, Linux, and
          spending way too much time playing Minecraft (I admit, I&apos;m not
          great at it, but it&apos;s fun!).
        </p>

        <p className="text-2xl font-semibold text-cyan-400 mb-2">Languages</p>
        <div className="flex flex-wrap mb-4">
          {languages.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className={`badge badge-primary ${
                  index !== languages.length - 1 ? "mr-2 mb-2" : "mb-2"
                }`}
              >
                {item}
              </div>
            </React.Fragment>
          ))}
        </div>

        <p className="text-2xl font-semibold text-lime-400 mb-2">Tools</p>
        <div className="flex flex-wrap mb-4">
          {tools.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className={`badge badge-secondary ${
                  index !== tools.length - 1 ? "mr-2 mb-2" : "mb-2"
                }`}
              >
                {item}
              </div>
            </React.Fragment>
          ))}
        </div>

        <p className="text-2xl font-semibold text-fuchsia-400 mb-2">
          Miscellaneous
        </p>
        <div className="flex flex-wrap mb-4">
          {miscellaneous.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className={`badge badge-info ${
                  index !== miscellaneous.length - 1 ? "mr-2 mb-2" : "mb-2"
                }`}
              >
                {item}
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-row items-center mt-6">
          <Link href="https://github.com/real-zephex" target="_blank">
            <button className="btn btn-outline btn-accent btn-sm">
              GitHub
            </button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/zephex/"
            target="_blank"
            className="ml-2"
          >
            <button className="btn btn-outline btn-info btn-sm">
              LinkedIn
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabsSection;
