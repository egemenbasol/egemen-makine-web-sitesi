"use client";

import { FormEvent, useState } from "react";
import type { Company } from "@/lib/site-types";

type FormState = "idle" | "sent";

type ContactFormProps = {
  company: Company;
};

export function ContactForm({ company }: ContactFormProps) {
  const [state, setState] = useState<FormState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sent");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="light-panel rounded-[2rem] p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm font-bold text-slate-700">
          Ad Soyad
          <input
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
            placeholder="Adınız ve soyadınız"
          />
        </label>
        <label className="space-y-2 text-sm font-bold text-slate-700">
          Firma
          <input
            name="company"
            autoComplete="organization"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
            placeholder="Firma adı"
          />
        </label>
        <label className="space-y-2 text-sm font-bold text-slate-700">
          E-posta
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
            placeholder={company.email}
          />
        </label>
        <label className="space-y-2 text-sm font-bold text-slate-700">
          Telefon
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
            placeholder={company.phone}
          />
        </label>
      </div>

      <label className="mt-5 block space-y-2 text-sm font-bold text-slate-700">
        Proje detayları
        <textarea
          name="message"
          required
          rows={6}
          className="w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
          placeholder="Fason iş, özel parça veya tersine mühendislik ihtiyacınızı kısaca anlatın."
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Talebi Gönder
        </button>
        <p className="text-sm text-slate-500">
          E-posta tercih ediyorsanız{" "}
          <a href={company.emailHref} className="font-bold text-sky-700 hover:text-sky-900">
            {company.email}
          </a>
        </p>
      </div>

      {state === "sent" ? (
        <p className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
          Teşekkürler. Talebiniz incelenmeye hazır; acil üretim desteği için e-posta veya WhatsApp
          üzerinden iletişime geçebilirsiniz.
        </p>
      ) : null}
    </form>
  );
}
