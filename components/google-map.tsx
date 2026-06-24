import type { Company } from "@/lib/site-types";

type GoogleMapProps = {
  company: Company;
};

export function GoogleMap({ company }: GoogleMapProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-950/5">
      <div className="aspect-[16/9] w-full">
        <iframe
          title={`${company.name} konum haritası`}
          src={company.mapEmbed}
          className="size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="border-t border-slate-200 px-6 py-4">
        <a
          href={company.mapLink}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-bold text-sky-700 transition hover:text-sky-900"
        >
          Haritada aç
        </a>
      </div>
    </div>
  );
}
