import { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://incorelab.com";
  const now = new Date();

  // Core static pages with alternate language hreflangs
  const coreRoutes = [
    { path: "", priority: 1.0, freq: "weekly" as const },
    { path: "/work", priority: 0.9, freq: "weekly" as const },
    { path: "/services", priority: 0.9, freq: "monthly" as const },
    { path: "/about", priority: 0.8, freq: "monthly" as const },
    { path: "/contact", priority: 0.9, freq: "monthly" as const },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.freq,
    priority: route.priority,
    alternates: {
      languages: {
        en: `${baseUrl}${route.path}`,
        ar: `${baseUrl}${route.path}?lang=ar`,
        "x-default": `${baseUrl}${route.path}`,
      },
    },
  }));

  // Dynamic Case Studies (16 client projects)
  const caseStudyRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
    alternates: {
      languages: {
        en: `${baseUrl}/work/${project.slug}`,
        ar: `${baseUrl}/work/${project.slug}?lang=ar`,
        "x-default": `${baseUrl}/work/${project.slug}`,
      },
    },
  }));

  // Service Deep-Dive Anchor Routes
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services#${service.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...coreRoutes, ...caseStudyRoutes, ...serviceRoutes];
}
