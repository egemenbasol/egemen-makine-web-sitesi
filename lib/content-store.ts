import { promises as fs } from "node:fs";
import path from "node:path";
import { isGitHubConfigured, readGitHubFile, writeGitHubBinaryFile, writeGitHubFile } from "@/lib/github";
import type { Project, ProjectInput } from "@/lib/projects";
import { createProjectId, normalizeProjectInput, sortProjects } from "@/lib/projects";

const PROJECTS_FILE = "content/projects.json";
const PROJECTS_PATH = path.join(process.cwd(), PROJECTS_FILE);

async function readLocalProjectsFile(): Promise<string> {
  return fs.readFile(PROJECTS_PATH, "utf-8");
}

async function writeLocalProjectsFile(content: string): Promise<void> {
  await fs.writeFile(PROJECTS_PATH, `${content}\n`, "utf-8");
}

async function readProjectsRaw(): Promise<string> {
  if (isGitHubConfigured()) {
    const remoteContent = await readGitHubFile(PROJECTS_FILE);

    if (remoteContent) {
      return remoteContent;
    }
  }

  return readLocalProjectsFile();
}

function parseProjects(raw: string): Project[] {
  const projects = JSON.parse(raw) as Project[];
  return sortProjects(projects);
}

export async function loadProjects(): Promise<Project[]> {
  const raw = await readProjectsRaw();
  return parseProjects(raw);
}

export async function loadPublishedProjects(): Promise<Project[]> {
  const projects = await loadProjects();
  return projects.filter((project) => project.published);
}

export async function saveProjects(projects: Project[], message: string): Promise<void> {
  const content = `${JSON.stringify(sortProjects(projects), null, 2)}\n`;

  if (isGitHubConfigured()) {
    await writeGitHubFile(PROJECTS_FILE, content, message);
    await writeLocalProjectsFile(content);
    return;
  }

  await writeLocalProjectsFile(content);
}

export async function createProject(input: ProjectInput): Promise<Project> {
  const projects = await loadProjects();
  const project = normalizeProjectInput(
    {
      ...input,
      order: input.order ?? projects.length + 1,
    },
    projects.map((item) => item.id),
  );

  await saveProjects([...projects, project], `Admin: ${project.title} projesi eklendi`);
  return project;
}

export async function updateProject(id: string, input: ProjectInput): Promise<Project> {
  const projects = await loadProjects();
  const index = projects.findIndex((project) => project.id === id);

  if (index === -1) {
    throw new Error("Proje bulunamadı.");
  }

  const existingIds = projects.map((project) => project.id).filter((projectId) => projectId !== id);
  const updated = normalizeProjectInput(
    {
      ...input,
      id,
      order: input.order ?? projects[index].order,
    },
    existingIds,
  );

  const nextProjects = [...projects];
  nextProjects[index] = updated;

  await saveProjects(nextProjects, `Admin: ${updated.title} projesi güncellendi`);
  return updated;
}

export async function deleteProject(id: string): Promise<void> {
  const projects = await loadProjects();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    throw new Error("Proje bulunamadı.");
  }

  const nextProjects = projects
    .filter((item) => item.id !== id)
    .map((item, index) => ({ ...item, order: index + 1 }));

  await saveProjects(nextProjects, `Admin: ${project.title} projesi silindi`);
}

export async function saveProjectImage(fileName: string, buffer: Buffer): Promise<string> {
  const imagePath = `public/projects/${fileName}`;

  if (isGitHubConfigured()) {
    await writeGitHubBinaryFile(imagePath, buffer, `Admin: ${fileName} proje görseli yüklendi`);
  } else {
    const localPath = path.join(process.cwd(), imagePath);
    await fs.mkdir(path.dirname(localPath), { recursive: true });
    await fs.writeFile(localPath, buffer);
  }

  return `/projects/${fileName}`;
}

export function buildImageFileName(projectId: string, originalName: string): string {
  const extension = path.extname(originalName).toLowerCase() || ".jpg";
  const safeId = createProjectId(projectId, []);
  return `${safeId}${extension}`;
}
