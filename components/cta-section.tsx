import Link from "next/link";
import { company } from "@/lib/site-data";

export function CtaSection() {
  return (
    <section className="industrial-bg py-20 text-white">
      <div className="section-shell relative z-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-300">
            Start the engineering conversation
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
            Need a machine, fixture, scanned model or automation cell built for production?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Share your technical challenge and Egemen Makine will help define the fastest practical
            path from requirement to reliable manufacturing output.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <Link
            href="/contact"
            className="rounded-full bg-sky-400 px-7 py-4 text-center text-sm font-black text-slate-950 shadow-xl shadow-sky-500/20 transition hover:bg-sky-300"
          >
            Request a Quote
          </Link>
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/10 px-7 py-4 text-center text-sm font-black text-white transition hover:bg-white hover:text-slate-950"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
