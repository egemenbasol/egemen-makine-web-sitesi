import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected Egemen Makine projects in custom machine design, reverse engineering, CNC manufacturing and industrial automation.",
  alternates: {
    canonical: "/projects",
  },
};

const projectMetrics = [
  { value: "Design", label: "Mechanical concepts, models and manufacturing packages" },
  { value: "Build", label: "CNC machining, assembly, inspection and iteration" },
  { value: "Integrate", label: "Automation, controls and commissioning support" },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="industrial-bg py-24 text-white md:py-32">
        <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-300">
              Projects
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              Industrial project showcase for production-critical work.
            </h1>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            These representative projects show how Egemen Makine connects engineering clarity with
            manufacturing discipline and practical shop-floor implementation.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Showcase"
            title="From reverse-engineered parts to complete automation cells."
            description="Project scopes are shaped around the production environment, available data and target performance."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Delivery model"
            title="A project structure that reduces technical uncertainty."
            description="The same engineering mindset applies whether the requirement is a single precision component or a complete automation cell."
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

      <CtaSection />
    </>
  );
}
