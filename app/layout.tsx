import type { Metadata } from "next";
import "./globals.css";
import { loadSiteContent } from "@/lib/site-content";

export async function generateMetadata(): Promise<Metadata> {
  const site = await loadSiteContent();
  const siteTitle = `${site.company.name} | ${site.seo.titleSuffix}`;

  return {
    metadataBase: new URL(site.seo.siteUrl),
    title: {
      default: siteTitle,
      template: `%s | ${site.company.name}`,
    },
    description: site.company.description,
    keywords: site.seo.keywords,
    authors: [{ name: site.company.name }],
    creator: site.company.name,
    publisher: site.company.name,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: site.seo.siteUrl,
      siteName: site.company.name,
      title: siteTitle,
      description: site.company.description,
    },
    icons: {
      icon: [{ url: "/logo.png", type: "image/png" }, { url: "/logo.svg", type: "image/svg+xml" }],
      apple: "/logo.png",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: site.company.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
