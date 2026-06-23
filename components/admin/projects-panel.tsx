"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectInput } from "@/lib/projects";

type ProjectsPanelProps = {
  initialProjects: Project[];
  githubEnabled: boolean;
};

type FormState = ProjectInput & {
  tagsText: string;
};

const emptyForm: FormState = {
  title: "",
  sector: "",
  summary: "",
  tags: [],
  tagsText: "",
  image: "",
  published: true,
};

function toFormState(project?: Project): FormState {
  if (!project) {
    return emptyForm;
  }

  return {
    title: project.title,
    sector: project.sector,
    summary: project.summary,
    tags: project.tags,
    tagsText: project.tags.join(", "),
    image: project.image ?? "",
    published: project.published,
    order: project.order,
  };
}

export function ProjectsPanel({ initialProjects, githubEnabled }: ProjectsPanelProps) {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedId) ?? null,
    [projects, selectedId],
  );

  function resetForm() {
    setSelectedId(null);
    setForm(emptyForm);
    setError("");
    setMessage("");
  }

  function startEdit(project: Project) {
    setSelectedId(project.id);
    setForm(toFormState(project));
    setError("");
    setMessage("");
  }

  async function refreshProjects() {
    const response = await fetch("/api/admin/projects");
    const data = (await response.json()) as { projects: Project[] };
    setProjects(data.projects);
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    const payload: ProjectInput = {
      title: form.title,
      sector: form.sector,
      summary: form.summary,
      tags: form.tagsText
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      image: form.image,
      published: form.published,
      order: form.order,
    };

    const response = await fetch(
      selectedId ? `/api/admin/projects/${selectedId}` : "/api/admin/projects",
      {
        method: selectedId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    const data = (await response.json()) as { error?: string; message?: string };

    setLoading(false);

    if (!response.ok) {
      setError(data.error ?? "İşlem başarısız.");
      return;
    }

    await refreshProjects();
    setMessage(data.message ?? "Kayıt tamamlandı.");

    if (!selectedId) {
      resetForm();
    }
  }

  async function handleDelete(project: Project) {
    const confirmed = window.confirm(`"${project.title}" projesini silmek istiyor musunuz?`);

    if (!confirmed) {
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    const response = await fetch(`/api/admin/projects/${project.id}`, {
      method: "DELETE",
    });

    const data = (await response.json()) as { error?: string; message?: string };
    setLoading(false);

    if (!response.ok) {
      setError(data.error ?? "Proje silinemedi.");
      return;
    }

    if (selectedId === project.id) {
      resetForm();
    }

    await refreshProjects();
    setMessage(data.message ?? "Proje silindi.");
  }

  async function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setUploading(true);
    setError("");
    setMessage("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("projectId", selectedId ?? (form.title || "yeni-proje"));

    const response = await fetch("/api/admin/upload", {
      method: "POST",
      body: formData,
    });

    const data = (await response.json()) as { error?: string; imageUrl?: string; message?: string };
    setUploading(false);

    if (!response.ok) {
      setError(data.error ?? "Görsel yüklenemedi.");
      return;
    }

    setForm((current) => ({
      ...current,
      image: data.imageUrl ?? "",
    }));
    setMessage(data.message ?? "Görsel yüklendi.");
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-600">Projeler</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">Proje vitrinini yönetin</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Yeni proje ekleyin, mevcut projeleri düzenleyin veya yayından kaldırın.
            {githubEnabled
              ? " Kayıtlar GitHub üzerinden saklanır; canlı site birkaç dakika içinde güncellenir."
              : " Yerel geliştirmede kayıtlar doğrudan bilgisayarınızdaki dosyaya yazılır."}
          </p>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
        >
          Çıkış yap
        </button>
      </div>

      {message ? (
        <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          {message}
        </p>
      ) : null}

      {error ? (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>
      ) : null}

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="text-xl font-black tracking-tight">Mevcut projeler</h3>
            <button
              type="button"
              onClick={resetForm}
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white transition hover:bg-slate-800"
            >
              Yeni proje
            </button>
          </div>

          <div className="space-y-4">
            {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-[1.5rem] border border-slate-200 p-4 transition hover:border-sky-200 hover:bg-sky-50/40"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-lg font-black text-slate-950">{project.title}</h4>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                        Sıra {project.order}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          project.published
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {project.published ? "Yayında" : "Taslak"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-sky-700">{project.sector}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{project.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={() => startEdit(project)}
                      className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-white"
                    >
                      Düzenle
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(project)}
                      className="rounded-full border border-red-200 px-4 py-2 text-sm font-bold text-red-700 transition hover:bg-red-50"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5">
          <h3 className="text-xl font-black tracking-tight">
            {selectedProject ? "Projeyi düzenle" : "Yeni proje ekle"}
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Başlık, sektör, açıklama ve etiketleri doldurun. İsterseniz proje görseli de
            yükleyebilirsiniz.
          </p>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">Proje başlığı</span>
              <input
                value={form.title}
                onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none ring-sky-400 transition focus:ring-2"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">Sektör</span>
              <input
                value={form.sector}
                onChange={(event) => setForm((current) => ({ ...current, sector: event.target.value }))}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none ring-sky-400 transition focus:ring-2"
                placeholder="Örn. Makine imalat"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">Kısa açıklama</span>
              <textarea
                value={form.summary}
                onChange={(event) => setForm((current) => ({ ...current, summary: event.target.value }))}
                className="min-h-32 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none ring-sky-400 transition focus:ring-2"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">
                Etiketler (virgülle ayırın)
              </span>
              <input
                value={form.tagsText}
                onChange={(event) =>
                  setForm((current) => ({ ...current, tagsText: event.target.value }))
                }
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none ring-sky-400 transition focus:ring-2"
                placeholder="CNC fason, Seri üretim, Kalite kontrol"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">Sıra</span>
              <input
                type="number"
                min={1}
                value={form.order ?? projects.length + 1}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    order: Number(event.target.value),
                  }))
                }
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none ring-sky-400 transition focus:ring-2"
              />
            </label>

            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(event) =>
                  setForm((current) => ({ ...current, published: event.target.checked }))
                }
              />
              <span className="text-sm font-semibold text-slate-700">Projeyi sitede yayınla</span>
            </label>

            <div className="rounded-2xl border border-dashed border-slate-200 p-4">
              <p className="text-sm font-bold text-slate-700">Proje görseli (isteğe bağlı)</p>
              <p className="mt-1 text-xs leading-6 text-slate-500">
                JPG, PNG veya WEBP. Yüklemezseniz otomatik kart tasarımı kullanılır.
              </p>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageUpload}
                className="mt-3 block w-full text-sm"
              />
              {uploading ? <p className="mt-2 text-sm text-slate-500">Görsel yükleniyor...</p> : null}
              {form.image ? (
                <p className="mt-2 text-sm font-medium text-emerald-700">Yüklü görsel: {form.image}</p>
              ) : null}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Kaydediliyor..." : selectedProject ? "Değişiklikleri kaydet" : "Projeyi ekle"}
              </button>
              {selectedProject ? (
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  Yeni proje moduna geç
                </button>
              ) : null}
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
