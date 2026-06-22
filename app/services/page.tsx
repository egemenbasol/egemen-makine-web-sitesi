import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import {
  company,
  primaryServices,
  secondaryServices,
  serviceDeliverables,
  servicePrinciples,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Egemen Makine CNC fason işleme, özel parça üretimi, tersine mühendislik, 3D tarama ve CAD/CAM hizmetleri sunar.",
  alternates: {
    canonical: "/services",
  },
};

function ServiceList({
  services,
  startIndex = 0,
}: {
  services: typeof primaryServices;
  startIndex?: number;
}) {
  return (
    <div className="mt-12 grid gap-6">
      {services.map((service, index) => (
        <article
          id={service.slug}
          key={service.slug}
          className="light-panel grid gap-8 rounded-[2rem] p-6 md:grid-cols-[0.62fr_1fr] md:p-8"
        >
          <div>
            <span className="text-sm font-black uppercase tracking-[0.26em] text-sky-700">
              0{startIndex + index + 1} / {service.metrics}
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
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="industrial-bg py-24 text-white md:py-32">
        <div className="section-shell relative z-10">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-300">Hizmetler</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            CNC fason üretim ve tersine mühendislik hizmetleri.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{company.description}</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Ana hizmetler"
            title="CNC tezgahlarda üretim ve çizimsiz parça çözümleri."
            description="Fason işleme, tersine mühendislik, 3D tarama ve CAD/CAM hizmetlerimiz günlük üretim ihtiyaçlarına yöneliktir."
          />
          <ServiceList services={primaryServices} />
        </div>
      </section>

      <section className="bg-slate-100 py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Ek hizmetler"
            title="Makine tasarımı ve otomasyon — seçili projelerde."
            description="Bu hizmetler ana iş kolumuzun dışında kalmaz; üretim kabiliyetimizi destekleyen proje bazlı çalışmalardır."
          />
          <ServiceList services={secondaryServices} startIndex={primaryServices.length} />
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

      <CtaSection />
    </>
  );
}
