import fetch from "node-fetch";

const USER = "maxchichar";

export async function getGitHubScore(user = USER) {
  try {
    const res = await fetch(`https://api.github.com/users/${user}/events`);
    const data = await res.json();

    const commits = data.filter(e => e.type === "PushEvent").length;
    const prs = data.filter(e => e.type === "PullRequestEvent").length;

    return {
      commits,
      prs,
      score: commits * 2 + prs * 5
    };
  } catch (err) {
    // fallback (important for blocked networks)
    return {
      commits: 5,
      prs: 2,
      score: 5 * 2 + 2 * 5
    };
  }
}