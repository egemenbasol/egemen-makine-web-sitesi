import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { company } from "@/lib/site-data";

const siteUrl = "https://egemenmakine.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Premium Endüstriyel Mühendislik`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "Egemen Makine",
    "özel makine tasarımı",
    "tersine mühendislik",
    "3D tarama",
    "CAD CAM mühendisliği",
    "CNC imalat",
    "endüstriyel otomasyon",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} | Premium Endüstriyel Mühendislik`,
    description: company.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Premium Endüstriyel Mühendislik`,
    description: company.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
