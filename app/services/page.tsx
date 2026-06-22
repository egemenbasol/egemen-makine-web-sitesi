import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { serviceDeliverables, servicePrinciples, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Egemen Makine özel makine tasarımı, tersine mühendislik, 3D tarama, CAD/CAM mühendisliği, CNC imalat ve endüstriyel otomasyon hizmetleri.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="industrial-bg py-24 text-white md:py-32">
        <div className="section-shell relative z-10">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-300">Hizmetler</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Karmaşık endüstriyel gereksinimler için derin mühendislik uzmanlığı.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            İlk ölçümden son işlemeye ve otomasyon entegrasyonuna kadar Egemen Makine, güvenilir
            teknik uygulama arayan üreticilere destek sağlar.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Temel yetkinlikler"
            title="Üretime hazır sonuçlar için altı birbirine bağlı hizmet."
            description="Her hizmet bağımsız olarak sunulabilir veya eksiksiz bir mühendislik ve imalat iş akışında birleştirilebilir."
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
                    0{index + 1} / {service.metrics}
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

      <section className="bg-slate-100 py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-3">
          {servicePrinciples.map((item) => (
            <div key={item} className="rounded-[2rem] bg-slate-950 p-7 text-white">
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
