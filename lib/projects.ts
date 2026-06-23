export type Project = {
  id: string;
  title: string;
  sector: string;
  summary: string;
  tags: string[];
  image?: string;
  published: boolean;
  order: number;
};

export type ProjectInput = Omit<Project, "id" | "order"> & {
  id?: string;
  order?: number;
};

export function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getPublishedProjects(projects: Project[]): Project[] {
  return sortProjects(projects.filter((project) => project.published));
}

export function slugifyProjectId(value: string): string {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function createProjectId(title: string, existingIds: string[]): string {
  const base = slugifyProjectId(title) || "proje";
  let candidate = base;
  let counter = 2;

  while (existingIds.includes(candidate)) {
    candidate = `${base}-${counter}`;
    counter += 1;
  }

  return candidate;
}

export function normalizeProjectInput(input: ProjectInput, existingIds: string[]): Project {
  const order = input.order ?? existingIds.length + 1;

  return {
    id: input.id ?? createProjectId(input.title, existingIds),
    title: input.title.trim(),
    sector: input.sector.trim(),
    summary: input.summary.trim(),
    tags: input.tags.map((tag) => tag.trim()).filter(Boolean),
    image: input.image?.trim() || "",
    published: input.published,
    order,
  };
}
