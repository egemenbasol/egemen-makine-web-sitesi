import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { loadPublishedServices } from "@/lib/services-store";
import { loadSiteContent } from "@/lib/site-content";

export const dynamic = "force-dynamic";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const [site, services] = await Promise.all([loadSiteContent(), loadPublishedServices()]);

  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter company={site.company} services={services} />
      <WhatsAppButton whatsapp={site.company.whatsapp} />
    </>
  );
}
