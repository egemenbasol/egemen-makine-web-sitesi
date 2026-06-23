import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yönetim Paneli",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-sky-600">
              Egemen Makine
            </p>
            <h1 className="text-lg font-black tracking-tight">İçerik Yönetim Paneli</h1>
          </div>
          <Link
            href="/"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
          >
            Siteye dön
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
    </div>
  );
}
