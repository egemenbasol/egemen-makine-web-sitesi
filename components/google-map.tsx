import { company } from "@/lib/site-data";

export function GoogleMap() {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-950/10">
        <iframe
          title={`${company.name} konum haritası`}
          src={company.mapEmbed}
          className="h-[380px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a
        href={company.mapLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:bg-slate-800"
      >
        Google Haritalarda Aç
      </a>
    </div>
  );
}
