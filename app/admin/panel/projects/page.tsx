import { ProjectsPanel } from "@/components/admin/projects-panel";
import { loadProjects } from "@/lib/content-store";
import { isGitHubConfigured } from "@/lib/github";

export default async function AdminProjectsPage() {
  const projects = await loadProjects();

  return (
    <ProjectsPanel initialProjects={projects} githubEnabled={isGitHubConfigured()} />
  );
}
