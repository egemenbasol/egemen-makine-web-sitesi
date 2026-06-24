export type SectionContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export type CompanyInput = {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  whatsappMessage: string;
  mapLink: string;
  mapEmbed: string;
};

export type Company = CompanyInput & {
  phoneHref: string;
  emailHref: string;
  whatsapp: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type PrincipleItem = {
  title: string;
  text: string;
};

export type ProcessStep = {
  title: string;
  detail: string;
};

export type SiteContent = {
  company: CompanyInput;
  seo: {
    siteUrl: string;
    titleSuffix: string;
    keywords: string[];
  };
  home: {
    heroTitle: string;
    heroPrimaryButton: string;
    heroSecondaryButton: string;
    visualBadge: string;
    visualEyebrow: string;
    visualTitle: string;
    projectsSection: SectionContent & { buttonLabel: string };
    processSection: SectionContent;
  };
  servicesPage: {
    metaDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    listSection: SectionContent;
  };
  projectsPage: {
    metaDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroDescription: string;
    listSection: SectionContent;
    metricsSection: SectionContent;
  };
  aboutPage: {
    metaDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    cardTitle: string;
    cardDescription: string;
    profileSection: SectionContent;
    processSection: SectionContent;
    ctaBox: {
      title: string;
      description: string;
      buttonLabel: string;
    };
  };
  contactPage: {
    metaDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroDescription: string;
    mapSection: SectionContent;
    servicesListTitle: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
  processSteps: ProcessStep[];
  stats: StatItem[];
  principles: PrincipleItem[];
  serviceDeliverables: string[];
  servicePrinciples: string[];
  projectMetrics: StatItem[];
  contactTips: string[];
};

export type Service = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  details: string;
  metrics: string;
  published: boolean;
  order: number;
};

export type ServiceInput = Omit<Service, "id" | "order"> & {
  id?: string;
  order?: number;
};

export const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetler", href: "/services" },
  { label: "Projeler", href: "/projects" },
  { label: "Hakkımızda", href: "/about" },
  { label: "İletişim", href: "/contact" },
] as const;
