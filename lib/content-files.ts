import { promises as fs } from "node:fs";
import path from "node:path";
import { isGitHubConfigured, readGitHubFile, writeGitHubBinaryFile, writeGitHubFile } from "@/lib/github";

export async function readContentFile(relativePath: string): Promise<string> {
  if (isGitHubConfigured()) {
    const remoteContent = await readGitHubFile(relativePath);

    if (remoteContent) {
      return remoteContent;
    }
  }

  return fs.readFile(path.join(process.cwd(), relativePath), "utf-8");
}

export async function writeContentFile(
  relativePath: string,
  content: string,
  message: string,
): Promise<void> {
  const normalized = content.endsWith("\n") ? content : `${content}\n`;
  const localPath = path.join(process.cwd(), relativePath);

  if (isGitHubConfigured()) {
    await writeGitHubFile(relativePath, normalized, message);
  }

  await fs.mkdir(path.dirname(localPath), { recursive: true });
  await fs.writeFile(localPath, normalized, "utf-8");
}

export async function writeContentBinaryFile(
  relativePath: string,
  buffer: Buffer,
  message: string,
): Promise<void> {
  const localPath = path.join(process.cwd(), relativePath);

  if (isGitHubConfigured()) {
    await writeGitHubBinaryFile(relativePath, buffer, message);
  }

  await fs.mkdir(path.dirname(localPath), { recursive: true });
  await fs.writeFile(localPath, buffer);
}

export async function readJsonFile<T>(relativePath: string): Promise<T> {
  const raw = await readContentFile(relativePath);
  return JSON.parse(raw) as T;
}

export async function writeJsonFile<T>(
  relativePath: string,
  data: T,
  message: string,
): Promise<void> {
  await writeContentFile(relativePath, JSON.stringify(data, null, 2), message);
}
