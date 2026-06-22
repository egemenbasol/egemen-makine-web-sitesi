import { company } from "@/lib/site-data";

export function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-950/10">
      <iframe
        title={`${company.name} location map`}
        src={company.mapEmbed}
        className="h-[380px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
