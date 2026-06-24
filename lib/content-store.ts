import { readJsonFile, writeContentBinaryFile, writeJsonFile } from "@/lib/content-files";
import { createProjectId, normalizeProjectInput, sortProjects } from "@/lib/projects";
import type { Project, ProjectInput } from "@/lib/projects";
import path from "node:path";

const PROJECTS_FILE = "content/projects.json";

export async function loadProjects(): Promise<Project[]> {
  const projects = await readJsonFile<Project[]>(PROJECTS_FILE);
  return sortProjects(projects);
}

export async function loadPublishedProjects(): Promise<Project[]> {
  const projects = await loadProjects();
  return projects.filter((project) => project.published);
}

async function saveProjects(projects: Project[], message: string): Promise<void> {
  await writeJsonFile(PROJECTS_FILE, sortProjects(projects), message);
}

export async function createProject(input: ProjectInput): Promise<Project> {
  const projects = await loadProjects();
  const project = normalizeProjectInput(
    { ...input, order: input.order ?? projects.length + 1 },
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
    { ...input, id, order: input.order ?? projects[index].order },
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
  await writeContentBinaryFile(imagePath, buffer, `Admin: ${fileName} proje görseli yüklendi`);
  return `/projects/${fileName}`;
}

export function buildImageFileName(projectId: string, originalName: string): string {
  const extension = path.extname(originalName).toLowerCase() || ".jpg";
  const safeId = createProjectId(projectId, []);
  return `${safeId}${extension}`;
}
