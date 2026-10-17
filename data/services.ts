export interface SubService {
  id: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  subServices: SubService[];
  metrics: { value: string; label: string };
  techStack: string[];
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    category: "ENGINEERING",
    tagline: "Custom websites and web applications built for speed, clean code, and zero lag.",
    description:
      "We build tailored Next.js and React web applications, custom marketing sites, and lightweight HTML5 platforms. No bloated drag-and-drop builders, no slow plugins. Just clean, maintainable TypeScript that loads in under 400ms.",
    deliverables: [
      "Custom Next.js & React Web Applications",
      "Headless Shopify & E-Commerce Frontends",
      "Framer & Webflow Production Sites",
      "Semantic HTML5, CSS & Modern JavaScript",
      "Interactive 3D WebGL & Shader Experiences",
      "REST, GraphQL & WebSocket API Backends",
    ],
    subServices: [
      {
        id: "nextjs-react",
        title: "Next.js & React Applications",
        badge: "Next.js 15 / React 19",
        description: "Full-stack apps using Server Components, streaming data, and edge caching for instant clicks and top SEO ranks.",
        features: ["Server-Side Rendering (SSR)", "Zero-lag Turbopack compilation", "Edge route handling", "Strict TypeScript safety"],
      },
      {
        id: "headless-shopify",
        title: "Headless Shopify & Custom Stores",
        badge: "Shopify Plus / Hydrogen",
        description: "Fast e-commerce frontends powered by Shopify Storefront APIs with instant page navigation and custom checkouts.",
        features: ["Instant product page loads", "GraphQL API integration", "Custom cart & drawer flows", "Multi-currency checkout"],
      },
      {
        id: "framer-webflow",
        title: "Framer & Webflow Fast-Track Sites",
        badge: "Framer / Webflow",
        description: "High-end marketing websites delivered in weeks, fully editable by your marketing team without touching code.",
        features: ["Turn Figma into live sites fast", "Built-in CMS for blogs & case studies", "Silky scroll animations", "Complete client handoff training"],
      },
      {
        id: "html-css-vanilla",
        title: "Clean HTML5 / CSS3 & JavaScript",
        badge: "Zero Framework Bloat",
        description: "Lightweight, framework-free web pages that load in a blink, work on any device, and require virtually zero maintenance.",
        features: ["Under 50KB total page weight", "100% accessible semantic markup", "Fluid typography with clamp()", "Works in any browser"],
      },
      {
        id: "api-backend",
        title: "Cloud Backends & Real-Time APIs",
        badge: "Node.js / tRPC / Go",
        description: "Scalable backend services, database architectures, and real-time WebSocket feeds designed to handle high concurrency.",
        features: ["Sub-50ms response times", "Real-time live WebSocket sync", "PostgreSQL & Redis setup", "Secure authentication (OAuth, JWT)"],
      },
      {
        id: "speed-core-vitals",
        title: "Performance & Core Web Vitals Fixes",
        badge: "Lighthouse 100",
        description: "We audit slow websites, eliminate render-blocking scripts, and bring Core Web Vitals into the green for higher Google rankings.",
        features: ["Sub-0.4s First Contentful Paint", "Zero layout shifts (CLS)", "Image & script payload slimming", "Direct search rank boost"],
      },
    ],
    metrics: { value: "<0.35s", label: "Average First Contentful Paint" },
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer", "Webflow", "HTML5", "Node.js", "GraphQL"],
    image: "/images/service-web.png",
  },
  {
    id: "ecommerce-engineering",
    number: "02",
    title: "E-Commerce Engineering",
    category: "COMMERCE",
    tagline: "Online stores built to turn casual visitors into loyal repeat customers.",
    description:
      "We design and build custom Shopify Plus stores, headless commerce setups, and straightforward checkout flows that look clean, load instantly, and lift average order value.",
    deliverables: [
      "Custom Shopify Plus Themes (Liquid)",
      "Headless Hydrogen & Medusa Frontends",
      "One-Click Checkout & Custom Upsell Apps",
      "Conversion Rate Optimization (CRO)",
      "Multi-Currency & International Tax Routing",
      "Automated Inventory, ERP & Klaviyo Sync",
    ],
    subServices: [
      {
        id: "shopify-plus-custom",
        title: "Custom Shopify Plus Stores",
        badge: "Shopify Plus Partner",
        description: "Custom Shopify themes built specifically for your brand, without clunky off-the-shelf templates or slow apps.",
        features: ["Tailored Liquid templates", "Custom product customizers", "Automated Shopify Flow scripts", "Flash-sale ready server stability"],
      },
      {
        id: "checkout-extensions",
        title: "Checkout Upgrades & 1-Click Buy",
        badge: "Stripe & Apple Pay",
        description: "Remove checkout friction with one-click payment buttons, native subscription billing, and smart post-purchase upsells.",
        features: ["Apple Pay & Google Pay 1-click", "In-cart progress bars & upsells", "ReCharge subscription setups", "Zero cart abandonment leaks"],
      },
      {
        id: "headless-hydrogen",
        title: "Headless Commerce (Hydrogen & Medusa)",
        badge: "Headless E-Com",
        description: "Break free from template constraints with a custom Next.js frontend that tells your brand story with speed and 3D previews.",
        features: ["Instantaneous page navigations", "3D WebGL product viewports", "Custom bundle builders", "Multi-brand centralized catalog"],
      },
      {
        id: "global-commerce",
        title: "Global Multi-Currency & Localization",
        badge: "Cross-Border DTC",
        description: "Sell internationally with automatic currency conversion, localized tax calculation, and multi-language support.",
        features: ["Automated duties & VAT collection", "Geo-targeted pricing & currency", "Multi-warehouse fulfillment logic", "Localized translations"],
      },
    ],
    metrics: { value: "+42%", label: "Average AOV Lift Across Stores" },
    techStack: ["Shopify Plus", "Hydrogen", "Medusa.js", "Liquid", "Stripe", "GraphQL", "Klaviyo", "Sanity CMS"],
    image: "/images/service-ecommerce.png",
  },
  {
    id: "mobile-development",
    number: "03",
    title: "Mobile App Development",
    category: "MOBILE",
    tagline: "Fast, intuitive iOS and Android apps designed for everyday people.",
    description:
      "We design and develop native and cross-platform mobile apps using React Native, Swift, and Kotlin. 60fps animations, intuitive gesture navigation, offline data sync, and clean codebases you actually enjoy maintaining.",
    deliverables: [
      "React Native & Expo Applications",
      "Native iOS Apps (Swift & SwiftUI)",
      "Native Android Apps (Kotlin & Compose)",
      "Progressive Web Apps (PWA)",
      "Offline-First Architecture",
      "App Store & Google Play Publishing",
    ],
    subServices: [
      {
        id: "react-native-expo",
        title: "React Native & Expo Mobile Apps",
        badge: "iOS & Android",
        description: "One single TypeScript codebase delivering 100% native iOS and Android performance, cutting development cost and time in half.",
        features: ["Single codebase for both platforms", "Native gesture performance", "Over-the-air (OTA) updates", "Full App Store submission service"],
      },
      {
        id: "native-swift-ios",
        title: "Native iOS (Swift & SwiftUI)",
        badge: "Swift / iOS 18",
        description: "Engineered specifically for iPhone and iPad, taking full advantage of Dynamic Island, widgets, Apple Pay, and Face ID.",
        features: ["Dynamic Island & Live Activities", "Clean SwiftUI architecture", "Apple Watch & home screen widgets", "Biometric FaceID security"],
      },
      {
        id: "native-android-kotlin",
        title: "Native Android (Kotlin & Compose)",
        badge: "Kotlin / Compose",
        description: "Built for modern Android devices using Jetpack Compose, Material You guidelines, and reliable background synchronization.",
        features: ["Jetpack Compose UI", "Hardware acceleration", "Battery-efficient background sync", "Wide Android device compatibility"],
      },
      {
        id: "pwa-offline",
        title: "Progressive Web Apps (PWA)",
        badge: "Installable Web App",
        description: "Deliver an app experience directly through the browser without forcing users to download 200MB from the app store.",
        features: ["Instant home-screen install", "Works reliably offline", "Direct web push notifications", "Zero app store commissions"],
      },
    ],
    metrics: { value: "60 FPS", label: "Locked Frame-Rate Guarantee" },
    techStack: ["React Native", "Expo", "Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "TypeScript", "PWA"],
    image: "/images/service-mobile.png",
  },
  {
    id: "game-development-webgl",
    number: "04",
    title: "Game Development & 3D WebGL",
    category: "SPATIAL & 3D",
    tagline: "Interactive 3D configurators, custom shaders, and browser games running at 60 to 120 frames per second.",
    description:
      "We build immersive 3D experiences that run directly in web browsers without plugins. From interactive product customizers and architectural walkthroughs to browser-based games using Three.js, React Three Fiber, and Unity.",
    deliverables: [
      "Three.js & React Three Fiber (R3F)",
      "Real-Time 3D Product Configurators",
      "Unity 3D WebAssembly Compilations",
      "Custom GLSL Shader Effects",
      "WebXR (VR & AR) Browser Experiences",
      "Interactive Particle & Physics Systems",
    ],
    subServices: [
      {
        id: "threejs-r3f",
        title: "Interactive 3D Web & Three.js",
        badge: "Three.js / WebGL",
        description: "Lightweight, GPU-accelerated 3D scenes integrated into modern web apps without slowing down page load times.",
        features: ["Photorealistic PBR materials", "Silky camera choreography", "Smooth mouse & touch interaction", "Tested on mobile GPUs"],
      },
      {
        id: "3d-configurators",
        title: "3D Product & Vehicle Configurators",
        badge: "Product Showcase",
        description: "Let customers customize products in full 360-degree 3D, changing colors, materials, and parts in real time.",
        features: ["Photorealistic car paint & metals", "Realistic reflections & shadows", "Instant part swapping", "Direct link to cart checkout"],
      },
      {
        id: "unity-browser-games",
        title: "Browser Games & WebAssembly",
        badge: "Unity 3D / C#",
        description: "Engaging 2D and 3D games compiled to WebAssembly for instant play in any modern browser on desktop or mobile.",
        features: ["Realistic physics simulations", "Multiplayer WebSocket servers", "Spatial sound & audio effects", "Gamepad & keyboard controls"],
      },
      {
        id: "custom-glsl-shaders",
        title: "Custom GLSL Shader Programming",
        badge: "GLSL Shaders",
        description: "Custom mathematical shaders that generate organic movement, fluid ripple effects, and atmospheric background glow.",
        features: ["Procedural organic noise", "Audio-reactive waveforms", "Liquid distortion & refractions", "Runs fast on low-power devices"],
      },
    ],
    metrics: { value: "120 FPS", label: "Peak WebGL Performance" },
    techStack: ["Three.js", "React Three Fiber", "GLSL Shaders", "Unity 3D", "WebAssembly", "WebXR", "Blender"],
    image: "/images/service-game.png",
  },
  {
    id: "branding-ui-ux",
    number: "05",
    title: "Branding & UI/UX Design",
    category: "DESIGN ATELIER",
    tagline: "Clear, human-crafted design systems that make your company look like the industry leader.",
    description:
      "We craft distinctive visual identities, thoughtful UI/UX interfaces, and battle-tested design systems in Figma. We focus on clean typography, generous negative space, and intuitive layouts that make complex software feel simple to use.",
    deliverables: [
      "Brand Identity & Visual Styleguides",
      "Figma Design Systems & Component Kits",
      "Editorial Art Direction & Layout Systems",
      "Interactive Prototyping & Motion Specs",
      "UX Architecture & User Flow Mapping",
      "3D Graphics & Custom Illustrations",
    ],
    subServices: [
      {
        id: "brand-identity",
        title: "Brand Identity & Visual Direction",
        badge: "Visual Identity",
        description: "Distinct logos, custom typography pairings, harmonious color palettes, and clear guidelines that set you apart from competitors.",
        features: ["Memorable logomark suites", "Clear typography hierarchies", "Complete digital & print guidelines", "Real-world mockup applications"],
      },
      {
        id: "design-systems-figma",
        title: "Scalable Figma Design Systems",
        badge: "Figma Components",
        description: "Reusable component libraries built with auto-layout and light/dark modes that engineers can easily translate into code.",
        features: ["Structured color & type tokens", "Complete button & input sets", "Dark & light mode variants", "Direct handoff documentation"],
      },
      {
        id: "ux-research-wireframes",
        title: "User Experience (UX) & Wireframes",
        badge: "User Research",
        description: "We map out user flows, simplify complex checkouts, and eliminate navigation confusion before any code is written.",
        features: ["Clickable interactive wireframes", "User flow diagrams", "Information architecture trees", "Usability testing audits"],
      },
      {
        id: "motion-micro-interactions",
        title: "Micro-Interactions & Motion Design",
        badge: "Motion & UI",
        description: "Subtle hover states, responsive button clicks, and smooth page transitions that make your app feel polished and premium.",
        features: ["Custom Lottie animations", "Tactile button feedback", "Scroll-triggered transitions", "Reduced-motion accessibility"],
      },
    ],
    metrics: { value: "3.4x", label: "Average Engagement Lift" },
    techStack: ["Figma", "Framer", "Rive", "Lottie", "Adobe After Effects", "Cinema 4D", "Blender"],
    image: "/images/service-branding.png",
  },
  {
    id: "ai-automation",
    number: "06",
    title: "Applied AI & Automation",
    category: "ARTIFICIAL INTELLIGENCE",
    tagline: "Practical AI systems that save your team dozens of hours every single week.",
    description:
      "We build custom AI pipelines that solve real operational bottlenecks. From private internal search (RAG) across your company docs to automated customer support agents and workflow automations that free up your team to do high-value work.",
    deliverables: [
      "Custom Fine-Tuned LLM Pipelines",
      "Autonomous Multi-Agent Systems",
      "Private Enterprise RAG Knowledge Search",
      "Real-Time Conversational Voice Bots",
      "Internal Business Workflow Automations",
      "Private & Secure On-Premise AI Setups",
    ],
    subServices: [
      {
        id: "custom-llms",
        title: "Custom LLMs & Prompt Engineering",
        badge: "Custom Models",
        description: "Tailor foundational models (Llama 3, Mistral, Claude, GPT-4) to your business domain with strict accuracy guardrails.",
        features: ["Zero-hallucination validation rules", "Domain-specific fine-tuning", "Fast response latency", "Cost-effective token usage"],
      },
      {
        id: "autonomous-agents",
        title: "Autonomous Multi-Agent Workflows",
        badge: "AI Agents",
        description: "AI agents that work in the background: researching, extracting data from emails, querying databases, and executing tasks.",
        features: ["Automated task execution", "Direct API & tool integrations", "Self-checking quality loops", "Human review checkpoints"],
      },
      {
        id: "enterprise-rag",
        title: "Private Document & Knowledge Search (RAG)",
        badge: "Vector Search",
        description: "Let your team search thousands of PDFs, manuals, Slack messages, and Notion docs in natural language with cited answers.",
        features: ["Sub-200ms semantic search", "Direct source citations", "Role-based document access", "Encrypted private vector database"],
      },
      {
        id: "voice-multimodal",
        title: "Conversational Voice Agents",
        badge: "Voice AI",
        description: "Natural-sounding voice bots that handle customer inquiries, qualify inbound leads, and answer questions over the phone.",
        features: ["Natural speech synthesis", "Sub-500ms voice response time", "Automatic appointment booking", "CRM sync (HubSpot, Salesforce)"],
      },
    ],
    metrics: { value: "85%", label: "Manual Workflow Time Saved" },
    techStack: ["Python", "PyTorch", "LangChain", "LangGraph", "OpenAI", "Anthropic Claude", "Pinecone", "Hugging Face"],
    image: "/images/service-ai.png",
  },
  {
    id: "growth-marketing",
    number: "07",
    title: "Growth Marketing & SEO",
    category: "GROWTH & ATTRIBUTION",
    tagline: "Data-backed SEO and conversion optimization that turn web traffic into revenue.",
    description:
      "We fix your technical SEO, optimize your conversion funnels, and build targeted acquisition loops. No vanity metrics. Just clear customer acquisition and steady organic traffic.",
    deliverables: [
      "Technical & Semantic SEO Architecture",
      "Conversion Rate Optimization (CRO)",
      "High-ROI Paid Performance Ad Campaigns",
      "Automated Lifecycle & Email Klaviyo Flows",
      "Multi-Touch Analytics & Attribution Tracking",
      "High-Impact Product Launch Campaigns",
    ],
    subServices: [
      {
        id: "semantic-seo",
        title: "Technical & Semantic SEO",
        badge: "Organic Search",
        description: "Fix crawl errors, implement rich JSON-LD schema, and build programmatic content that ranks for high-intent search queries.",
        features: ["Structured data & schema markup", "Sub-second page speed boost", "Programmatic landing pages", "Keyword research & strategy"],
      },
      {
        id: "cro-funnels",
        title: "Conversion Rate Optimization (CRO)",
        badge: "Split Testing",
        description: "We analyze heatmap recordings, test new headlines and checkout steps, and systematically raise your site's conversion rate.",
        features: ["Data-backed A/B split tests", "Heatmap & user session analysis", "Checkout leak fixes", "High-converting human copy"],
      },
      {
        id: "paid-media",
        title: "Paid Ads & Performance Marketing",
        badge: "Google & Meta Ads",
        description: "Run profitable ad campaigns on Google, Meta, and LinkedIn with continuous creative testing and first-party conversion tracking.",
        features: ["Meta & Google Conversion API", "Relentless creative ad testing", "Retargeting funnel architecture", "Transparent ROI reporting"],
      },
      {
        id: "lifecycle-email",
        title: "Email Marketing & Customer Retention",
        badge: "Klaviyo & Email",
        description: "Automated email sequences that welcome new subscribers, recover abandoned carts, and re-engage past buyers automatically.",
        features: ["Abandoned cart recovery flows", "Post-purchase thank you email series", "Customer segmentation & loyalty", "High-deliverability domain setup"],
      },
    ],
    metrics: { value: "+148%", label: "Average Year-One ARR Growth" },
    techStack: ["Google Analytics 4", "Mixpanel", "Klaviyo", "Meta Ads", "Google Ads", "Semrush", "PostHog"],
    image: "/images/service-growth.png",
  },
  {
    id: "cloud-devops",
    number: "08",
    title: "Cloud Infrastructure & DevOps",
    category: "INFRASTRUCTURE",
    tagline: "Reliable cloud hosting that keeps your app running fast when traffic spikes.",
    description:
      "We design resilient, secure cloud infrastructure using AWS, Cloudflare, and Docker. Automated deployments, zero-downtime releases, global edge caching, and 24/7 monitoring so you never have to worry about a crash.",
    deliverables: [
      "AWS & Cloudflare Edge Hosting Architecture",
      "Docker Containerization & Kubernetes",
      "Automated GitHub Actions CI/CD Pipelines",
      "Global Edge Caching & Content Delivery",
      "Cloudflare Enterprise Security & WAF",
      "24/7 Uptime & Error Monitoring (Sentry/Datadog)",
    ],
    subServices: [
      {
        id: "edge-infrastructure",
        title: "AWS & Cloudflare Edge Hosting",
        badge: "Cloudflare & AWS",
        description: "Host your web app on a global serverless network where code executes within 15ms of users anywhere in the world.",
        features: ["Sub-15ms edge response times", "Instant serverless auto-scaling", "Zero cold starts", "Multi-region automatic failover"],
      },
      {
        id: "cicd-automation",
        title: "Automated CI/CD Deployment Pipelines",
        badge: "GitHub Actions",
        description: "Deploy new code safely in seconds. Every pull request gets an automated preview URL, unit testing, and instant rollback.",
        features: ["Zero-downtime production deploys", "Automated code preview URLs", "Automated test suites", "One-click instant rollback"],
      },
      {
        id: "docker-kubernetes",
        title: "Docker & Kubernetes Clusters",
        badge: "Containerization",
        description: "Package your applications into lightweight Docker containers that automatically scale up when traffic spikes.",
        features: ["Automatic resource autoscaling", "Self-healing containers", "Isolated testing environments", "Optimized cloud server costs"],
      },
      {
        id: "cybersecurity-soc2",
        title: "Security, DDoS Protection & Backups",
        badge: "Zero-Trust Security",
        description: "Protect your customer data and prevent site downtime with enterprise web firewalls, automated daily backups, and SSL/TLS.",
        features: ["Enterprise Cloudflare WAF", "Automated DDoS mitigation", "Daily automated encrypted backups", "SOC2 compliance guidance"],
      },
    ],
    metrics: { value: "99.99%", label: "Uptime SLA Benchmark" },
    techStack: ["AWS", "Cloudflare", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "PostgreSQL", "Datadog"],
    image: "/images/service-cloud.png",
  },
];
