"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/10 bg-slate-950/82 text-white shadow-2xl shadow-slate-950/10 backdrop-blur-xl">
      <nav className="section-shell flex min-h-20 items-center justify-between gap-6">
        <Logo onClick={() => setIsOpen(false)} />

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-white text-slate-950"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-sky-400 px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-300"
          >
            Teklif Alın
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
          aria-label="Menüyü aç veya kapat"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-slate-950/96 px-4 py-5 lg:hidden">
          <div className="mx-auto flex max-w-xl flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base font-semibold ${
                    isActive
                      ? "bg-white text-slate-950"
                      : "bg-white/5 text-slate-200 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-2xl bg-sky-400 px-4 py-3 text-center font-black text-slate-950"
            >
              Teklif Alın
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
