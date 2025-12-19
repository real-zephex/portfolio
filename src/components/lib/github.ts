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
