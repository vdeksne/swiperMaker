import { Octokit } from "@octokit/rest";
import fetch from "node-fetch";

const octokit = new Octokit({
  request: {
    fetch: fetch,
  },
});

export const getUserRepos = async (username) => {
  try {
    const { data } = await octokit.repos.listForUser({
      username: username,
    });
    return data;
  } catch (error) {
    console.error("Error fetching user repos:", error);
    throw error;
  }
};
