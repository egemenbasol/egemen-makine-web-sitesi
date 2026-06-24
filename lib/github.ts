type GitHubFileResponse = {
  sha?: string;
  content?: string;
};

function getGitHubConfig() {
  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER ?? "egemenbasol";
  const repo = process.env.GITHUB_REPO ?? "egemen-makine-web-sitesi";
  const branch = process.env.GITHUB_BRANCH ?? "main";

  return { token, owner, repo, branch };
}

export function isGitHubConfigured(): boolean {
  return Boolean(process.env.GITHUB_TOKEN);
}

export async function readGitHubFile(path: string): Promise<string | null> {
  const { token, owner, repo, branch } = getGitHubConfig();

  if (!token) {
    return null;
  }

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${encodeURIComponent(branch)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as GitHubFileResponse;

  if (!data.content) {
    return null;
  }

  return Buffer.from(data.content, "base64").toString("utf-8");
}

export async function writeGitHubFile(
  path: string,
  content: string,
  message: string,
): Promise<void> {
  const { token, owner, repo, branch } = getGitHubConfig();

  if (!token) {
    throw new Error("GITHUB_TOKEN tanımlı değil.");
  }

  const currentResponse = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${encodeURIComponent(branch)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-store",
    },
  );

  let sha: string | undefined;

  if (currentResponse.ok) {
    const currentData = (await currentResponse.json()) as GitHubFileResponse;
    sha = currentData.sha;
  }

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify({
        message,
        content: Buffer.from(content, "utf-8").toString("base64"),
        branch,
        sha,
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`GitHub kaydı başarısız: ${errorText}`);
  }
}

export async function writeGitHubBinaryFile(
  path: string,
  buffer: Buffer,
  message: string,
): Promise<void> {
  const { token, owner, repo, branch } = getGitHubConfig();

  if (!token) {
    throw new Error("GITHUB_TOKEN tanımlı değil.");
  }

  const currentResponse = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${encodeURIComponent(branch)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-store",
    },
  );

  let sha: string | undefined;

  if (currentResponse.ok) {
    const currentData = (await currentResponse.json()) as GitHubFileResponse;
    sha = currentData.sha;
  }

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify({
        message,
        content: buffer.toString("base64"),
        branch,
        sha,
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`GitHub görsel kaydı başarısız: ${errorText}`);
  }
}
