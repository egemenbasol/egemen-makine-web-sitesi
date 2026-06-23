"use client";

import { useSiteAdmin } from "@/components/admin/site-admin-provider";

export function AdminPanelHeader() {
  const { githubEnabled } = useSiteAdmin();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <div className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-600">Yönetim paneli</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight">Site içeriğini yönetin</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Şirket bilgileri, sayfa metinleri, hizmetler ve projeleri buradan güncelleyebilirsiniz.
          {githubEnabled
            ? " Canlı ortamda kayıtlar GitHub üzerinden saklanır."
            : " Yerel ortamda dosyalara doğrudan yazılır."}
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
  );
}
