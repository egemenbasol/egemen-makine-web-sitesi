export function AdminTextField({
  label,
  value,
  onChange,
  required,
  placeholder,
  multiline,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  multiline?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-slate-700">{label}</span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="min-h-28 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none ring-sky-400 transition focus:ring-2"
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none ring-sky-400 transition focus:ring-2"
          placeholder={placeholder}
          required={required}
        />
      )}
    </label>
  );
}

export function AdminSectionCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5">
      <h3 className="text-xl font-black tracking-tight text-slate-950">{title}</h3>
      {description ? <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p> : null}
      <div className="mt-6 space-y-5">{children}</div>
    </section>
  );
}

export function AdminSaveBar({
  onSave,
  loading,
  label = "Değişiklikleri kaydet",
}: {
  onSave: () => void;
  loading: boolean;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onSave}
      disabled={loading}
      className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Kaydediliyor..." : label}
    </button>
  );
}

export function AdminAlert({ message, tone }: { message: string; tone: "success" | "error" }) {
  const classes =
    tone === "success"
      ? "rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
      : "rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700";

  return <p className={classes}>{message}</p>;
}
