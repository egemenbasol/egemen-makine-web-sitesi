import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projectMetrics, projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Egemen Makine'nin özel makine tasarımı, tersine mühendislik, CNC imalat ve endüstriyel otomasyon projelerinden seçilmiş örnekler.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="industrial-bg py-24 text-white md:py-32">
        <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-300">Projeler</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              Üretim kritik işler için endüstriyel proje vitrini.
            </h1>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            Bu örnek projeler, Egemen Makine mühendislik netliğini imalat disiplini ve pratik
            atölye uygulamasıyla nasıl birleştirdiğini gösterir.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Vitrin"
            title="Tersine mühendislik parçalardan tam otomasyon hücrelerine."
            description="Proje kapsamları üretim ortamı, mevcut veri ve hedef performansa göre şekillendirilir."
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
            eyebrow="Teslimat modeli"
            title="Teknik belirsizliği azaltan proje yapısı."
            description="Aynı mühendislik yaklaşımı, tek bir hassas bileşen veya eksiksiz bir otomasyon hücresi gereksiniminde de geçerlidir."
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
