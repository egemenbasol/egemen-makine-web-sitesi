import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { loadProjects } from "@/lib/content-store";
import { isGitHubConfigured } from "@/lib/github";
import { loadServices } from "@/lib/services-store";
import { loadSiteContentRaw } from "@/lib/site-content";
import { SiteAdminProvider } from "@/components/admin/site-admin-provider";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminPanelHeader } from "@/components/admin/admin-panel-header";

export default async function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    redirect("/admin/login");
  }

  const [site, services, projects] = await Promise.all([
    loadSiteContentRaw(),
    loadServices(),
    loadProjects(),
  ]);

  return (
    <SiteAdminProvider
      initialSite={site}
      initialServices={services}
      initialProjects={projects}
      githubEnabled={isGitHubConfigured()}
    >
      <AdminPanelHeader />
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <AdminSidebar />
        <div>{children}</div>
      </div>
    </SiteAdminProvider>
  );
}
