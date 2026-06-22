import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { company } from "@/lib/site-data";

const siteUrl = "https://egemenmakine.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Premium Industrial Engineering`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "Egemen Makine",
    "custom machine design",
    "reverse engineering",
    "3D scanning",
    "CAD/CAM engineering",
    "CNC manufacturing",
    "industrial automation",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} | Premium Industrial Engineering`,
    description: company.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Premium Industrial Engineering`,
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
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
