"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  { href: "/admin/panel/company", label: "Şirket bilgileri" },
  { href: "/admin/panel/seo", label: "SEO" },
  { href: "/admin/panel/home", label: "Ana sayfa" },
  { href: "/admin/panel/services", label: "Hizmetler" },
  { href: "/admin/panel/projects", label: "Projeler" },
  { href: "/admin/panel/page-services", label: "Hizmetler sayfası" },
  { href: "/admin/panel/page-projects", label: "Projeler sayfası" },
  { href: "/admin/panel/page-about", label: "Hakkımızda sayfası" },
  { href: "/admin/panel/page-contact", label: "İletişim sayfası" },
  { href: "/admin/panel/cta", label: "CTA bölümü" },
  { href: "/admin/panel/shared", label: "Ortak içerikler" },
] as const;

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-950/5 lg:sticky lg:top-6 lg:h-fit">
      <p className="px-3 text-xs font-black uppercase tracking-[0.24em] text-sky-600">Menü</p>
      <nav className="mt-4 space-y-1">
        {sections.map((section) => {
          const active = pathname === section.href;

          return (
            <Link
              key={section.href}
              href={section.href}
              className={`block rounded-2xl px-3 py-2.5 text-sm font-bold transition ${
                active
                  ? "bg-slate-950 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {section.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
