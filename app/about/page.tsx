import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { company, principles, processSteps, stats } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Makine tasarımı, tersine mühendislik, CNC imalat ve otomasyon alanlarında endüstriyel mühendislik ortağı Egemen Makine hakkında bilgi edinin.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="industrial-bg py-24 text-white md:py-32">
        <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-300">
              Egemen Makine Hakkında
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              Endüstriyel üreticiler için odaklanmış bir mühendislik ortağı.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {company.description}
            </p>
          </div>
          <div className="steel-panel rounded-[2.5rem] p-6">
            <div className="machine-card min-h-[360px] rounded-[2rem] p-7 text-white">
              <span className="gear-mark block size-20 rounded-full" />
              <h2 className="mt-20 text-4xl font-black tracking-tight">Atölye için tasarlandı.</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Mekanik mühendislik, hassas işleme ve otomasyonu bir araya getirerek proje
                devirlerini net tutar, üretim riskini görünür kılarız.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Şirket profili"
            title="Endüstriyel yaşam döngüsünün tamamında mühendislik desteği."
            description="Egemen Makine; mevcut parçaları ölçme, veriyi yeniden oluşturma, mekanizma tasarlama, CNC üretimi hazırlama ve otomasyon entegrasyonu gerektiren ekiplerle çalışır."
          />
          <div className="grid gap-5">
            {principles.map((principle) => (
              <article key={principle.title} className="light-panel rounded-[2rem] p-6">
                <h2 className="text-xl font-black text-slate-950">{principle.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="section-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-950/5">
                <p className="text-5xl font-black tracking-tight text-slate-950">{stat.value}</p>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 light-panel rounded-[2.25rem] p-6 md:p-10">
            <SectionHeading
              eyebrow="Nasıl çalışıyoruz"
              title="Gereksiz karmaşıklık olmadan yapılandırılmış teslimat."
              description="Süreç, teknik paydaşlar için yeterince şeffaf ve üretim ekipleri için yeterince pratiktir."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-5">
              {processSteps.map((step, index) => (
                <div key={step.title} className="rounded-3xl bg-slate-950 p-5 text-white">
                  <span className="text-sm font-black text-sky-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-8 text-sm font-bold leading-6">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell flex flex-col gap-5 rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-950">
              İncelenmeye hazır bir teknik ihtiyacınız mı var?
            </h2>
            <p className="mt-3 text-slate-600">
              Çizimler, fotoğraflar, tarama verileri veya kısa bir süreç açıklaması gönderin.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-slate-950 px-7 py-4 text-center text-sm font-black text-white transition hover:bg-slate-800"
          >
            Mühendislik ile İletişim
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
