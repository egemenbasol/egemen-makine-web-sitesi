import { readJsonFile, writeJsonFile } from "@/lib/content-files";
import type { Company, CompanyInput, SiteContent } from "@/lib/site-types";

const SITE_FILE = "content/site.json";

function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function enrichCompany(company: CompanyInput): Company {
  const digits = normalizePhone(company.phone);
  const whatsappDigits = digits.startsWith("0") ? `90${digits.slice(1)}` : digits;

  return {
    ...company,
    phoneHref: `tel:+${whatsappDigits}`,
    emailHref: `mailto:${company.email}`,
    whatsapp: `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(company.whatsappMessage)}`,
  };
}

export async function loadSiteContentRaw(): Promise<SiteContent> {
  return readJsonFile<SiteContent>(SITE_FILE);
}

export async function loadSiteContent(): Promise<SiteContent & { company: Company }> {
  const content = await loadSiteContentRaw();

  return {
    ...content,
    company: enrichCompany(content.company),
  };
}

export async function saveSiteContent(content: SiteContent, message = "Admin: site içeriği güncellendi") {
  await writeJsonFile(SITE_FILE, content, message);
}

export async function getCompany(): Promise<Company> {
  const site = await loadSiteContent();
  return site.company;
}
