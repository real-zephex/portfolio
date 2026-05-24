"use client";

import { useEffect, useState } from "react";
import { getAllRepos } from "../lib/github";
import Link from "next/link";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";

interface Repo {
  name: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
  topics: string[];
}

const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)}mo ago`;
  return `${Math.floor(diffInSeconds / 31536000)}y ago`;
};

const LanguageIcon = ({ language }: { language: string }) => {
  const colors: Record<string, string> = {
    TypeScript: "bg-blue-500",
    JavaScript: "bg-yellow-400",
    Python: "bg-blue-400",
    Java: "bg-red-400",
    "C++": "bg-pink-500",
    HTML: "bg-orange-500",
    CSS: "bg-purple-500",
    PHP: "bg-indigo-400",
  };

  return (
    <div className="flex items-center gap-1.5">
      <span className={`w-2.5 h-2.5 rounded-full ${colors[language] || "bg-gray-400"}`} />
      <span className="text-xs text-white/60">{language}</span>
    </div>
  );
};

const GitHubRepoList = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await getAllRepos();
      if (res.status) {
        setRepos(res.data);
      }
      setLoading(false);
    };
    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="glass p-5 rounded-2xl h-40 animate-pulse bg-white/5" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map((repo, i) => (
        <Link
          key={repo.name}
          href={repo.url}
          target="_blank"
          className="group glass p-5 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-cyan flex flex-col justify-between animate-fade-in"
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FaGithub className="text-white/40 group-hover:text-primary transition-colors" />
              <h3 className="font-bold text-white group-hover:text-primary transition-colors truncate">
                {repo.name}
              </h3>
            </div>
            <p className="text-white/60 text-xs line-clamp-2 mb-4 h-8">
              {repo.description || "No description provided."}
            </p>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-3">
              {repo.language && <LanguageIcon language={repo.language} />}
              <div className="flex items-center gap-1 text-xs text-white/40">
                <FaStar className="text-yellow-500/80" />
                <span>{repo.stars}</span>
              </div>
            </div>
            <span className="text-[10px] text-white/30 uppercase tracking-wider">
              {formatRelativeTime(repo.updatedAt)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GitHubRepoList;
