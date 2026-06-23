"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type LogoProps = {
  href?: string;
  size?: number;
  showText?: boolean;
  companyName?: string;
  subtitle?: string;
  className?: string;
  onClick?: () => void;
};

export function Logo({
  href = "/",
  size = 44,
  showText = true,
  companyName = "Egemen Makine",
  subtitle = "CNC Metal İşleme Ve Tersine Mühendislik",
  className = "",
  onClick,
}: LogoProps) {
  const [logoSrc, setLogoSrc] = useState("/logo.png");

  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className="relative grid shrink-0 place-items-center overflow-hidden rounded-xl bg-black"
        style={{ width: size, height: size }}
      >
        <Image
          src={logoSrc}
          alt={`${companyName} logo`}
          width={size - 6}
          height={size - 6}
          className="object-contain"
          priority
          onError={() => setLogoSrc("/logo.svg")}
        />
      </span>
      {showText ? (
        <span>
          <span className="block text-lg font-black tracking-tight">{companyName}</span>
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
    <Link href={href} aria-label={`${companyName} ana sayfa`} onClick={onClick}>
      {content}
    </Link>
  );
}
