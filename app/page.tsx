import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import {
  company,
  processSteps,
  projects,
  stats,
} from "@/lib/site-data";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    url: "https://egemenmakine.com.tr",
    email: company.email,
    telephone: company.phone,
    address: company.address,
    description: company.description,
    sameAs: [company.whatsapp],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="industrial-bg text-white">
        <div className="section-shell relative z-10 grid min-h-[calc(100vh-5rem)] gap-12 py-20 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="inline-flex rounded-full border border-sky-300/30 bg-sky-300/10 px-4 py-2 text-sm font-black uppercase tracking-[0.24em] text-sky-200">
              {company.tagline}
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              CNC tezgahlarında fason ve özel parça üretimi.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              {company.description}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-sky-400 px-7 py-4 text-center text-sm font-black text-slate-950 shadow-xl shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-300"
              >
                Teklif Alın
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/15 bg-white/10 px-7 py-4 text-center text-sm font-black text-white transition hover:bg-white hover:text-slate-950"
              >
                Hizmetleri İncele
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="steel-panel animate-fade-up rounded-3xl p-5"
                  style={{ animationDelay: `${120 + index * 100}ms` }}
                >
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up animate-delay-2">
            <div className="steel-panel relative overflow-hidden rounded-[2.5rem] p-5">
              <div className="machine-card relative min-h-[520px] overflow-hidden rounded-[2rem] p-7">
                <div className="absolute left-8 top-8 h-40 w-40 rounded-full border border-sky-300/20" />
                <div className="absolute right-8 top-14 h-28 w-52 rounded-full border border-slate-200/15" />
                <div className="absolute inset-x-10 bottom-20 h-16 rounded-full bg-slate-950/55 shadow-2xl shadow-sky-500/10" />
                <div className="absolute bottom-16 left-12 right-12 grid grid-cols-6 gap-3">
                  {Array.from({ length: 18 }).map((_, index) => (
                    <span key={index} className="h-3 rounded-full bg-slate-300/25" />
                  ))}
                </div>
                <div className="absolute -bottom-28 -right-24 size-80 rounded-full border border-sky-300/20 bg-sky-400/5" />
                <div className="relative z-10 flex h-full min-h-[466px] flex-col justify-between">
                  <div className="flex justify-between gap-4">
                    <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-sky-100">
                      CNC Metal İşleme
                    </span>
                    <span className="grid size-14 place-items-center rounded-2xl bg-white/10">
                      <span className="gear-mark size-10 rounded-full" />
                    </span>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.26em] text-slate-300">
                      Atölyeden sahaya
                    </p>
                    <h2 className="mt-3 max-w-md text-4xl font-black tracking-tight text-white">
                      Ölç. Modelle. İşle. Teslim Et.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 md:py-28">
        <div className="section-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Üretim örnekleri"
              title="Fason işleme ve tersine mühendislik projeleri."
              description="CNC fason parça üretimi ve çizimsiz parça kurtarma çalışmalarından örnekler."
            />
            <Link
              href="/projects"
              className="w-fit rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:bg-slate-800"
            >
              Tüm projeleri gör
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Üretim süreci"
            title="Tekliften teslimata net ve hızlı iş akışı."
            description="Fason iş veya tersine mühendislik projelerinde her adım üretim odaklı ilerler."
          />
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="light-panel flex gap-5 rounded-3xl p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-sky-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-black text-slate-950">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
