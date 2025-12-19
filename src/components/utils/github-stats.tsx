"use client";

import { useEffect, useState } from "react";

interface GitHubStats {
  stars: number;
  forks: number;
  updatedAt: string;
}

interface GitHubStatsProps {
  repoUrl: string;
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

const extractRepoInfo = (url: string): { owner: string; repo: string } | null => {
  const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (match) {
    return { owner: match[1], repo: match[2].replace(/\.git$/, "") };
  }
  return null;
};

const GitHubStatsComponent = ({ repoUrl }: GitHubStatsProps) => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      const repoInfo = extractRepoInfo(repoUrl);
      if (!repoInfo) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://api.github.com/repos/${repoInfo.owner}/${repoInfo.repo}`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
            next: { revalidate: 3600 }, // Cache for 1 hour
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setStats({
          stars: data.stargazers_count,
          forks: data.forks_count,
          updatedAt: data.updated_at,
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [repoUrl]);

  if (loading) {
    return (
      <div className="github-stats animate-pulse">
        <div className="h-4 w-20 bg-white/10 rounded" />
      </div>
    );
  }

  if (error || !stats) {
    return null;
  }

  return (
    <div className="github-stats mt-3">
      {/* Stars */}
      <div className="github-stat" title="Stars">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-yellow-400"
        >
          <path
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
            clipRule="evenodd"
          />
        </svg>
        <span>{stats.stars}</span>
      </div>

      {/* Forks */}
      <div className="github-stat" title="Forks">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 3a2 2 0 00-2 2v1a2 2 0 002 2h1v2.5a2.5 2.5 0 002.5 2.5H10v2a2 2 0 102 0v-2h1.5a2.5 2.5 0 002.5-2.5V8h1a2 2 0 002-2V5a2 2 0 00-2-2h-3a2 2 0 00-2 2v1H8V5a2 2 0 00-2-2H5zm0 2h1v2H5V5zm9 0h1v2h-1V5zm-4 8a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          />
        </svg>
        <span>{stats.forks}</span>
      </div>

      {/* Last Updated */}
      <div className="github-stat" title="Last updated">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
            clipRule="evenodd"
          />
        </svg>
        <span>{formatRelativeTime(stats.updatedAt)}</span>
      </div>
    </div>
  );
};

export default GitHubStatsComponent;
