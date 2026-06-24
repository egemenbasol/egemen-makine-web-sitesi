import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { loadPublishedProjects } from "@/lib/content-store";
import { loadSiteContent } from "@/lib/site-content";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const site = await loadSiteContent();

  return {
    title: "Projeler",
    description: site.projectsPage.metaDescription,
    alternates: {
      canonical: "/projects",
    },
  };
}

export default async function ProjectsPage() {
  const [site, projects] = await Promise.all([loadSiteContent(), loadPublishedProjects()]);
  const { company, projectsPage, projectMetrics, cta } = site;

  return (
    <>
      <section className="industrial-bg py-24 text-white md:py-32">
        <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-300">
              {projectsPage.heroEyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              {projectsPage.heroTitle}
            </h1>
          </div>
          <p className="text-lg leading-8 text-slate-300">{projectsPage.heroDescription}</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow={projectsPage.listSection.eyebrow}
            title={projectsPage.listSection.title}
            description={projectsPage.listSection.description}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow={projectsPage.metricsSection.eyebrow}
            title={projectsPage.metricsSection.title}
            description={projectsPage.metricsSection.description}
            tone="dark"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projectMetrics.map((metric) => (
              <article key={metric.value} className="steel-panel rounded-[2rem] p-7">
                <h2 className="text-3xl font-black tracking-tight text-white">{metric.value}</h2>
                <p className="mt-4 leading-7 text-slate-300">{metric.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection company={company} {...cta} />
    </>
  );
}
