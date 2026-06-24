import Link from "next/link";

type ServiceCardProps = {
  title: string;
  summary: string;
  metrics: string;
  href?: string;
};

export function ServiceCard({ title, summary, metrics, href = "/services" }: ServiceCardProps) {
  return (
    <article className="group light-panel flex h-full flex-col rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10">
      <div className="mb-7 flex items-center justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-2xl bg-slate-950 text-sky-300">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-none stroke-current stroke-2">
            <path d="M4 17h16M7 17V7h10v10M9 7V4h6v3M9 11h6M9 14h6" />
          </svg>
        </span>
        <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
          {metrics}
        </span>
      </div>
      <h3 className="text-xl font-black tracking-tight text-slate-950">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{summary}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-black text-sky-700 transition group-hover:gap-3 group-hover:text-sky-900"
      >
        Yetkinliği incele
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
