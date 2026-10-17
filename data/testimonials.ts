export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  project: string;
  year: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "kronos",
    quote:
      "Incorelab took our trading terminal and completely rebuilt the frontend in Next.js with custom WebGL canvas charts. It streams live algorithmic depth at 120fps with zero lag. Our enterprise traders love it.",
    author: "Julian Vance",
    role: "HEAD OF ENGINEERING",
    company: "KRONOS TECHNOLOGIES",
    project: "Real-Time Trading Interface",
    year: "2024",
  },
  {
    id: "aura",
    quote:
      "Working with Incorelab was the smoothest agency partnership we've ever had. They understood our architectural aesthetic immediately, built custom horizontal scroll interactions, and delivered the site on schedule without budget creep.",
    author: "Elena Rostova",
    role: "FOUNDING PARTNER",
    company: "AURA ARCHITECTS",
    project: "Global Portfolio Monograph",
    year: "2024",
  },
  {
    id: "velocity",
    quote:
      "Our 3D vehicle configurator drove over $40M in pre-orders in the first quarter. Incorelab wrote custom WebGL shaders that look photorealistic on both desktop and mobile without killing battery life.",
    author: "Marcus Thorne",
    role: "VP OF PRODUCT & BRAND",
    company: "VELOCITY HYPER-EV",
    project: "3D Vehicle Configurator",
    year: "2024",
  },
  {
    id: "synthesis",
    quote:
      "The Incorelab team understands design just as deeply as they understand code. They restructured our entire spatial audio interface, making a complex DAW feel intuitive and fast. Truly exceptional craft.",
    author: "Sora Kageyama",
    role: "HEAD OF DESIGN",
    company: "SYNTHESIS AUDIO",
    project: "Web DAW & Spatial Engine",
    year: "2023",
  },
];
