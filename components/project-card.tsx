type ProjectCardProps = {
  title: string;
  sector: string;
  summary: string;
  tags: string[];
  image?: string;
  index?: number;
};

export function ProjectCard({
  title,
  sector,
  summary,
  tags,
  image,
  index = 0,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/10">
      <div className="machine-card relative h-56 overflow-hidden p-6 text-white">
        {image ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={title}
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/55" />
          </>
        ) : (
          <>
            <div className="absolute inset-x-8 top-10 h-20 rounded-full border border-sky-300/20" />
            <div className="absolute -right-14 -top-14 size-44 rounded-full border border-slate-300/20" />
            <div className="absolute bottom-5 left-6 right-6 grid grid-cols-5 gap-2">
              {Array.from({ length: 10 }).map((_, itemIndex) => (
                <span
                  key={itemIndex}
                  className="h-2 rounded-full bg-slate-300/30"
                  style={{ opacity: 0.3 + ((itemIndex + index) % 4) * 0.14 }}
                />
              ))}
            </div>
          </>
        )}
        <div className="relative z-10 flex h-full flex-col justify-between">
          <span className="w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-sky-100">
            {sector}
          </span>
          <span className="text-5xl font-black text-white/12">0{index + 1}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black tracking-tight text-slate-950">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
