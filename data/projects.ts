import { demoProjectsData } from "./demo-projects";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectItem {
  slug: string;
  aliases?: string[];
  number: string;
  name: string;
  client: string;
  category: string;
  year: string;
  headline: string;
  overview: string;
  challenge: string;
  solution: string;
  metrics: ProjectMetric[];
  heroImage: string;
  gallery: string[];
  techStack: string[];
  nextSlug: string;
  nextName: string;
  liveUrl?: string;
  projectType?: "demo";
}

const clientProjectsData: ProjectItem[] = [
  {
    slug: "paynex-terminal",
    aliases: ["kronos-terminal"],
    number: "01",
    name: "Paynex Terminal",
    client: "Paynex Financial Technologies",
    category: "Fintech & Web Development",
    year: "2024",
    headline: "High-frequency algorithmic trading visualization and financial operations terminal.",
    overview:
      "Paynex needed an ultra-responsive web interface capable of streaming live market transactions and portfolio risks without dropping frames.",
    challenge:
      "Traditional dashboards choke when ingesting gigabytes of raw WebSocket market data. The team needed 120fps charting, real-time risk heatmaps, and a clean dark theme that reduced eye strain.",
    solution:
      "We engineered a custom WebGL-accelerated canvas renderer paired with Next.js, worker threads for off-thread calculations, and a high-contrast typographic hierarchy.",
    metrics: [
      { value: "0.8ms", label: "Render Tick Latency" },
      { value: "14.2M", label: "Concurrent Transactions/Sec" },
      { value: "+62%", label: "Decision Velocity Lift" },
      { value: "0.00%", label: "Frame Drops Under Peak Load" },
    ],
    heroImage: "/images/Sleek Paynex Fintech Dashboard Showcase.png",
    gallery: [
      "/images/Sleek Paynex Fintech Dashboard Showcase.png",
      "/images/service-web.png",
      "/images/service-cloud.png",
    ],
    techStack: ["Next.js 15", "WebGL Shaders", "TypeScript", "Tailwind CSS", "WebSockets"],
    nextSlug: "drivego-mobility",
    nextName: "DriveGo Mobility",
    liveUrl: "https://paynex.incorelab.demo",
  },
  {
    slug: "drivego-mobility",
    aliases: ["apex-drive"],
    number: "02",
    name: "DriveGo Mobility",
    client: "DriveGo Luxury Fleet Group",
    category: "Rental Car Web & Mobile App",
    year: "2024",
    headline: "Luxury car rental engine with keyless Bluetooth mobile access and instant identity checks.",
    overview:
      "DriveGo operates an exclusive fleet of luxury sports cars and SUVs in Dubai and Zurich. They needed a high-converting booking engine alongside an iOS and Android app for keyless pickup.",
    challenge:
      "Legacy car rental systems relied on physical paperwork and manual deposits that caused long queues and dropped bookings among VIP travelers.",
    solution:
      "We built a headless Next.js booking engine with instant Apple Pay and Stripe identity verification, plus a React Native app enabling customers to unlock their vehicle via Bluetooth BLE.",
    metrics: [
      { value: "+312%", label: "Online Direct Bookings" },
      { value: "48 sec", label: "Average Time to Reserve" },
      { value: "99.8%", label: "Keyless Entry Reliability" },
      { value: "$4.8M", label: "Monthly Gross Rental Volume" },
    ],
    heroImage: "/images/DriveGo Car Rental App Showcase.png",
    gallery: [
      "/images/DriveGo Car Rental App Showcase.png",
      "/images/service-mobile.png",
      "/images/service-ecommerce.png",
    ],
    techStack: ["React Native", "Next.js 15", "Bluetooth BLE", "Stripe Identity", "Tailwind CSS"],
    nextSlug: "proerp-suite",
    nextName: "ProERP Enterprise Suite",
    liveUrl: "https://drivego.incorelab.demo",
  },
  {
    slug: "proerp-suite",
    aliases: ["omnicore-erp"],
    number: "03",
    name: "ProERP Enterprise Suite",
    client: "ProERP Manufacturing & Logistics",
    category: "Enterprise ERP Dashboard",
    year: "2024",
    headline: "Global cloud ERP dashboard orchestrating supply chains and automated general ledgers.",
    overview:
      "ProERP manages 12 global distribution hubs and quarterly procurement across Europe and the Gulf. They needed a unified real-time dashboard replacing fragmented legacy tools.",
    challenge:
      "Separate data silos across SAP, Oracle, and local warehouse databases caused delayed purchase order approvals and costly inventory stockouts.",
    solution:
      "We built a multi-tenant cloud ERP platform with live MQTT telemetry, role-based access control, automated procurement approvals, and real-time cash flow forecasting.",
    metrics: [
      { value: "-44%", label: "Procurement Cycle Time" },
      { value: "$2.8M", label: "Inventory Holding Cost Saved" },
      { value: "12 Hubs", label: "Real-Time Synchronized" },
      { value: "99.99%", label: "Enterprise Cloud Uptime" },
    ],
    heroImage: "/images/ProERP Enterprise Dashboard Suite.png",
    gallery: [
      "/images/ProERP Enterprise Dashboard Suite.png",
      "/images/service-cloud.png",
      "/images/service-web.png",
    ],
    techStack: ["Next.js 15 App Router", "PostgreSQL", "Docker", "MQTT", "TypeScript"],
    nextSlug: "flowai-automation",
    nextName: "FlowAI Intelligence",
    liveUrl: "https://proerp.incorelab.demo",
  },
  {
    slug: "flowai-automation",
    aliases: ["automata-n8n"],
    number: "04",
    name: "FlowAI Intelligence",
    client: "FlowAI Systems AG",
    category: "Applied AI & Workflow Pipelines",
    year: "2024",
    headline: "Autonomous multi-agent workflow pipeline powered by n8n and Claude 3.5 Sonnet.",
    overview:
      "FlowAI wanted to eliminate manual operations by connecting HubSpot, Stripe, PostgreSQL, and Slack through self-healing, event-driven AI pipelines running round the clock.",
    challenge:
      "Standard Zapier tools hit rate limits, lacked contextual understanding of client documents, and could not route high-ticket enterprise inquiries dynamically.",
    solution:
      "We architected an enterprise n8n workflow cluster integrated with local vector embeddings and Claude 3.5 Sonnet, automating lead qualification, contract drafting, and dispatching in 320ms.",
    metrics: [
      { value: "42,000+", label: "Monthly Autonomous Executions" },
      { value: "320ms", label: "Average Pipeline Latency" },
      { value: "99.98%", label: "Workflow Reliability Rate" },
      { value: "18 hrs/wk", label: "Executive Hours Reclaimed" },
    ],
    heroImage: "/images/FlowAI AI Automation Dashboard.png",
    gallery: [
      "/images/FlowAI AI Automation Dashboard.png",
      "/images/service-ai.png",
      "/images/service-cloud.png",
    ],
    techStack: ["n8n Enterprise", "Claude 3.5 Sonnet", "PostgreSQL pgvector", "Docker", "Webhooks"],
    nextSlug: "nexa-architecture",
    nextName: "NEXA Architecture",
    liveUrl: "https://flowai.incorelab.demo",
  },
  {
    slug: "nexa-architecture",
    aliases: ["aura-architects"],
    number: "05",
    name: "NEXA Architecture",
    client: "NEXA Spatial Design Studio",
    category: "Architecture & Brand Identity",
    year: "2024",
    headline: "Monolithic physical spaces translated into an editorial digital monograph.",
    overview:
      "NEXA is an architectural practice whose works balance raw stone and natural light. Their digital presence had to reflect that quiet monumentality with Swiss precision.",
    challenge:
      "The client wanted to avoid standard portfolio templates, requiring full-bleed pacing, smooth horizontal scroll mechanics, and light and dark transitions that adapt to daylight.",
    solution:
      "We designed an editorial monograph experience with custom Lenis inertial scrolling, dynamic elevation blueprints, and a curated palette of stone and deep obsidian.",
    metrics: [
      { value: "4m 12s", label: "Average Session Duration" },
      { value: "3x", label: "International Press Inquiries" },
      { value: "100/100", label: "Lighthouse Performance" },
      { value: "2", label: "Design of the Day Honors" },
    ],
    heroImage: "/images/NEXA Architecture Brand Showcase.png",
    gallery: [
      "/images/NEXA Architecture Brand Showcase.png",
      "/images/service-branding.png",
      "/images/service-web.png",
    ],
    techStack: ["Next.js 15", "Lenis", "Framer Motion", "Tailwind CSS", "TypeScript"],
    nextSlug: "pixelforge-3d",
    nextName: "PixelForge 3D Interactive",
    liveUrl: "https://nexa.incorelab.demo",
  },
  {
    slug: "pixelforge-3d",
    aliases: ["velocity-labs"],
    number: "06",
    name: "PixelForge 3D Interactive",
    client: "PixelForge Gaming Studio",
    category: "Game Dev & 3D WebGL",
    year: "2024",
    headline: "Real-time 3D vehicle configurator and interactive game asset showcase.",
    overview:
      "PixelForge produces custom interactive game worlds and hypercar assets. We built an in-browser 3D configurator allowing collectors to inspect aerodynamics and customize textures.",
    challenge:
      "Rendering photorealistic automotive paint, clear-coat reflections, and carbon weaves directly in a mobile web browser without long loading times or battery drain.",
    solution:
      "We developed a tailored Three.js pipeline with PBR materials, progressive mesh decimation, and custom Fresnel shaders that adapt to the device GPU tier in real time.",
    metrics: [
      { value: "$42M", label: "Configured Pre-Orders" },
      { value: "1.2s", label: "Interactive Model Load Time" },
      { value: "78%", label: "Mobile Completion Rate" },
      { value: "60fps", label: "Smooth Interaction on Mobile" },
    ],
    heroImage: "/images/PixelForge 3D Gaming Showcase.png",
    gallery: [
      "/images/PixelForge 3D Gaming Showcase.png",
      "/images/service-game.png",
      "/images/service-mobile.png",
    ],
    techStack: ["Three.js", "WebGL", "Next.js 15", "GLSL Shaders", "Tailwind CSS"],
    nextSlug: "soundai-studio",
    nextName: "SoundAI Audio Studio",
    liveUrl: "https://pixelforge.incorelab.demo",
  },
  {
    slug: "soundai-studio",
    aliases: ["synthesis-audio"],
    number: "07",
    name: "SoundAI Audio Studio",
    client: "SoundAI Acoustic Research",
    category: "AI & Audio Engineering",
    year: "2023",
    headline: "Generative spatial audio synthesis engine and cloud DAW interface.",
    overview:
      "SoundAI develops binaural audio engines for film scoring and interactive computing. Incorelab designed their entire cloud DAW interface and visual brand identity.",
    challenge:
      "Synthesizing high-density audio parameters (envelopes, impulse response models, 3D spatial coordinates) into an intuitive, uncluttered workspace.",
    solution:
      "We built a tactile UI system featuring fluid waveform visualizers, rotary analog knobs, and a real-time 20-band FFT spectrum analyzer that makes sound design feel like physical sculpture.",
    metrics: [
      { value: "210k+", label: "Active Producers Onboarded" },
      { value: "99.4%", label: "DAW Uptime Reliability" },
      { value: "4.9/5", label: "Creator Community Rating" },
      { value: "180+", label: "Award Nominations" },
    ],
    heroImage: "/images/SoundAI Audio Studio Showcase.png",
    gallery: [
      "/images/SoundAI Audio Studio Showcase.png",
      "/images/service-ai.png",
      "/images/service-web.png",
    ],
    techStack: ["Web Audio API", "Next.js", "TypeScript", "Canvas 2D", "Tailwind CSS"],
    nextSlug: "shopcore-commerce",
    nextName: "ShopCore Headless Commerce",
    liveUrl: "https://soundai.incorelab.demo",
  },
  {
    slug: "shopcore-commerce",
    aliases: ["lumen-botanicals"],
    number: "08",
    name: "ShopCore Headless Commerce",
    client: "ShopCore Retail Group",
    category: "Headless E-Commerce",
    year: "2023",
    headline: "High-conversion headless Shopify Plus storefront with sub-second page loads.",
    overview:
      "ShopCore produces premium direct-to-consumer goods. They required an e-commerce flagship conveying brand craftsmanship while maximizing checkout speed.",
    challenge:
      "Replacing standard off-the-shelf Shopify templates with a custom layout that taught customers about product details while boosting cart conversions.",
    solution:
      "A headless Next.js storefront powered by Shopify Storefront API, animated ingredient breakdowns, and an interactive product discovery tool.",
    metrics: [
      { value: "+214%", label: "Direct-to-Consumer GMV" },
      { value: "4.8%", label: "Average E-Comm Conversion Rate" },
      { value: "+38%", label: "Average Order Value (AOV)" },
      { value: "450ms", label: "Global Page Route Transition" },
    ],
    heroImage: "/images/ShopCore Headless Commerce Showcase.png",
    gallery: [
      "/images/ShopCore Headless Commerce Showcase.png",
      "/images/service-ecommerce.png",
      "/images/service-web.png",
    ],
    techStack: ["Next.js App Router", "Shopify Storefront GraphQL", "Framer Motion", "Tailwind CSS"],
    nextSlug: "capitalflow-fintech",
    nextName: "CapitalFlow Ventures",
    liveUrl: "https://shopcore.incorelab.demo",
  },
  {
    slug: "capitalflow-fintech",
    aliases: ["strata-capital"],
    number: "09",
    name: "CapitalFlow Ventures",
    client: "CapitalFlow Global Ventures",
    category: "Venture Capital & FinTech",
    year: "2023",
    headline: "Institutional fintech dashboard and digital asset management intelligence.",
    overview:
      "CapitalFlow manages institutional allocations across clean fusion, computing infrastructure, and deep tech. We designed their brand identity and interactive investor briefing.",
    challenge:
      "Transforming dense institutional whitepapers into an engaging digital briefing that investors and founders could explore with ease on desktop and mobile.",
    solution:
      "We created an interactive data journalism platform with live financial infographics, chaptered kinetic typography, and secure gated investor rooms.",
    metrics: [
      { value: "$1.8B", label: "Assets Under Strategic Advisory" },
      { value: "88%", label: "Digital Engagement Rate" },
      { value: "14", label: "Global Sovereign Partners" },
      { value: "Top 1%", label: "Brand Recognition" },
    ],
    heroImage: "/images/CapitalFlow Fintech Dashboard Showcase.png",
    gallery: [
      "/images/CapitalFlow Fintech Dashboard Showcase.png",
      "/images/service-cloud.png",
      "/images/service-growth.png",
    ],
    techStack: ["Next.js 15", "TypeScript", "D3.js & SVG", "Tailwind CSS", "Framer Motion"],
    nextSlug: "helvetia-prime",
    nextName: "Helvetia Prime Real Estate",
    liveUrl: "https://capitalflow.incorelab.demo",
  },
  {
    slug: "helvetia-prime",
    number: "10",
    name: "Helvetia Prime Real Estate",
    client: "Helvetia Asset Management",
    category: "Real Estate & FinTech Portal",
    year: "2024",
    headline: "Luxury property marketplace with automated rental yield distributions and 3D floorplans.",
    overview:
      "Helvetia tokenizes prime residential penthouses in Zurich and Dubai, allowing accredited global investors to acquire fractional ownership starting at $50,000.",
    challenge:
      "Traditional real estate transactions suffer from weeks of notary delays and lack transparent secondary liquidity for international buyers.",
    solution:
      "We engineered an institutional investment portal featuring interactive 3D floorplan tours, automated dividend distributions, and Swiss FINMA-compliant onboarding.",
    metrics: [
      { value: "CHF 64M", label: "Total Assets Managed" },
      { value: "8.4%", label: "Average Net Annual APY" },
      { value: "1,400+", label: "Verified International LPs" },
      { value: "3 mins", label: "Complete Investor KYC Time" },
    ],
    heroImage: "/images/Helvetia Prime Real Estate Showcase.png",
    gallery: [
      "/images/Helvetia Prime Real Estate Showcase.png",
      "/images/service-web.png",
      "/images/service-branding.png",
    ],
    techStack: ["Next.js 15", "Tailwind CSS", "PostgreSQL", "Three.js 3D", "TypeScript"],
    nextSlug: "medicare-telehealth",
    nextName: "MediCare+ Telehealth",
    liveUrl: "https://helvetia.incorelab.demo",
  },
  {
    slug: "medicare-telehealth",
    aliases: ["pulsecare-health"],
    number: "11",
    name: "MediCare+ Telehealth",
    client: "MediCare+ Health Network",
    category: "Healthcare & Mobile Telemedicine",
    year: "2024",
    headline: "Encrypted clinical telemedicine portal with electronic health records.",
    overview:
      "MediCare+ connects patients with specialized European physicians via low-latency encrypted video consultations and automated digital pharmacy prescriptions.",
    challenge:
      "Handling sensitive patient health information requires strict regulatory compliance, zero data leaks, and clear WebRTC audio and video across low-bandwidth mobile networks.",
    solution:
      "We designed an accessible, high-contrast healthcare platform with peer-to-peer WebRTC video, real-time vitals monitoring, and instant electronic prescription delivery.",
    metrics: [
      { value: "2.4M+", label: "Completed Virtual Consultations" },
      { value: "99.99%", label: "HIPAA / GDPR Compliance Audit" },
      { value: "4.9/5", label: "Patient Satisfaction Score" },
      { value: "-60%", label: "Clinic Administrative Overhead" },
    ],
    heroImage: "/images/MediCare+ Telemedicine Dashboard Showcase.png",
    gallery: [
      "/images/MediCare+ Telemedicine Dashboard Showcase.png",
      "/images/service-mobile.png",
      "/images/service-cloud.png",
    ],
    techStack: ["React Native", "WebRTC", "Next.js", "Node.js", "Docker"],
    nextSlug: "monolith-horology",
    nextName: "Monolith Horology",
    liveUrl: "https://medicare.incorelab.demo",
  },
  {
    slug: "monolith-horology",
    number: "12",
    name: "Monolith Horology",
    client: "Monolith Genève",
    category: "Luxury E-Commerce & Timepieces",
    year: "2024",
    headline: "Tamper-proof digital vault and showroom for rare haute horlogerie timepieces.",
    overview:
      "Monolith specializes in high-value vintage watches. We built a cryptographic provenance vault and private collector showroom with macro timepiece inspection.",
    challenge:
      "High-value horology collectors demand indisputable authenticity verification and insured, secure escrow payments before committing capital.",
    solution:
      "We developed an encrypted digital passport paired with tamper-proof physical NFC watch tags, allowing collectors to verify factory service records and ownership.",
    metrics: [
      { value: "CHF 120M+", label: "Curated Timepiece Inventory" },
      { value: "100%", label: "Counterfeit Detection Rate" },
      { value: "+180%", label: "Private Showroom Inquiries" },
      { value: "Zero", label: "Escrow Disputes Since Launch" },
    ],
    heroImage: "/images/Monolith Horology Luxury Showcase.png",
    gallery: [
      "/images/Monolith Horology Luxury Showcase.png",
      "/images/service-ecommerce.png",
      "/images/service-branding.png",
    ],
    techStack: ["Next.js 15", "Shopify Plus", "NFC Web API", "Tailwind CSS", "Framer Motion"],
    nextSlug: "luxury-aerojet",
    nextName: "Luxury AeroJet Charter",
    liveUrl: "https://monolith.incorelab.demo",
  },
  {
    slug: "luxury-aerojet",
    aliases: ["aerojet-charter"],
    number: "13",
    name: "Luxury AeroJet Charter",
    client: "AeroJet International",
    category: "Aviation & Booking Platform",
    year: "2024",
    headline: "On-demand private aviation booking engine with real-time ADS-B radar flight tracking.",
    overview:
      "AeroJet operates a global charter fleet of Gulfstream and Bombardier aircraft. We built a bespoke booking platform that maps empty-leg flights and generates instant quotes.",
    challenge:
      "Private jet booking has historically relied on slow broker phone calls with unpredictable pricing and opaque aircraft availability.",
    solution:
      "We built a real-time aviation platform integrated with live ADS-B radar feeds, empty-leg flight deal matching, and instant digital charter contracts.",
    metrics: [
      { value: "< 2 mins", label: "Instant Flight Quote Generation" },
      { value: "+340%", label: "Empty-Leg Route Monetization" },
      { value: "850+", label: "Charter Flights Booked" },
      { value: "$38M", label: "Annual Charter Gross Revenue" },
    ],
    heroImage: "/images/Luxury AeroJet Charter Interface.png",
    gallery: [
      "/images/Luxury AeroJet Charter Interface.png",
      "/images/service-web.png",
      "/images/service-mobile.png",
    ],
    techStack: ["Next.js 15", "ADS-B Radar API", "Stripe Enterprise", "Mapbox GL", "Tailwind CSS"],
    nextSlug: "voltfleet-logistics",
    nextName: "VoltFleet Logistics",
    liveUrl: "https://aerojet.incorelab.demo",
  },
  {
    slug: "voltfleet-logistics",
    number: "14",
    name: "VoltFleet Logistics",
    client: "Volt Fleet Europe",
    category: "SaaS Dashboard & Fleet Logistics",
    year: "2024",
    headline: "Commercial electric delivery control tower optimizing commercial vans in real time.",
    overview:
      "Volt manages commercial EV parcel deliveries across major European capitals. We engineered their real-time dispatch dashboard and driver turn-by-turn mobile app.",
    challenge:
      "Managing EV range anxiety, dynamic battery charging schedules, and unpredictable inner-city delivery traffic required millisecond route optimization.",
    solution:
      "We engineered a telematics control tower utilizing graph algorithms for automated route dispatching, battery degradation analytics, and instant driver re-routing.",
    metrics: [
      { value: "-22%", label: "Total Route Driving Time" },
      { value: "4,500+", label: "Active Electric Vans Dispatched" },
      { value: "-34%", label: "Fleet Energy Consumption" },
      { value: "99.9%", label: "On-Time Delivery SLA" },
    ],
    heroImage: "/images/VoltFleet Fleet Dashboard Showcase.png",
    gallery: [
      "/images/VoltFleet Fleet Dashboard Showcase.png",
      "/images/service-cloud.png",
      "/images/service-mobile.png",
    ],
    techStack: ["Next.js 15", "React Native", "PostGIS", "WebSockets", "Go Microservices"],
    nextSlug: "paynex-terminal",
    nextName: "Paynex Terminal",
    liveUrl: "https://voltfleet.incorelab.demo",
  },
];

export const projectsData: ProjectItem[] = [...demoProjectsData, ...clientProjectsData];
