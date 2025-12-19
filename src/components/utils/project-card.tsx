import Link from "next/link";
import GitHubStatsComponent from "./github-stats";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  color?: string;
  githubSupport?: boolean;
  tags?: string[];
  index?: number;
  preview?: string;
}

const ProjectCard = ({
  title,
  description,
  link,
  linkText,
  color = "text-cyan-400",
  githubSupport = false,
  tags = [],
  index = 0,
  preview,
}: ProjectCardProps) => {
  return (
    <div
      className={`project-card fade-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className={`font-bold text-xl ${color}`}>{title}</h3>
        <Link
          href={preview || link}
          target="_blank"
          className="btn btn-sm btn-ghost btn-circle opacity-60 hover:opacity-100"
          title={`Visit ${linkText}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </Link>
      </div>

      {/* Description */}
      <p className="text-white/70 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={`px-2 py-1 text-xs rounded-full bg-white/5 border ${tag == "Paid Project" ? "border-lime-300 text-white/90" : "border-white/10 text-white/60"}  `}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* GitHub Stats */}
      {githubSupport && <GitHubStatsComponent repoUrl={link} />}

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
        <Link
          href={link}
          target="_blank"
          className="text-sm font-medium text-primary hover:text-primary-300 transition-colors inline-flex items-center gap-1"
        >
          {linkText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
