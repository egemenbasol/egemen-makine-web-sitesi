import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { loadPublishedServices } from "@/lib/services-store";
import { loadSiteContent } from "@/lib/site-content";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const site = await loadSiteContent();

  return {
    title: "Hizmetler",
    description: site.servicesPage.metaDescription,
    alternates: {
      canonical: "/services",
    },
  };
}

export default async function ServicesPage() {
  const [site, services] = await Promise.all([loadSiteContent(), loadPublishedServices()]);
  const { company, servicesPage, serviceDeliverables, servicePrinciples, cta } = site;

  return (
    <>
      <section className="industrial-bg py-24 text-white md:py-32">
        <div className="section-shell relative z-10">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-300">
            {servicesPage.heroEyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            {servicesPage.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{company.description}</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow={servicesPage.listSection.eyebrow}
            title={servicesPage.listSection.title}
            description={servicesPage.listSection.description}
          />

          <div className="mt-12 grid gap-6">
            {services.map((service, index) => (
              <article
                id={service.slug}
                key={service.slug}
                className="light-panel grid gap-8 rounded-[2rem] p-6 md:grid-cols-[0.62fr_1fr] md:p-8"
              >
                <div>
                  <span className="text-sm font-black uppercase tracking-[0.26em] text-sky-700">
                    {String(index + 1).padStart(2, "0")} / {service.metrics}
                  </span>
                  <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                    {service.title}
                  </h2>
                </div>
                <div>
                  <p className="text-lg leading-8 text-slate-700">{service.summary}</p>
                  <p className="mt-5 leading-8 text-slate-600">{service.details}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {serviceDeliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="section-shell grid gap-8 lg:grid-cols-3">
          {servicePrinciples.map((item) => (
            <div key={item} className="steel-panel rounded-[2rem] p-7">
              <span className="gear-mark block size-12 rounded-full" />
              <p className="mt-8 text-lg font-bold leading-8">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection company={company} {...cta} />
    </>
  );
}
