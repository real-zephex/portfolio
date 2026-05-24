"use client";

import { useEffect, useState } from "react";
import { getAllRepos } from "../lib/github";
import Link from "next/link";

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
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d`;
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)}mo`;
  return `${Math.floor(diffInSeconds / 31536000)}y`;
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
      <div className="flex flex-col border-t-2 border-foreground mt-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-24 border-b border-foreground/10 animate-pulse bg-muted/10" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col border-t-2 border-foreground mt-4">
      {repos.map((repo, i) => (
        <Link
          key={repo.name}
          href={repo.url}
          target="_blank"
          className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-foreground/20 hover:border-accent transition-all duration-300 animate-fade-in gap-4 md:gap-8"
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-3 mb-1">
              <h3 className="text-xl serif-title font-bold text-foreground group-hover:text-accent transition-colors truncate">
                {repo.name}
              </h3>
              {repo.stars > 0 && (
                <span className="text-xs font-bold text-accent">
                  ★ {repo.stars}
                </span>
              )}
            </div>
            <p className="text-muted text-sm line-clamp-2 md:line-clamp-1 sans-body">
              {repo.description || "No description provided."}
            </p>
          </div>

          <div className="flex items-center gap-6 shrink-0 text-xs font-bold uppercase tracking-widest text-muted group-hover:text-foreground transition-colors">
            {repo.language && (
              <div className="flex items-center gap-2 w-24">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{repo.language}</span>
              </div>
            )}
            <span className="w-16 text-right">
              {formatRelativeTime(repo.updatedAt)}
            </span>
            <span className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity md:-translate-x-2 group-hover:translate-x-0 ml-2">
              ↗
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GitHubRepoList;
