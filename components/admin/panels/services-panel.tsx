"use client";

import { useMemo, useState } from "react";
import { AdminAlert } from "@/components/admin/form-fields";
import { useSiteAdmin } from "@/components/admin/site-admin-provider";
import type { Service, ServiceInput } from "@/lib/site-types";

type FormState = ServiceInput & { id?: string };

const emptyForm: FormState = {
  title: "",
  slug: "",
  summary: "",
  details: "",
  metrics: "",
  published: true,
};

function toFormState(service?: Service): FormState {
  if (!service) return emptyForm;
  return {
    id: service.id,
    title: service.title,
    slug: service.slug,
    summary: service.summary,
    details: service.details,
    metrics: service.metrics,
    published: service.published,
    order: service.order,
  };
}

export function ServicesPanel() {
  const { services, setServices, githubEnabled, setMessage, setError } = useSiteAdmin();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [message, setLocalMessage] = useState("");
  const [error, setLocalError] = useState("");
  const [loading, setLoading] = useState(false);

  const selectedService = useMemo(
    () => services.find((service) => service.id === selectedId) ?? null,
    [services, selectedId],
  );

  async function refreshServices() {
    const response = await fetch("/api/admin/services");
    const data = (await response.json()) as { services: Service[] };
    setServices(data.services);
  }

  function resetForm() {
    setSelectedId(null);
    setForm(emptyForm);
    setLocalError("");
    setLocalMessage("");
  }

  function startEdit(service: Service) {
    setSelectedId(service.id);
    setForm(toFormState(service));
    setLocalError("");
    setLocalMessage("");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setLocalError("");
    setLocalMessage("");
    setMessage("");
    setError("");

    const payload: ServiceInput = {
      title: form.title,
      slug: form.slug,
      summary: form.summary,
      details: form.details,
      metrics: form.metrics,
      published: form.published,
      order: form.order,
    };

    const response = await fetch(
      selectedId ? `/api/admin/services/${selectedId}` : "/api/admin/services",
      {
        method: selectedId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );

    const data = (await response.json()) as { error?: string; message?: string };
    setLoading(false);

    if (!response.ok) {
      setLocalError(data.error ?? "İşlem başarısız.");
      return;
    }

    await refreshServices();
    setLocalMessage(data.message ?? "Kayıt tamamlandı.");
    setMessage(data.message ?? "Kayıt tamamlandı.");

    if (!selectedId) resetForm();
  }

  async function handleDelete(service: Service) {
    if (!window.confirm(`"${service.title}" hizmetini silmek istiyor musunuz?`)) return;

    setLoading(true);
    const response = await fetch(`/api/admin/services/${service.id}`, { method: "DELETE" });
    const data = (await response.json()) as { error?: string; message?: string };
    setLoading(false);

    if (!response.ok) {
      setLocalError(data.error ?? "Hizmet silinemedi.");
      return;
    }

    if (selectedId === service.id) resetForm();
    await refreshServices();
    setLocalMessage(data.message ?? "Hizmet silindi.");
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5">
        <h3 className="text-xl font-black tracking-tight">Hizmet yönetimi</h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Hizmetler sayfası ve iletişim sayfasında listelenen tüm hizmetler.
          {githubEnabled
            ? " Kayıtlar GitHub üzerinden saklanır."
            : " Yerel geliştirmede dosyaya doğrudan yazılır."}
        </p>
      </div>

      {message ? <AdminAlert message={message} tone="success" /> : null}
      {error ? <AdminAlert message={error} tone="error" /> : null}

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h4 className="text-lg font-black">Mevcut hizmetler</h4>
            <button
              type="button"
              onClick={resetForm}
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white"
            >
              Yeni hizmet
            </button>
          </div>
          <div className="space-y-4">
            {services.map((service) => (
              <article key={service.id} className="rounded-[1.5rem] border border-slate-200 p-4">
                <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                  <div>
                    <h5 className="text-lg font-black">{service.title}</h5>
                    <p className="mt-1 text-sm font-semibold text-sky-700">{service.metrics}</p>
                    <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => startEdit(service)}
                      className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold"
                    >
                      Düzenle
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(service)}
                      className="rounded-full border border-red-200 px-4 py-2 text-sm font-bold text-red-700"
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
          <h4 className="text-lg font-black">
            {selectedService ? "Hizmeti düzenle" : "Yeni hizmet ekle"}
          </h4>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              value={form.title}
              onChange={(e) => setForm((c) => ({ ...c, title: e.target.value }))}
              placeholder="Hizmet başlığı"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              required
            />
            <input
              value={form.slug}
              onChange={(e) => setForm((c) => ({ ...c, slug: e.target.value }))}
              placeholder="URL slug (örn. cnc-fason-uretim)"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            />
            <input
              value={form.metrics}
              onChange={(e) => setForm((c) => ({ ...c, metrics: e.target.value }))}
              placeholder="Kısa etiket (örn. Fason CNC işleme)"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              required
            />
            <textarea
              value={form.summary}
              onChange={(e) => setForm((c) => ({ ...c, summary: e.target.value }))}
              placeholder="Kısa özet"
              className="min-h-24 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              required
            />
            <textarea
              value={form.details}
              onChange={(e) => setForm((c) => ({ ...c, details: e.target.value }))}
              placeholder="Detaylı açıklama"
              className="min-h-32 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              required
            />
            <input
              type="number"
              min={1}
              value={form.order ?? services.length + 1}
              onChange={(e) => setForm((c) => ({ ...c, order: Number(e.target.value) }))}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            />
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(e) => setForm((c) => ({ ...c, published: e.target.checked }))}
              />
              <span className="text-sm font-semibold">Yayında</span>
            </label>
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white disabled:opacity-60"
            >
              {loading ? "Kaydediliyor..." : selectedService ? "Güncelle" : "Ekle"}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
