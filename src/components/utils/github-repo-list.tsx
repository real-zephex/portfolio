"use client";

import { useEffect, useState, useMemo } from "react";
import { getAllRepos } from "../lib/github";
import Link from "next/link";
import { FiArrowUpRight, FiSearch } from "react-icons/fi";

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

type SortMode = "updated" | "stars" | "name";

const SORT_OPTIONS: { id: SortMode; label: string }[] = [
  { id: "updated", label: "Recently updated" },
  { id: "stars", label: "Most stars" },
  { id: "name", label: "Name" },
];

const RECENT_THRESHOLD_DAYS = 14;

const LANGUAGE_COLORS: Record<string, string> = {
  Go: "#00ADD8",
  TypeScript: "#3178C6",
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  Rust: "#dea584",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  C: "#555555",
  "C++": "#f34b7d",
  Shell: "#89e051",
  Lua: "#000080",
  Ruby: "#701516",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
};

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

const isRecent = (dateString: string): boolean => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = (now.getTime() - date.getTime()) / 86400000;
  return diffInDays < RECENT_THRESHOLD_DAYS;
};

const GitHubRepoList = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortMode>("updated");
  const [searchQuery, setSearchQuery] = useState("");

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

  const filtered = useMemo(() => {
    let list = repos;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          (r.description && r.description.toLowerCase().includes(q))
      );
    }

    switch (sortBy) {
      case "stars":
        return list.sort((a, b) => b.stars - a.stars || new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
      case "name":
        return list.sort((a, b) => a.name.localeCompare(b.name));
      case "updated":
      default:
        return list.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    }
  }, [repos, sortBy, searchQuery]);

  if (loading) {
    return (
      <div className="flex flex-col mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-44 rounded-sm border border-foreground/10 animate-pulse bg-muted/5" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase font-black tracking-[0.2em] text-muted mr-1">
            Sort
          </span>
          {SORT_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSortBy(opt.id)}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-200 ${
                sortBy === opt.id
                  ? "bg-foreground text-background"
                  : "text-muted border border-foreground/10 hover:border-foreground/30"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="relative flex-1 min-w-[160px] max-w-xs">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted/60 text-sm" />
          <input
            type="text"
            placeholder="Filter repos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border border-foreground/10 rounded-full pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent/50 transition-colors"
          />
        </div>
      </div>

      <div className="border-t border-foreground/10 pt-8">
        {filtered.length === 0 ? (
          <div className="py-16 text-center text-muted/60 text-sm">
            No repos match your filter.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((repo, i) => {
              const recent = isRecent(repo.updatedAt);
              const langColor = LANGUAGE_COLORS[repo.language] || "#888";
              return (
                <Link
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  className="group relative flex flex-col p-6 border border-foreground/10 bg-foreground/[0.02] transition-all duration-300 animate-fade-in hover:border-accent/40 hover:-translate-y-0.5"
                  style={{ animationDelay: `${i * 0.03}s` }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/0 group-hover:bg-accent/60 transition-colors duration-300" />

                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 min-w-0">
                      {recent && (
                        <span className="w-2 h-2 rounded-full bg-green-400 shrink-0 mt-1 animate-pulse" />
                      )}
                      <h3 className="text-lg serif-title font-bold text-foreground group-hover:text-accent transition-colors truncate">
                        {repo.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {repo.stars > 0 && (
                        <span className="text-xs font-bold text-accent/80 whitespace-nowrap">
                          ★ {repo.stars}
                        </span>
                      )}
                      {repo.forks > 0 && (
                        <span className="text-xs font-bold text-muted/50 whitespace-nowrap">
                          ⑂ {repo.forks}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-muted text-sm leading-relaxed line-clamp-3 sans-body flex-1 mb-5">
                    {repo.description || "No description provided."}
                  </p>

                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted/50">
                    <div className="flex items-center gap-2">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: langColor }}
                          />
                          <span>{repo.language}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`${recent ? "text-green-400/70" : ""}`}>
                        {formatRelativeTime(repo.updatedAt)}
                      </span>
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                        <FiArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubRepoList;
