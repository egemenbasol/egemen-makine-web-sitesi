"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/site-data";

type FormState = "idle" | "sent";

export function ContactForm() {
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
          Full name
          <input
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2 text-sm font-bold text-slate-700">
          Company
          <input
            name="company"
            autoComplete="organization"
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
            placeholder="Company name"
          />
        </label>
        <label className="space-y-2 text-sm font-bold text-slate-700">
          Email
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
          Phone
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
        Project details
        <textarea
          name="message"
          required
          rows={6}
          className="w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
          placeholder="Tell us about your machine, part, automation cell or manufacturing requirement."
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Send request
        </button>
        <p className="text-sm text-slate-500">
          Prefer email?{" "}
          <a href={company.emailHref} className="font-bold text-sky-700 hover:text-sky-900">
            {company.email}
          </a>
        </p>
      </div>

      {state === "sent" ? (
        <p className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
          Thank you. Your request is ready for review; please email or WhatsApp for immediate
          production support.
        </p>
      ) : null}
    </form>
  );
}
