export interface NavLink {
  label: string;
  href: string;
  number: string;
}

export const navLinks: NavLink[] = [
  { label: "Work", href: "/work", number: "01" },
  { label: "Services", href: "/services", number: "02" },
  { label: "About", href: "/about", number: "03" },
  { label: "Contact", href: "/contact", number: "04" },
];

export const contactInfo = {
  domain: "incorelab.com",
  email: "contact@incorelab.com",
  phone: "+971588741441",
  phoneFormatted: "+971 58 874 1441",
  whatsappUrl: "https://wa.me/971588741441",
  locations: ["Zurich, Switzerland", "Dubai, UAE", "New York, USA"],
};

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/incorelab/", handle: "@incorelab" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61594459311127", handle: "Incorelab" },
  { label: "WhatsApp", href: "https://wa.me/971588741441", handle: "+971 58 874 1441" },
  { label: "LinkedIn", href: "https://linkedin.com/company/incorelab", handle: "incorelab" },
  { label: "Twitter / X", href: "https://x.com/incorelab", handle: "@incorelab" },
];

export const marqueeItems = [
  "NEXT.JS 15 & REACT APPLICATIONS",
  "HEADLESS SHOPIFY & E-COMMERCE",
  "MOBILE APPS (REACT NATIVE & SWIFT)",
  "GAME DEVELOPMENT & 3D WEBGL",
  "FRAMER & WEBFLOW PRODUCTION",
  "BRANDING & FIGMA DESIGN SYSTEMS",
  "APPLIED AI & AUTOMATION",
  "GROWTH MARKETING & TECHNICAL SEO",
  "CLOUD INFRASTRUCTURE & DEVOPS",
  "FAST WEB APPS & TAILORED SOFTWARE",
];

export const clientLogos = [
  "KRONOS ALGORITHMIC",
  "AURA SPATIAL",
  "VELOCITY HYPER-EV",
  "SYNTHESIS AUDIO",
  "LUMEN LABS ZURICH",
  "STRATA VENTURES",
  "NEXUS QUANTUM",
  "MONOLITH DYNAMICS",
];
