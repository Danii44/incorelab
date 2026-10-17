import React from "react";
import { faqData } from "@/data/faq";
import { servicesData } from "@/data/services";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://incorelab.com/#organization",
        name: "incorelab",
        legalName: "Incorelab Digital Studio",
        url: "https://incorelab.com",
        logo: "https://incorelab.com/logo/incorelab-logo.png",
        image: "https://incorelab.com/logo/Incorelab%20logo.png",
        description:
          "Independent digital product studio in Dubai and Zurich specializing in Next.js 15 web development, Shopify Plus e-commerce, React Native mobile apps, Three.js 3D WebGL, branding, and applied AI automation.",
        foundingDate: "2024",
        address: [
          {
            "@type": "PostalAddress",
            streetAddress: "Business Bay",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Zurich",
            addressCountry: "CH",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "New York",
            addressRegion: "NY",
            addressCountry: "US",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+971588741441",
            contactType: "Customer Inquiries & Sales",
            contactOption: "TollFree",
            availableLanguage: ["English", "Arabic", "German"],
            areaServed: ["AE", "SA", "QA", "CH", "US", "Worldwide"],
          },
        ],
        sameAs: [
          "https://www.instagram.com/incorelab/",
          "https://www.facebook.com/profile.php?id=61594459311127",
          "https://wa.me/971588741441",
          "https://x.com/incorelab",
          "https://linkedin.com/company/incorelab",
          "https://github.com/incorelab",
        ],
        knowsAbout: [
          "Next.js 15 Development",
          "React 19",
          "TypeScript",
          "Shopify Plus Development Dubai",
          "Headless E-Commerce Architecture",
          "React Native Mobile Apps",
          "Three.js 3D WebGL Configurator",
          "Figma Design Systems",
          "Applied AI & Vector RAG Pipelines",
          "Technical SEO & Core Web Vitals",
          "Cloudflare & AWS Cloud Infrastructure",
          "Dubai Web Design Agency",
          "UAE Web Development",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://incorelab.com/#service",
        name: "incorelab - Digital Product, Web Development & AI Studio",
        url: "https://incorelab.com",
        parentOrganization: { "@id": "https://incorelab.com/#organization" },
        priceRange: "AED 5,000 - AED 75,000+ ($1,400 - $20,000+ USD)",
        currenciesAccepted: "AED, USD, EUR, CHF",
        paymentAccepted: "Credit Card, Bank Wire, Stripe, Crypto",
        areaServed: [
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "Saudi Arabia" },
          { "@type": "Country", name: "Switzerland" },
          { "@type": "Country", name: "United States" },
          { "@type": "AdministrativeArea", name: "Worldwide" },
        ],
        geo: [
          {
            "@type": "GeoCoordinates",
            latitude: 25.1857,
            longitude: 55.2676, // Dubai
          },
          {
            "@type": "GeoCoordinates",
            latitude: 47.3769,
            longitude: 8.5417, // Zurich
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Engineering & Design Services",
          itemListElement: servicesData.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              category: service.category,
              provider: { "@id": "https://incorelab.com/#organization" },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://incorelab.com/#website",
        url: "https://incorelab.com",
        name: "incorelab",
        alternateName: ["Incorelab Studio", "Incorelab Dubai", "Incorelab Zurich"],
        publisher: { "@id": "https://incorelab.com/#organization" },
        inLanguage: ["en", "ar"],
      },
      {
        "@type": "FAQPage",
        "@id": "https://incorelab.com/#faq",
        mainEntity: faqData.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
