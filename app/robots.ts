import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/demos/", "/project-demos/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Google-InspectionTool",
          "Bingbot",
          "Applebot",
          "DuckDuckBot",
          "YandexBot",
          "Baiduspider",
        ],
        allow: "/",
        disallow: ["/api/", "/demos/", "/project-demos/"],
      },
      // AI Answer Engines & Generative Search Crawlers (AEO / GEO)
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "PerplexityBot",
          "ClaudeBot",
          "anthropic-ai",
          "CCBot",
          "cohere-ai",
        ],
        allow: "/",
        disallow: ["/api/", "/demos/", "/project-demos/"],
      },
    ],
    sitemap: "https://incorelab.com/sitemap.xml",
    host: "https://incorelab.com",
  };
}
