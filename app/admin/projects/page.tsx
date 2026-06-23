import { redirect } from "next/navigation";
import { ProjectsPanel } from "@/components/admin/projects-panel";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { loadProjects } from "@/lib/content-store";
import { isGitHubConfigured } from "@/lib/github";

export default async function AdminProjectsPage() {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    redirect("/admin/login");
  }

  const projects = await loadProjects();

  return (
    <ProjectsPanel
      initialProjects={projects}
      githubEnabled={isGitHubConfigured()}
    />
  );
}
