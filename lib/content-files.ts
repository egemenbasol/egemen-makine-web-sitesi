import projectsJson from "@/content/projects.json";
import servicesJson from "@/content/services.json";
import siteJson from "@/content/site.json";
import { isGitHubConfigured, readGitHubFile, writeGitHubBinaryFile, writeGitHubFile } from "@/lib/github";
import { promises as fs } from "node:fs";
import path from "node:path";

const bundledContentFiles: Record<string, string> = {
  "content/site.json": `${JSON.stringify(siteJson, null, 2)}\n`,
  "content/services.json": `${JSON.stringify(servicesJson, null, 2)}\n`,
  "content/projects.json": `${JSON.stringify(projectsJson, null, 2)}\n`,
};

function getBundledContent(relativePath: string): string | null {
  return bundledContentFiles[relativePath] ?? null;
}

async function readLocalContentFile(relativePath: string): Promise<string> {
  try {
    return await fs.readFile(path.join(process.cwd(), relativePath), "utf-8");
  } catch {
    const bundled = getBundledContent(relativePath);

    if (bundled) {
      return bundled;
    }

    throw new Error(`İçerik dosyası bulunamadı: ${relativePath}`);
  }
}

export async function readContentFile(relativePath: string): Promise<string> {
  if (isGitHubConfigured()) {
    const remoteContent = await readGitHubFile(relativePath);

    if (remoteContent) {
      return remoteContent;
    }
  }

  return readLocalContentFile(relativePath);
}

async function writeLocalContentFile(localPath: string, content: string | Buffer): Promise<void> {
  try {
    await fs.mkdir(path.dirname(localPath), { recursive: true });
    await fs.writeFile(localPath, content);
  } catch {
    // Vercel gibi salt-okunur ortamlarda yerel yazma başarısız olabilir.
  }
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
    await writeLocalContentFile(localPath, normalized);
    return;
  }

  await writeLocalContentFile(localPath, normalized);
}

export async function writeContentBinaryFile(
  relativePath: string,
  buffer: Buffer,
  message: string,
): Promise<void> {
  const localPath = path.join(process.cwd(), relativePath);

  if (isGitHubConfigured()) {
    await writeGitHubBinaryFile(relativePath, buffer, message);
    await writeLocalContentFile(localPath, buffer);
    return;
  }

  await writeLocalContentFile(localPath, buffer);
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
