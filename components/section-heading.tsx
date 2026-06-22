type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const titleClass = tone === "dark" ? "text-white" : "text-slate-950";
  const descriptionClass = tone === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-600">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-black tracking-tight md:text-5xl ${titleClass}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-lg leading-8 ${descriptionClass}`}>{description}</p>
      ) : null}
    </div>
  );
}
