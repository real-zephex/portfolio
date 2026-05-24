"use server";

import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

type RepoInfoResponse = {
  status: boolean;
  data: any;
};

export const getRepoInfo = async ({
  owner = "real-zephex",
  repo,
}: {
  owner?: "real-zephex";
  repo: string;
}): Promise<RepoInfoResponse> => {
  try {
    const { data } = await octokit.repos.get({
      owner,
      repo,
    });
    return { status: true, data };
  } catch (e) {
    return { status: false, data: null };
  }
};

const EXCLUDED_REPOS = [
  "DSA",
  "DSA---v2",
  "Semester-3",
  "it-experiment-1",
  "it-experiment-2",
  "Java-College-Assignment",
  "solid-project",
  "webdev_project",
  "gogo_to_aniwatch",
  "Concurrent-Sequential-API",
  "Concurrent-vs-Sequential-Frontend",
  "mentor-mentee-attendance",
  "BasicNotes",
  "Downloads-Sorter",
];

export const getAllRepos = async () => {
  try {
    const { data } = await octokit.repos.listForUser({
      username: "real-zephex",
      per_page: 100,
      sort: "updated",
    });

    const filtered = data
      .filter((repo: any) => !repo.fork && !EXCLUDED_REPOS.includes(repo.name))
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updatedAt: repo.updated_at,
        topics: repo.topics,
      }));

    return { status: true, data: filtered };
  } catch (e) {
    return { status: false, data: [] };
  }
};
