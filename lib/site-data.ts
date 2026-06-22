export const company = {
  name: "Egemen Makine",
  legalName: "Egemen Makine Sanayi ve Muhendislik",
  tagline: "Hassas makine, tersine muhendislik ve endustriyel otomasyon cozumleri",
  description:
    "Egemen Makine; ozel makine tasarimi, tersine muhendislik, 3D tarama, CAD/CAM, CNC imalat ve endustriyel otomasyon alanlarinda uretime hiz, kalite ve guvenilirlik kazandiran muhendislik ortagidir.",
  phone: "+90 555 000 00 00",
  phoneHref: "tel:+905550000000",
  email: "info@egemenmakine.com",
  emailHref: "mailto:info@egemenmakine.com",
  address: "Organize Sanayi Bolgesi, Istanbul, Turkiye",
  whatsapp: "https://wa.me/905550000000?text=Merhaba%20Egemen%20Makine%2C%20projem%20hakkinda%20bilgi%20almak%20istiyorum.",
  mapEmbed:
    "https://www.google.com/maps?q=Istanbul%20Organize%20Sanayi%20Bolgesi&output=embed",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Custom machine design",
    slug: "custom-machine-design",
    summary:
      "Purpose-built machines engineered around production targets, safety needs and maintainability.",
    details:
      "From concept sketches to commissioning-ready mechanical assemblies, we design robust systems that fit your process instead of forcing your process to fit the machine.",
    metrics: "Concept to detailed design",
  },
  {
    title: "Reverse engineering",
    slug: "reverse-engineering",
    summary:
      "Accurate recreation and improvement of legacy components, fixtures and machine assemblies.",
    details:
      "We capture geometry, evaluate wear points and rebuild manufacturable CAD data for parts where documentation is missing or outdated.",
    metrics: "Legacy part recovery",
  },
  {
    title: "3D scanning",
    slug: "3d-scanning",
    summary:
      "High-resolution digital capture for inspection, redesign, quality control and documentation.",
    details:
      "Our scan-to-CAD workflow helps compare real-world parts with nominal designs and accelerates engineering decisions.",
    metrics: "Scan-to-CAD workflow",
  },
  {
    title: "CAD/CAM engineering",
    slug: "cad-cam-engineering",
    summary:
      "Production-ready modeling, assemblies, drawings, toolpaths and machining preparation.",
    details:
      "We turn engineering intent into clear manufacturing packages with attention to tolerances, material behavior and cycle efficiency.",
    metrics: "Manufacturing-ready data",
  },
  {
    title: "CNC manufacturing",
    slug: "cnc-manufacturing",
    summary:
      "Precision machining for prototypes, fixtures, spare parts and repeatable production components.",
    details:
      "Our CNC manufacturing approach emphasizes stable processes, traceable quality checks and consistent delivery.",
    metrics: "Precision machining",
  },
  {
    title: "Industrial automation",
    slug: "industrial-automation",
    summary:
      "Automation cells, control logic and integration support for safer, faster production lines.",
    details:
      "We connect mechanical design, sensors, control panels and production workflows into practical automation systems.",
    metrics: "Integrated control systems",
  },
];

export const projects = [
  {
    title: "Robotic transfer and fixture cell",
    sector: "Automotive supplier",
    summary:
      "A compact automation cell with custom fixtures, pneumatic handling and operator-safe access zones.",
    tags: ["Automation", "Fixture design", "Safety"],
  },
  {
    title: "Legacy gearbox reverse engineering",
    sector: "Heavy industry",
    summary:
      "3D scan, measurement validation and manufacturable CAD rebuild for a critical discontinued gearbox housing.",
    tags: ["Reverse engineering", "3D scanning", "CNC"],
  },
  {
    title: "High-precision CNC production fixture",
    sector: "Aerospace machining",
    summary:
      "Modular fixture architecture that reduced setup variation and improved repeatability across production batches.",
    tags: ["CAD/CAM", "CNC manufacturing", "Quality"],
  },
  {
    title: "Packaging line upgrade",
    sector: "Food production",
    summary:
      "Mechanical redesign and sensor integration to increase throughput while preserving hygiene and maintenance access.",
    tags: ["Machine design", "Automation", "Commissioning"],
  },
];

export const processSteps = [
  "Discovery and technical assessment",
  "Concept engineering and risk review",
  "CAD/CAM development and prototyping",
  "Manufacturing, assembly and validation",
  "Commissioning support and continuous improvement",
];

export const stats = [
  { value: "6", label: "Core engineering services" },
  { value: "360", label: "End-to-end project perspective" },
  { value: "24/7", label: "Production-minded support" },
];
