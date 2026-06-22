import Link from "next/link";
import { Logo } from "@/components/logo";
import { company, navItems, services } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
        <div>
          <Logo subtitle="Endüstriyel Mühendislik" size={48} className="text-white" />
          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">{company.description}</p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.22em] text-slate-300">Menü</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-sky-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.22em] text-slate-300">
            Yetkinlikler
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {services.slice(0, 4).map((service) => (
              <li key={service.slug}>{service.title}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-3 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={company.emailHref} className="hover:text-sky-300">
              {company.email}
            </a>
            <a href={company.phoneHref} className="hover:text-sky-300">
              {company.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
