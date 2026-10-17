export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FaqItem[] = [
  {
    category: "SERVICES & STACK",
    question: "What core services do you specialize in?",
    answer:
      "We focus on eight main areas: custom web development (Next.js, React, TypeScript), online stores (Shopify Plus and headless), mobile apps (React Native, iOS, Android), 3D WebGL and browser games, branding and Figma design systems, AI automation, growth marketing and SEO, and cloud infrastructure.",
  },
  {
    category: "TIMELINE & PROCESS",
    question: "How long does a typical project take?",
    answer:
      "Most custom websites and online stores launch in 6 to 10 weeks. Smaller marketing sites can be ready in 2 to 4 weeks. Larger web applications, mobile apps, or custom AI tools usually take 10 to 14 weeks. We share a week-by-week plan before we start so you always know what's coming.",
  },
  {
    category: "ENGINEERING",
    question: "Why do you build primarily with Next.js and Tailwind CSS?",
    answer:
      "They give you the fastest page speeds available. Next.js loads pages in under 400ms and helps your pages rank higher on Google. Tailwind keeps the code clean and lightweight so your site stays fast even as it grows.",
  },
  {
    category: "PRICING & ENGAGEMENT",
    question: "How do you handle pricing?",
    answer:
      "We work with fixed milestone pricing so there are never surprise bills. Smaller sprint projects and focused tools start at AED 5,000 to AED 15,000 (~$1,400 to $4,000 USD). Full custom websites and flagship Shopify stores usually fall between AED 15,000 and AED 35,000 (~$4,000 to $9,500 USD). Advanced platforms and mobile apps range between AED 35,000 and AED 75,000 (~$9,500 to $20,000 USD), with large enterprise systems starting at AED 75,000+ (~$20,000+ USD). We also offer dedicated monthly support starting at AED 6,500 (~$1,800 USD) per month. You own 100% of the code and design from day one.",
  },
  {
    category: "E-COMMERCE & SHOPIFY",
    question: "Do you build custom Shopify themes or headless stores?",
    answer:
      "We do both, depending on what makes sense for your business. If you rely on native Shopify apps, we build custom Liquid themes. If you need lightning-fast speed, custom 3D product previews, or advanced international routing, we build a headless frontend using Next.js.",
  },
  {
    category: "AI & INTEGRATION",
    question: "How do you help companies with AI?",
    answer:
      "We build practical tools that save your team real time. That includes private search across your internal company docs, smart customer service assistants, automated document processing, and custom workflow automations. We make sure your company data stays private and secure.",
  },
];
