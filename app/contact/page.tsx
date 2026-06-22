import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { GoogleMap } from "@/components/google-map";
import { SectionHeading } from "@/components/section-heading";
import { company, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Egemen Makine for custom machine design, reverse engineering, 3D scanning, CAD/CAM, CNC manufacturing and industrial automation projects.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="industrial-bg py-24 text-white md:py-32">
        <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-300">
              Contact
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              Request engineering support for your next industrial project.
            </h1>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            Share your requirement, drawings, part photos or automation target. Egemen Makine will
            help clarify the technical route and next steps.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-start">
          <ContactForm />

          <aside className="space-y-5">
            <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-950/15">
              <h2 className="text-2xl font-black tracking-tight">Direct contact</h2>
              <div className="mt-6 space-y-5 text-sm">
                <a
                  href={company.phoneHref}
                  className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <span className="block font-black uppercase tracking-[0.2em] text-slate-400">
                    Phone
                  </span>
                  <span className="mt-1 block text-lg font-bold text-white">{company.phone}</span>
                </a>
                <a
                  href={company.emailHref}
                  className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <span className="block font-black uppercase tracking-[0.2em] text-slate-400">
                    Email
                  </span>
                  <span className="mt-1 block text-lg font-bold text-white">{company.email}</span>
                </a>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="block font-black uppercase tracking-[0.2em] text-slate-400">
                    Address
                  </span>
                  <span className="mt-1 block leading-7 text-white">{company.address}</span>
                </div>
              </div>
            </div>

            <div className="light-panel rounded-[2rem] p-7">
              <h2 className="text-xl font-black text-slate-950">Useful request details</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                <li>Technical drawings or CAD files if available</li>
                <li>Part photos, dimensions or 3D scan requirements</li>
                <li>Material, tolerance, quantity and production targets</li>
                <li>Automation cycle time, safety and integration needs</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Location"
            title="Visit or coordinate with Egemen Makine."
            description="Use the map for location context and contact directly before visiting for production or project meetings."
          />
          <div className="mt-10">
            <GoogleMap />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="rounded-[2.25rem] bg-slate-950 p-7 text-white md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-300">
              Common quote scopes
            </p>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {services.map((service) => (
                <span
                  key={service.slug}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-slate-200"
                >
                  {service.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
