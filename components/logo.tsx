import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/site-data";

type LogoProps = {
  href?: string;
  size?: number;
  showText?: boolean;
  subtitle?: string;
  className?: string;
  onClick?: () => void;
};

export function Logo({
  href = "/",
  size = 44,
  showText = true,
  subtitle = "Mühendislik",
  className = "",
  onClick,
}: LogoProps) {
  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className="relative grid shrink-0 place-items-center overflow-hidden rounded-xl border border-sky-300/25 bg-slate-900/80"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.svg"
          alt={`${company.name} logo`}
          width={size - 10}
          height={size - 10}
          className="object-contain"
          priority
        />
      </span>
      {showText ? (
        <span>
          <span className="block text-lg font-black tracking-tight">{company.name}</span>
          <span className="block text-xs uppercase tracking-[0.28em] text-slate-400">
            {subtitle}
          </span>
        </span>
      ) : null}
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} aria-label={`${company.name} ana sayfa`} onClick={onClick}>
      {content}
    </Link>
  );
}
