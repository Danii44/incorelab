const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

function createSVG(title, subtitle, accentColor, category, visualSvg) {
  const safeId = title.replace(/[^a-zA-Z0-9]/g, '');
  const cleanVisual = visualSvg.replace(/&(?!(amp|lt|gt|quot|apos);)/g, '&amp;');
  const cleanTitle = title.replace(/&(?!(amp|lt|gt|quot|apos);)/g, '&amp;');
  const cleanSubtitle = subtitle.replace(/&(?!(amp|lt|gt|quot|apos);)/g, '&amp;');
  const cleanCat = category.replace(/&(?!(amp|lt|gt|quot|apos);)/g, '&amp;');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
  <defs>
    <radialGradient id="bgGlow_${safeId}" cx="50%" cy="40%" r="75%">
      <stop offset="0%" stop-color="#16161C" stop-opacity="1" />
      <stop offset="60%" stop-color="#101014" stop-opacity="1" />
      <stop offset="100%" stop-color="#09090C" stop-opacity="1" />
    </radialGradient>
    <radialGradient id="spotlight_${safeId}" cx="60%" cy="35%" r="50%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.16" />
      <stop offset="100%" stop-color="${accentColor}" stop-opacity="0" />
    </radialGradient>
    <pattern id="gridPattern_${safeId}" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#23232A" stroke-width="0.7" stroke-opacity="0.6" />
    </pattern>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgGlow_${safeId})" />
  <rect width="100%" height="100%" fill="url(#gridPattern_${safeId})" />
  <rect width="100%" height="100%" fill="url(#spotlight_${safeId})" />

  <!-- Outer Swiss Editorial Precision Border -->
  <rect x="30" y="30" width="1540" height="940" fill="none" stroke="#26262E" stroke-width="1" />
  
  <!-- Corner Calibration Marks -->
  <g stroke="${accentColor}" stroke-width="1.5">
    <path d="M 22 30 L 38 30 M 30 22 L 30 38" />
    <path d="M 1562 30 L 1578 30 M 1570 22 L 1570 38" />
    <path d="M 22 970 L 38 970 M 30 962 L 30 978" />
    <path d="M 1562 970 L 1578 970 M 1570 962 L 1570 978" />
  </g>

  <!-- Header Metadata -->
  <text x="64" y="70" font-family="'JetBrains Mono', monospace, sans-serif" font-size="12" fill="${accentColor}" letter-spacing="3" font-weight="700">INCORELAB // PRODUCTION ARCHITECTURE</text>
  <text x="1536" y="70" font-family="'JetBrains Mono', monospace, sans-serif" font-size="12" fill="#7E7E86" letter-spacing="3" text-anchor="end" font-weight="600">${cleanCat}</text>

  <!-- Main Viewport Area -->
  <g transform="translate(64, 96)">
    ${cleanVisual}
  </g>

  <!-- Bottom Caption Bar -->
  <line x1="30" y1="910" x2="1570" y2="910" stroke="#26262E" stroke-width="1" />
  <text x="64" y="948" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="#F4F2EB" font-weight="700" letter-spacing="-0.5">${cleanTitle}</text>
  <text x="1536" y="948" font-family="'JetBrains Mono', monospace, sans-serif" font-size="13" fill="#8E8E96" letter-spacing="2" text-anchor="end">${cleanSubtitle}</text>
</svg>`;
}

// =========================================================================
// BESPOKE SERVICES VISUALS (Distinct, Proper & Tailored to Each Service)
// =========================================================================

// SERVICE 1: Web Development Architecture (Next.js 15, Turbopack, SSR, Edge)
const serviceWebVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#111116" stroke="#262632" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">NEXT.JS 15 ENTERPRISE WEB ARCHITECTURE</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#C6F432" text-anchor="end">TURBOPACK • 0.35s FCP • 100/100 LIGHTHOUSE</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#20202A" />

    <!-- Left: Code IDE & Component Hierarchy -->
    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="700" height="650" rx="10" fill="#14141C" stroke="#262634" />
      <rect x="0" y="0" width="700" height="40" rx="10" fill="#1B1B26" />
      <circle cx="24" cy="20" r="5" fill="#FF5F56" />
      <circle cx="40" cy="20" r="5" fill="#FFBD2E" />
      <circle cx="56" cy="20" r="5" fill="#27C93F" />
      <text x="80" y="24" font-family="monospace" font-size="11" fill="#8E8E96">app/page.tsx (React 19 Server Component)</text>
      
      <g transform="translate(30, 70)" font-family="monospace" font-size="13">
        <text x="0" y="0" fill="#C6F432">import { Suspense } from &apos;react&apos;;</text>
        <text x="0" y="30" fill="#C6F432">import { EdgeStream } from &apos;@/lib/edge&apos;;</text>
        <text x="0" y="70" fill="#8E8E96">// High-throughput Server Component pipeline</text>
        <text x="0" y="100" fill="#5B8DEF">export default async function Page() {</text>
        <text x="24" y="130" fill="#F4F2EB">  const data = await fetchEdgeTelemetry();</text>
        <text x="24" y="160" fill="#5B8DEF">  return (</text>
        <text x="48" y="190" fill="#FF5A1F">    &lt;main className=&quot;relative min-h-screen&quot;&gt;</text>
        <text x="72" y="220" fill="#F4F2EB">      &lt;Suspense fallback={&lt;Skeleton /&gt;}&gt;</text>
        <text x="96" y="250" fill="#C6F432">        &lt;LiveStreamFeed data={data} /&gt;</text>
        <text x="72" y="280" fill="#F4F2EB">      &lt;/Suspense&gt;</text>
        <text x="48" y="310" fill="#FF5A1F">    &lt;/main&gt;</text>
        <text x="24" y="340" fill="#5B8DEF">  );</text>
        <text x="0" y="370" fill="#5B8DEF">}</text>
      </g>

      <rect x="30" y="480" width="640" height="135" rx="8" fill="#0C0C12" stroke="#22222E" />
      <text x="50" y="510" font-family="monospace" font-size="11" fill="#8E8E96">TURBOPACK COMPILE STREAM</text>
      <text x="50" y="540" font-family="monospace" font-size="12" fill="#C6F432">✓ Compiled client and server in 42ms (ready in 0.28s)</text>
      <text x="50" y="570" font-family="monospace" font-size="12" fill="#5B8DEF">✓ 100% Type Safe (0 errors) • TypeScript 5.5 Strict</text>
      <text x="50" y="600" font-family="monospace" font-size="12" fill="#F4F2EB">✓ Core Web Vitals: LCP 0.38s | FID 2ms | CLS 0.000</text>
    </g>

    <!-- Right: High-Res Responsive Browser Window Viewport -->
    <g transform="translate(770, 85)">
      <rect x="0" y="0" width="662" height="650" rx="10" fill="#14141C" stroke="#262634" />
      <rect x="0" y="0" width="662" height="40" rx="10" fill="#1B1B26" />
      <text x="30" y="24" font-family="monospace" font-size="11" fill="#C6F432">LIVE RENDER VIEWPORT</text>
      <text x="632" y="24" font-family="monospace" font-size="11" fill="#8E8E96" text-anchor="end">120 FPS</text>
      
      <!-- Hero Header Preview Inside Browser -->
      <g transform="translate(30, 60)">
        <rect x="0" y="0" width="602" height="260" rx="8" fill="#181822" stroke="#2E2E3E" />
        <text x="30" y="60" font-family="sans-serif" font-size="34" fill="#F4F2EB" font-weight="900" letter-spacing="-1">WE BUILD</text>
        <text x="30" y="105" font-family="sans-serif" font-size="34" fill="#C6F432" font-weight="900" letter-spacing="-1">WHAT&apos;S NEXT.</text>
        <rect x="30" y="130" width="160" height="38" rx="19" fill="#C6F432" />
        <text x="110" y="154" font-family="sans-serif" font-size="12" fill="#0E0E12" font-weight="800" text-anchor="middle">DISCOVER WORK →</text>
      </g>

      <!-- WebGL Shader Interactive Canvas Preview -->
      <g transform="translate(30, 345)">
        <rect x="0" y="0" width="602" height="270" rx="8" fill="#0F0F14" stroke="#2A2A3A" />
        <circle cx="301" cy="135" r="95" fill="none" stroke="#C6F432" stroke-width="2" stroke-dasharray="8 6" />
        <circle cx="301" cy="135" r="60" fill="#1B1B26" stroke="#5B8DEF" stroke-width="2" />
        <text x="301" y="140" font-family="monospace" font-size="11" fill="#F4F2EB" text-anchor="middle">GPU SHADER CORE</text>
      </g>
    </g>
  </g>
`;

// SERVICE 2: E-Commerce Engineering (Shopify Plus, Hydrogen, 1-Click Buy)
const serviceEcommerceVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#111116" stroke="#2A221C" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">HEADLESS E-COMMERCE &amp; SHOPIFY PLUS STOREFRONT</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#FF5A1F" text-anchor="end">HYDROGEN • STRIPE 1-CLICK • +42% AOV LIFT</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#261E18" />

    <!-- Left: Luxury Product Display with 3D Variant Configurator -->
    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="860" height="650" rx="10" fill="#171518" stroke="#2E2420" />
      <g transform="translate(430, 260)">
        <ellipse cx="0" cy="180" rx="110" ry="24" fill="#000000" fill-opacity="0.6" />
        <rect x="-60" y="-30" width="120" height="190" rx="18" fill="#4A2610" stroke="#D97706" stroke-width="2" />
        <rect x="-50" y="30" width="100" height="100" rx="4" fill="#F4F2EB" />
        <text x="0" y="60" font-family="sans-serif" font-size="12" fill="#0E0E12" font-weight="900" text-anchor="middle">ATELIER</text>
        <text x="0" y="80" font-family="monospace" font-size="8" fill="#4B5563" text-anchor="middle">BOTANICAL EXTRACT</text>
        <text x="0" y="105" font-family="monospace" font-size="9" fill="#0E0E12" font-weight="700" text-anchor="middle">50 ML / CHF 185</text>
      </g>
      <rect x="40" y="40" width="240" height="100" rx="8" fill="#121114" stroke="#2E2420" />
      <text x="60" y="70" font-family="sans-serif" font-size="15" fill="#F4F2EB" font-weight="700">CELLULAR RECOVERY</text>
      <text x="60" y="92" font-family="monospace" font-size="11" fill="#C6F432">98.4% BIO-ACTIVE</text>
      <text x="60" y="114" font-family="monospace" font-size="11" fill="#8E8E96">SWISS HIGH-ALPINE FORMULA</text>
    </g>

    <!-- Right: Instant Drawer Checkout & Conversion Optimization -->
    <g transform="translate(930, 85)">
      <rect x="0" y="0" width="502" height="650" rx="10" fill="#16151A" stroke="#2E2420" />
      <text x="32" y="40" font-family="sans-serif" font-size="18" fill="#F4F2EB" font-weight="800">PURCHASE RITUAL DRAWER</text>
      <text x="32" y="65" font-family="monospace" font-size="11" fill="#8E8E96">GLOBAL PRIORITY EXPRESS DISPATCH</text>
      <line x1="32" y1="85" x2="470" y2="85" stroke="#2E2420" />

      <rect x="32" y="110" width="438" height="120" rx="8" fill="#1D1A20" stroke="#382C24" />
      <text x="50" y="145" font-family="sans-serif" font-size="15" fill="#F4F2EB" font-weight="700">Cellular Active Botanical Serum</text>
      <text x="50" y="170" font-family="monospace" font-size="12" fill="#8E8E96">Quantity: 1 • Refill Subscription</text>
      <text x="50" y="200" font-family="sans-serif" font-size="18" fill="#FF5A1F" font-weight="800">CHF 185.00</text>

      <g transform="translate(32, 260)">
        <rect x="0" y="0" width="438" height="120" rx="8" fill="#1D1A20" />
        <text x="20" y="35" font-family="monospace" font-size="11" fill="#8E8E96">UPGRADE RECOMMENDATION (+$45)</text>
        <text x="20" y="65" font-family="sans-serif" font-size="14" fill="#F4F2EB" font-weight="700">Hydration Primer Infusion</text>
        <rect x="20" y="80" width="130" height="28" rx="4" fill="#FF5A1F" />
        <text x="85" y="98" font-family="sans-serif" font-size="11" fill="#0E0E12" font-weight="800" text-anchor="middle">ADD TO ORDER +</text>
      </g>

      <rect x="32" y="550" width="438" height="52" rx="26" fill="#FF5A1F" />
      <text x="251" y="582" font-family="sans-serif" font-size="14" fill="#0E0E12" font-weight="900" text-anchor="middle">1-CLICK BUY WITH APPLE PAY</text>
    </g>
  </g>
`;

// SERVICE 3: Mobile App Development (React Native, iOS Swift, Android Kotlin)
const serviceMobileVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0E0E12" stroke="#22222E" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">CROSS-PLATFORM MOBILE ENGINEERING</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#C6F432" text-anchor="end">REACT NATIVE • SWIFTUI • 60 FPS GUARANTEE</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#1C1C26" />

    <!-- Phone 1: iPhone 16 Pro Device Frame -->
    <g transform="translate(180, 85)">
      <rect x="0" y="0" width="380" height="650" rx="44" fill="#0A0A0E" stroke="#3A3A4C" stroke-width="3" />
      <!-- Dynamic Island -->
      <rect x="130" y="14" width="120" height="26" rx="13" fill="#161622" />
      <circle cx="230" cy="27" r="5" fill="#5B8DEF" />
      
      <g transform="translate(30, 60)">
        <text x="0" y="24" font-family="monospace" font-size="11" fill="#8E8E96">APEX MOBILITY // iOS</text>
        <text x="0" y="54" font-family="sans-serif" font-size="24" fill="#F4F2EB" font-weight="900">Porsche 911 GT3</text>
        
        <!-- Big Keyless Unlock Radial Button -->
        <g transform="translate(160, 180)">
          <circle cx="0" cy="0" r="90" fill="#14141E" stroke="#C6F432" stroke-width="3" />
          <circle cx="0" cy="0" r="110" fill="none" stroke="#C6F432" stroke-width="1.5" stroke-dasharray="6 6" />
          <text x="0" y="-8" font-family="sans-serif" font-size="14" fill="#C6F432" font-weight="800" text-anchor="middle">HOLD TO</text>
          <text x="0" y="18" font-family="sans-serif" font-size="20" fill="#F4F2EB" font-weight="900" text-anchor="middle">UNLOCK</text>
          <text x="0" y="42" font-family="monospace" font-size="10" fill="#8E8E96" text-anchor="middle">BLE 5.3 MESH</text>
        </g>

        <!-- Live Telemetry Card -->
        <rect x="0" y="340" width="320" height="150" rx="12" fill="#14141E" stroke="#22222E" />
        <text x="20" y="35" font-family="monospace" font-size="11" fill="#8E8E96">REMAINING RANGE</text>
        <text x="20" y="65" font-family="sans-serif" font-size="24" fill="#C6F432" font-weight="800">480 KM (96%)</text>
        <text x="20" y="105" font-family="monospace" font-size="11" fill="#8E8E96">LOCATION: DUBAI MARINA</text>
        <text x="20" y="128" font-family="monospace" font-size="11" fill="#C6F432">✓ TELEMETRY SYNCED (0.4s)</text>
      </g>
    </g>

    <!-- Phone 2: Android Pixel Modern Device Frame -->
    <g transform="translate(680, 85)">
      <rect x="0" y="0" width="380" height="650" rx="36" fill="#0A0A0E" stroke="#3A3A4C" stroke-width="3" />
      <circle cx="190" cy="20" r="6" fill="#181824" />
      <g transform="translate(30, 60)">
        <text x="0" y="24" font-family="monospace" font-size="11" fill="#8E8E96">JETPACK COMPOSE // ANDROID</text>
        <text x="0" y="54" font-family="sans-serif" font-size="24" fill="#F4F2EB" font-weight="900">Fleet Telematics</text>
        <rect x="0" y="90" width="320" height="220" rx="12" fill="#14141E" stroke="#22222E" />
        <text x="20" y="35" font-family="monospace" font-size="11" fill="#C6F432">OFFLINE-FIRST SYNC ENGINE</text>
        <path d="M 20 160 Q 90 90, 160 140 T 300 70" fill="none" stroke="#5B8DEF" stroke-width="3" />
        <text x="20" y="195" font-family="monospace" font-size="10" fill="#8E8E96">ZERO DATA LOSS GUARANTEE</text>
      </g>
    </g>

    <!-- Technical Spec Panel -->
    <g transform="translate(1120, 85)">
      <rect x="0" y="0" width="312" height="650" rx="10" fill="#14141C" stroke="#262634" />
      <text x="24" y="40" font-family="sans-serif" font-size="16" fill="#F4F2EB" font-weight="800">MOBILE SPECIFICATIONS</text>
      <text x="24" y="80" font-family="monospace" font-size="12" fill="#8E8E96">• 60 FPS ProMotion</text>
      <text x="24" y="115" font-family="monospace" font-size="12" fill="#8E8E96">• Biometric FaceID / Touch</text>
      <text x="24" y="150" font-family="monospace" font-size="12" fill="#8E8E96">• Offline Realm / SQLite</text>
      <text x="24" y="185" font-family="monospace" font-size="12" fill="#8E8E96">• App Store 100% Pass</text>
      <rect x="24" y="550" width="264" height="46" rx="23" fill="#C6F432" />
      <text x="156" y="578" font-family="sans-serif" font-size="12" fill="#0E0E12" font-weight="800" text-anchor="middle">LAUNCH ON APP STORE</text>
    </g>
  </g>
`;

// SERVICE 4: Game Dev & 3D WebGL (Three.js, Unity, Shaders)
const serviceGameVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0B0B0F" stroke="#22222E" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">INTERACTIVE 3D WEBGL &amp; SHADER ENGINE</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#FF5A1F" text-anchor="end">THREE.JS • PBR MATERIALS • 120 FPS ACCELERATED</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#1A1A24" />

    <!-- 3D Orbit Viewport Floor & Model Silhouette -->
    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="1020" height="650" rx="10" fill="#0F0F14" stroke="#22222E" />
      <ellipse cx="510" cy="420" rx="460" ry="140" fill="none" stroke="#2A2A38" stroke-width="1.5" stroke-dasharray="6 6" />
      <ellipse cx="510" cy="420" rx="280" ry="85" fill="none" stroke="#FF5A1F" stroke-opacity="0.3" stroke-width="1" />
      
      <!-- Hypercar Profile Silhouette in 3D Space -->
      <polygon points="200,410 260,360 440,350 580,260 780,260 920,330 1000,360 1020,410 920,420 840,370 780,420 400,420 340,370 260,420" fill="#1C1C26" stroke="#F4F2EB" stroke-width="2" />
      <polygon points="560,345 620,265 760,265 800,345" fill="#FF5A1F" fill-opacity="0.25" stroke="#FF5A1F" stroke-width="2" />

      <!-- Interactive 3D Orbit Node Pins -->
      <circle cx="440" cy="320" r="10" fill="#FF5A1F" />
      <circle cx="440" cy="320" r="20" fill="none" stroke="#FF5A1F" stroke-width="1.5" stroke-dasharray="4 4" />
      <rect x="470" y="305" width="160" height="28" rx="4" fill="#14141A" stroke="#FF5A1F" />
      <text x="550" y="323" font-family="monospace" font-size="11" fill="#F4F2EB" text-anchor="middle">CARBON FIBER CHASSIS</text>

      <!-- Viewport Telemetry Heads-Up Overlay -->
      <rect x="30" y="30" width="220" height="85" rx="6" fill="#0B0B10" stroke="#242432" />
      <text x="45" y="55" font-family="monospace" font-size="11" fill="#C6F432">GPU TIER: HIGH (RTX 4090)</text>
      <text x="45" y="75" font-family="monospace" font-size="11" fill="#8E8E96">DRAW CALLS: 18 • 1.2M TRIS</text>
      <text x="45" y="95" font-family="monospace" font-size="11" fill="#FF5A1F">FPS: 120 (LOCKED)</text>
    </g>

    <!-- Right: Material & Shader Tuning Rack -->
    <g transform="translate(1080, 85)">
      <rect x="0" y="0" width="352" height="650" rx="10" fill="#14141A" stroke="#262634" />
      <text x="24" y="40" font-family="sans-serif" font-size="16" fill="#F4F2EB" font-weight="800">SHADER MATRIX</text>
      <text x="24" y="80" font-family="monospace" font-size="11" fill="#8E8E96">ROUGHNESS: 0.12 (MIRROR)</text>
      <rect x="24" y="95" width="304" height="8" rx="4" fill="#222230" />
      <rect x="24" y="95" width="80" height="8" rx="4" fill="#FF5A1F" />

      <text x="24" y="140" font-family="monospace" font-size="11" fill="#8E8E96">METALLIC: 0.88 (TITANIUM)</text>
      <rect x="24" y="155" width="304" height="8" rx="4" fill="#222230" />
      <rect x="24" y="155" width="260" height="8" rx="4" fill="#C6F432" />

      <text x="24" y="200" font-family="monospace" font-size="11" fill="#8E8E96">CLEARCOAT FRESNEL: 1.45</text>
      <rect x="24" y="215" width="304" height="8" rx="4" fill="#222230" />
      <rect x="24" y="215" width="180" height="8" rx="4" fill="#5B8DEF" />
    </g>
  </g>
`;

// SERVICE 5: Branding & UI/UX Design (Figma, Tokens, Systems)
const serviceBrandingVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#141416" stroke="#2A2A30" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">EDITORIAL DESIGN SYSTEMS &amp; FIGMA TOKENS</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#F4F2EB" text-anchor="end">SWISS TYPOGRAPHY • DESIGN TOKENS • AUTO-LAYOUT</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#222228" />

    <!-- Left: Typography Scale & Artboard -->
    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="700" height="650" rx="10" fill="#18181E" stroke="#282834" />
      <text x="30" y="40" font-family="monospace" font-size="11" fill="#C6F432">SWISS EDITORIAL TYPE SPECIMEN</text>
      <text x="30" y="110" font-family="sans-serif" font-size="54" fill="#F4F2EB" font-weight="900" letter-spacing="-2">Aa Bb Gg 01</text>
      <text x="30" y="160" font-family="monospace" font-size="12" fill="#8E8E96">FONT: GENERAL SANS DISPLAY • CLAMP(3rem, 8vw, 7.5rem)</text>
      
      <line x1="30" y1="190" x2="670" y2="190" stroke="#242430" />

      <!-- Palette Tokens -->
      <g transform="translate(30, 220)">
        <rect x="0" y="0" width="140" height="90" rx="8" fill="#FF5A1F" />
        <text x="15" y="115" font-family="monospace" font-size="10" fill="#F4F2EB">#FF5A1F (ACCENT)</text>
        
        <rect x="160" y="0" width="140" height="90" rx="8" fill="#C6F432" />
        <text x="175" y="115" font-family="monospace" font-size="10" fill="#F4F2EB">#C6F432 (LIME)</text>

        <rect x="320" y="0" width="140" height="90" rx="8" fill="#F2EFE9" />
        <text x="335" y="115" font-family="monospace" font-size="10" fill="#F4F2EB">#F2EFE9 (SWISS BONE)</text>

        <rect x="480" y="0" width="140" height="90" rx="8" fill="#0E0E10" stroke="#3A3A4C" />
        <text x="495" y="115" font-family="monospace" font-size="10" fill="#F4F2EB">#0E0E10 (OBSIDIAN)</text>
      </g>
    </g>

    <!-- Right: UI Components Set -->
    <g transform="translate(770, 85)">
      <rect x="0" y="0" width="662" height="650" rx="10" fill="#18181E" stroke="#282834" />
      <text x="30" y="40" font-family="monospace" font-size="11" fill="#C6F432">DESIGN SYSTEM ATOM TOKENS</text>
      
      <g transform="translate(30, 70)">
        <!-- Buttons Preview -->
        <rect x="0" y="0" width="240" height="48" rx="24" fill="#FF5A1F" />
        <text x="120" y="29" font-family="sans-serif" font-size="13" fill="#0E0E12" font-weight="800" text-anchor="middle">PRIMARY PILL BUTTON</text>

        <rect x="260" y="0" width="240" height="48" rx="24" fill="#14141A" stroke="#FF5A1F" stroke-width="1.5" />
        <text x="380" y="29" font-family="sans-serif" font-size="13" fill="#FF5A1F" font-weight="700" text-anchor="middle">OUTLINE HOVER STATE</text>
      </g>
    </g>
  </g>
`;

// SERVICE 6: Applied AI & Automation (n8n, Vector RAG, Claude 3.5)
const serviceAiVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0D0D12" stroke="#262634" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">AUTONOMOUS MULTI-AGENT n8n WORKFLOW PIPELINE</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#C6F432" text-anchor="end">CLAUDE 3.5 • VECTOR RAG • SUB-350ms EXECUTION</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#1E1E28" />

    <!-- Multi-Agent Node Graph -->
    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="1392" height="650" rx="10" fill="#121218" stroke="#22222E" />
      
      <path d="M 230 180 C 330 180, 350 180, 420 180" fill="none" stroke="#FF5A1F" stroke-width="3" />
      <path d="M 640 180 C 720 180, 740 120, 800 120" fill="none" stroke="#C6F432" stroke-width="3" />
      <path d="M 640 180 C 720 180, 740 260, 800 260" fill="none" stroke="#5B8DEF" stroke-width="3" />
      <path d="M 1020 120 C 1100 120, 1120 180, 1180 180" fill="none" stroke="#C6F432" stroke-width="3" />

      <!-- Node 1: Webhook -->
      <g transform="translate(30, 120)">
        <rect x="0" y="0" width="200" height="120" rx="12" fill="#1B1B26" stroke="#FF5A1F" stroke-width="2" />
        <rect x="0" y="0" width="200" height="34" rx="12" fill="#FF5A1F" />
        <text x="16" y="22" font-family="monospace" font-size="11" fill="#0E0E12" font-weight="800">WEBHOOK TRIGGER</text>
        <text x="16" y="60" font-family="sans-serif" font-size="13" fill="#F4F2EB" font-weight="700">HubSpot &amp; Stripe Event</text>
        <text x="16" y="100" font-family="monospace" font-size="10" fill="#C6F432">✓ Active (24,190 Runs)</text>
      </g>

      <!-- Node 2: LLM Agent -->
      <g transform="translate(420, 120)">
        <rect x="0" y="0" width="220" height="120" rx="12" fill="#1B1B26" stroke="#C6F432" stroke-width="2" />
        <rect x="0" y="0" width="220" height="34" rx="12" fill="#C6F432" />
        <text x="16" y="22" font-family="monospace" font-size="11" fill="#0E0E12" font-weight="800">LLM AGENT</text>
        <text x="16" y="60" font-family="sans-serif" font-size="13" fill="#F4F2EB" font-weight="700">Claude 3.5 Sonnet</text>
        <text x="16" y="100" font-family="monospace" font-size="10" fill="#C6F432">✓ 320ms Latency • 0 Err</text>
      </g>

      <!-- Node 3: Vector Memory -->
      <g transform="translate(800, 60)">
        <rect x="0" y="0" width="220" height="110" rx="12" fill="#1B1B26" stroke="#C6F432" stroke-width="1.5" />
        <rect x="0" y="0" width="220" height="30" rx="12" fill="#262638" />
        <text x="16" y="20" font-family="monospace" font-size="11" fill="#C6F432" font-weight="800">VECTOR RAG MEMORY</text>
        <text x="16" y="55" font-family="sans-serif" font-size="13" fill="#F4F2EB" font-weight="700">PostgreSQL pgvector</text>
        <text x="16" y="95" font-family="monospace" font-size="10" fill="#C6F432">✓ Distance: 0.12</text>
      </g>

      <!-- Node 4: Action -->
      <g transform="translate(1180, 120)">
        <rect x="0" y="0" width="180" height="120" rx="12" fill="#1B1B26" stroke="#C6F432" stroke-width="2" />
        <rect x="0" y="0" width="180" height="34" rx="12" fill="#C6F432" />
        <text x="16" y="22" font-family="monospace" font-size="11" fill="#0E0E12" font-weight="800">SLACK ACTION</text>
        <text x="16" y="60" font-family="sans-serif" font-size="13" fill="#F4F2EB" font-weight="700">Dispatch Deal</text>
        <text x="16" y="100" font-family="monospace" font-size="10" fill="#C6F432">✓ Sent</text>
      </g>

      <!-- Bottom Stream -->
      <g transform="translate(30, 420)">
        <rect x="0" y="0" width="1332" height="200" rx="8" fill="#0E0E12" stroke="#22222E" />
        <text x="24" y="32" font-family="monospace" font-size="12" fill="#F4F2EB" font-weight="700">AUTONOMOUS AGENT TELEMETRY // 24/7 PRODUCTION CLUSTER</text>
        <text x="24" y="75" font-family="monospace" font-size="12" fill="#C6F432">14:12:02 [LLM_AGENT] Parsed user prompt in 280ms. Extracted 8 variables with zero hallucination.</text>
        <text x="24" y="110" font-family="monospace" font-size="12" fill="#5B8DEF">14:12:03 [TOOL_CALL] Queried internal company manual. Retrieved 3 citations with 99.2% relevance.</text>
        <text x="24" y="145" font-family="monospace" font-size="12" fill="#C6F432">14:12:03 [DISPATCH] Automated reply drafted, approved by guardrail, and queued for delivery.</text>
      </g>
    </g>
  </g>
`;

// SERVICE 7: Growth Marketing & Technical SEO
const serviceGrowthVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0E1216" stroke="#1D2A38" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">TECHNICAL &amp; SEMANTIC SEO ARCHITECTURE</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#5B8DEF" text-anchor="end">JSON-LD RICH SCHEMAS • LIGHTHOUSE 100/100 • +148% ARR</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#182330" />

    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="900" height="650" rx="10" fill="#131922" stroke="#1F2A38" />
      <text x="30" y="40" font-family="monospace" font-size="12" fill="#C6F432">ORGANIC SEARCH RANKINGS &amp; SERP IMPRESSIONS</text>
      
      <!-- Exponential Traffic Growth Curve -->
      <path d="M 40 480 Q 250 420, 450 320 T 700 180 T 850 80" fill="none" stroke="#5B8DEF" stroke-width="4" />
      <path d="M 40 520 Q 250 460, 450 380 T 700 240 T 850 120" fill="none" stroke="#C6F432" stroke-width="3" stroke-dasharray="6 4" />
      
      <circle cx="850" cy="80" r="12" fill="#5B8DEF" />
      <text x="830" y="60" font-family="sans-serif" font-size="16" fill="#F4F2EB" font-weight="800" text-anchor="end">#1 GOOGLE RANK</text>

      <!-- Key SEO Metrics -->
      <g transform="translate(30, 520)">
        <rect x="0" y="0" width="260" height="90" rx="8" fill="#18202C" />
        <text x="20" y="30" font-family="monospace" font-size="11" fill="#8E8E96">TOTAL ORGANIC CLICKS</text>
        <text x="20" y="65" font-family="sans-serif" font-size="24" fill="#F4F2EB" font-weight="800">420,000+ / MO</text>

        <rect x="280" y="0" width="260" height="90" rx="8" fill="#18202C" />
        <text x="300" y="30" font-family="monospace" font-size="11" fill="#8E8E96">AVERAGE DOMAIN CTR</text>
        <text x="300" y="65" font-family="sans-serif" font-size="24" fill="#C6F432" font-weight="800">8.4% (+3.2%)</text>

        <rect x="560" y="0" width="270" height="90" rx="8" fill="#18202C" />
        <text x="580" y="30" font-family="monospace" font-size="11" fill="#8E8E96">INDEXED PAGES</text>
        <text x="580" y="65" font-family="sans-serif" font-size="24" fill="#5B8DEF" font-weight="800">1,420 (0 ERRORS)</text>
      </g>
    </g>

    <!-- Right: Conversion Rate Split Test -->
    <g transform="translate(970, 85)">
      <rect x="0" y="0" width="462" height="650" rx="10" fill="#131922" stroke="#1F2A38" />
      <text x="30" y="40" font-family="sans-serif" font-size="18" fill="#F4F2EB" font-weight="800">A/B SPLIT TEST MATRIX</text>
      
      <rect x="30" y="80" width="402" height="130" rx="8" fill="#1A2230" stroke="#C6F432" stroke-width="1.5" />
      <text x="50" y="115" font-family="sans-serif" font-size="16" fill="#F4F2EB" font-weight="700">Variant B (Incorelab Next.js)</text>
      <text x="50" y="145" font-family="sans-serif" font-size="28" fill="#C6F432" font-weight="900">4.82% CONV.</text>
      <text x="50" y="175" font-family="monospace" font-size="11" fill="#8E8E96">+114% Lift Over Control</text>

      <rect x="30" y="230" width="402" height="130" rx="8" fill="#1A2230" />
      <text x="50" y="265" font-family="sans-serif" font-size="16" fill="#8E8E96" font-weight="700">Variant A (Legacy Template)</text>
      <text x="50" y="295" font-family="sans-serif" font-size="28" fill="#8E8E96" font-weight="900">2.25% CONV.</text>
    </g>
  </g>
`;

// SERVICE 8: Cloud Infrastructure & DevOps (AWS, Cloudflare, Docker, K8s)
const serviceCloudVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0F1116" stroke="#222838" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">GLOBAL CLOUD EDGE ARCHITECTURE &amp; DEVOPS</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#C6F432" text-anchor="end">CLOUDFLARE • AWS ECS • 99.99% UPTIME SLA</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#1D2230" />

    <!-- Left: Global Edge Network Topology -->
    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="940" height="650" rx="10" fill="#131722" stroke="#222838" />
      <text x="30" y="40" font-family="monospace" font-size="12" fill="#C6F432">GLOBAL MULTI-REGION REPLICATION MESH</text>
      
      <!-- Edge Nodes with low latency ping lines -->
      <circle cx="280" cy="220" r="14" fill="#C6F432" />
      <text x="280" y="255" font-family="monospace" font-size="11" fill="#F4F2EB" text-anchor="middle">ZURICH (ZRH) // 4ms</text>

      <circle cx="580" cy="180" r="14" fill="#C6F432" />
      <text x="580" y="215" font-family="monospace" font-size="11" fill="#F4F2EB" text-anchor="middle">FRANKFURT (FRA) // 6ms</text>

      <circle cx="820" cy="300" r="14" fill="#C6F432" />
      <text x="820" y="335" font-family="monospace" font-size="11" fill="#F4F2EB" text-anchor="middle">DUBAI (DXB) // 12ms</text>

      <circle cx="160" cy="340" r="14" fill="#C6F432" />
      <text x="160" y="375" font-family="monospace" font-size="11" fill="#F4F2EB" text-anchor="middle">NEW YORK (JFK) // 14ms</text>

      <line x1="280" y1="220" x2="580" y2="180" stroke="#C6F432" stroke-width="2" />
      <line x1="580" y1="180" x2="820" y2="300" stroke="#C6F432" stroke-width="2" />
      <line x1="280" y1="220" x2="160" y2="340" stroke="#C6F432" stroke-width="2" />

      <!-- Bottom Container Status -->
      <g transform="translate(30, 480)">
        <rect x="0" y="0" width="880" height="135" rx="8" fill="#0C0E14" stroke="#1E2434" />
        <text x="20" y="32" font-family="monospace" font-size="11" fill="#8E8E96">KUBERNETES POD CLUSTER STATUS</text>
        <text x="20" y="65" font-family="monospace" font-size="12" fill="#C6F432">✓ 48/48 Pods Running • 0 Restarts • Autoscaling Active (Min 4, Max 64)</text>
        <text x="20" y="95" font-family="monospace" font-size="12" fill="#5B8DEF">✓ Multi-Region PostgreSQL Active Replication: Sync Latency 1.2ms</text>
        <text x="20" y="120" font-family="monospace" font-size="11" fill="#8E8E96">DDoS SHIELD: CLOUDFLARE ENTERPRISE WAF ENGAGED</text>
      </g>
    </g>

    <!-- Right: CI/CD Pipeline Telemetry -->
    <g transform="translate(1010, 85)">
      <rect x="0" y="0" width="422" height="650" rx="10" fill="#131722" stroke="#222838" />
      <text x="30" y="40" font-family="sans-serif" font-size="18" fill="#F4F2EB" font-weight="800">AUTOMATED CI/CD</text>
      
      <rect x="30" y="80" width="362" height="85" rx="8" fill="#18202C" />
      <text x="20" y="30" font-family="monospace" font-size="11" fill="#C6F432">BUILD PASS // GITHUB ACTIONS</text>
      <text x="20" y="55" font-family="monospace" font-size="13" fill="#F4F2EB">Commit #84f29a deployed</text>

      <rect x="30" y="185" width="362" height="85" rx="8" fill="#18202C" />
      <text x="20" y="30" font-family="monospace" font-size="11" fill="#5B8DEF">ZERO DOWNTIME</text>
      <text x="20" y="55" font-family="monospace" font-size="13" fill="#F4F2EB">Rolling Deployment Completed</text>
    </g>
  </g>
`;

// List of all services to render
const servicesList = [
  { file: 'service-web', title: 'Web Development', sub: 'Next.js 15, Turbopack, SSR, HTML5', accent: '#C6F432', cat: 'DISCIPLINE 01 // WEB ARCHITECTURE', visual: serviceWebVisual },
  { file: 'service-ecommerce', title: 'E-Commerce Engineering', sub: 'Shopify Plus, Hydrogen, 1-Click Buy', accent: '#FF5A1F', cat: 'DISCIPLINE 02 // COMMERCE', visual: serviceEcommerceVisual },
  { file: 'service-mobile', title: 'Mobile App Development', sub: 'React Native, Native iOS Swift, Android Kotlin', accent: '#C6F432', cat: 'DISCIPLINE 03 // MOBILE APPS', visual: serviceMobileVisual },
  { file: 'service-game', title: 'Game Development & WebGL', sub: 'Three.js, Unity 3D, Custom Shaders, Spatial XR', accent: '#FF5A1F', cat: 'DISCIPLINE 04 // 3D & GAMES', visual: serviceGameVisual },
  { file: 'service-branding', title: 'Branding & UI/UX Design', sub: 'Figma Tokens, Design Systems, Spatial Art Direction', accent: '#F4F2EB', cat: 'DISCIPLINE 05 // DESIGN ATELIER', visual: serviceBrandingVisual },
  { file: 'service-ai', title: 'Applied AI & Automation', sub: 'Custom LLMs, n8n Agent Pipelines, Vector RAG', accent: '#C6F432', cat: 'DISCIPLINE 06 // APPLIED AI', visual: serviceAiVisual },
  { file: 'service-growth', title: 'Growth Marketing & SEO', sub: 'Semantic SEO, Conversion Optimization, Analytics', accent: '#5B8DEF', cat: 'DISCIPLINE 07 // GROWTH', visual: serviceGrowthVisual },
  { file: 'service-cloud', title: 'Cloud Infrastructure & DevOps', sub: 'AWS, Cloudflare Edge, Docker, Kubernetes', accent: '#C6F432', cat: 'DISCIPLINE 08 // INFRASTRUCTURE', visual: serviceCloudVisual },
];

async function generateServices() {
  console.log(`Starting generation of ${servicesList.length} distinct service visuals...`);

  for (const item of servicesList) {
    const svgStr = createSVG(item.title, item.sub, item.accent, item.cat, item.visual);
    const svgPath = path.join(imgDir, `${item.file}.svg`);
    const pngPath = path.join(imgDir, `${item.file}.png`);

    fs.writeFileSync(svgPath, svgStr, 'utf8');

    const svgBuf = Buffer.from(svgStr);
    await sharp(svgBuf)
      .png({ quality: 95 })
      .toFile(pngPath);

    console.log(`✓ Generated distinct service visual: ${item.file}.png`);
  }

  console.log('🎉 All 8 service visuals generated with bespoke, proper architectural designs!');
}

generateServices().catch(err => {
  console.error('Error generating service images:', err);
  process.exit(1);
});
