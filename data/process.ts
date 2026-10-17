export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export const processData: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Blueprint",
    subtitle: "Real requirements, clear scope, no guesswork",
    description:
      "We learn what your business needs, review your current site, and plan the architecture. You get a clear timeline and a fixed-price proposal before we start.",
    deliverables: ["Technical Plan", "Competitor Review", "Milestone Schedule", "Initial Design Direction"],
    duration: "Weeks 1 to 2",
  },
  {
    number: "02",
    title: "Design & Interactive Prototypes",
    subtitle: "Layouts you can click through on your phone",
    description:
      "We design responsive screens and typography systems in Figma. You get a working prototype to click through, test, and approve before anyone writes a line of code.",
    deliverables: ["Complete Figma Design System", "Clickable Mobile & Desktop Prototypes", "Component Library", "Motion Notes"],
    duration: "Weeks 3 to 5",
  },
  {
    number: "03",
    title: "Engineering & Testing",
    subtitle: "Clean code and thorough device checks",
    description:
      "We build your site or app with Next.js and TypeScript. We test on real phones, tablets, and laptops to make sure every page loads fast and feels snappy.",
    deliverables: ["Full Production Codebase", "CMS & API Integrations", "Cross-Device Testing", "Fast Page Speed Setup"],
    duration: "Weeks 6 to 9",
  },
  {
    number: "04",
    title: "Launch & Ongoing Support",
    subtitle: "Domain switch, analytics setup, and post-launch help",
    description:
      "We handle your domain launch, set up analytics, verify search indexing, and stay on call for 30 days so your team can launch with complete confidence.",
    deliverables: ["Smooth Domain Launch", "Analytics & Search Console Setup", "Admin Handover Call", "30-Day Post-Launch Support"],
    duration: "Week 10 and beyond",
  },
];
