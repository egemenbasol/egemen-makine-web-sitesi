"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      setError(data.error ?? "Giriş yapılamadı.");
      return;
    }

    const nextPath = searchParams.get("next") ?? "/admin/panel/company";
    router.push(nextPath);
    router.refresh();
  }

  return (
    <div className="mx-auto max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-950/5">
      <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-600">Yönetim</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight">Panele giriş</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Projeleri buradan ekleyebilir, düzenleyebilir veya silebilirsiniz.
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-slate-700">Yönetici şifresi</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none ring-sky-400 transition focus:ring-2"
            placeholder="Şifrenizi girin"
            required
          />
        </label>

        {error ? (
          <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Giriş yapılıyor..." : "Panele gir"}
        </button>
      </form>
    </div>
  );
}
