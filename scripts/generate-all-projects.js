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
      <stop offset="0%" stop-color="#18181E" stop-opacity="1" />
      <stop offset="60%" stop-color="#101013" stop-opacity="1" />
      <stop offset="100%" stop-color="#08080A" stop-opacity="1" />
    </radialGradient>
    <radialGradient id="spotlight_${safeId}" cx="60%" cy="35%" r="50%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.18" />
      <stop offset="100%" stop-color="${accentColor}" stop-opacity="0" />
    </radialGradient>
    <pattern id="gridPattern_${safeId}" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#26262B" stroke-width="0.7" stroke-opacity="0.5" />
    </pattern>
    <linearGradient id="cardGrad_${safeId}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1C1C22" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#121216" stop-opacity="0.95" />
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" fill="url(#bgGlow_${safeId})" />
  <rect width="100%" height="100%" fill="url(#gridPattern_${safeId})" />
  <rect width="100%" height="100%" fill="url(#spotlight_${safeId})" />

  <!-- Outer Swiss Editorial Precision Border -->
  <rect x="30" y="30" width="1540" height="940" fill="none" stroke="#26262C" stroke-width="1" />
  
  <!-- Corner Calibration Marks -->
  <g stroke="${accentColor}" stroke-width="1.5">
    <path d="M 22 30 L 38 30 M 30 22 L 30 38" />
    <path d="M 1562 30 L 1578 30 M 1570 22 L 1570 38" />
    <path d="M 22 970 L 38 970 M 30 962 L 30 978" />
    <path d="M 1562 970 L 1578 970 M 1570 962 L 1570 978" />
  </g>

  <!-- Header Metadata -->
  <text x="64" y="70" font-family="'JetBrains Mono', monospace, sans-serif" font-size="12" fill="${accentColor}" letter-spacing="3" font-weight="700">INCORELAB // PRODUCTION ATELIER</text>
  <text x="1536" y="70" font-family="'JetBrains Mono', monospace, sans-serif" font-size="12" fill="#7E7E86" letter-spacing="3" text-anchor="end" font-weight="600">${cleanCat}</text>

  <!-- Main UI Dashboard / App Scene Viewport -->
  <g transform="translate(64, 96)">
    ${cleanVisual}
  </g>

  <!-- Bottom Editorial Caption Bar -->
  <line x1="30" y1="910" x2="1570" y2="910" stroke="#26262C" stroke-width="1" />
  <text x="64" y="948" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="#F4F2EB" font-weight="700" letter-spacing="-0.5">${cleanTitle}</text>
  <text x="1536" y="948" font-family="'JetBrains Mono', monospace, sans-serif" font-size="13" fill="#8E8E96" letter-spacing="2" text-anchor="end">${cleanSubtitle}</text>
</svg>`;
}

// 1. KRONOS
const kronosVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#121216" stroke="#2A2A32" stroke-width="1.5" />
    <rect x="0" y="0" width="1472" height="52" rx="14" fill="#181820" />
    <line x1="0" y1="52" x2="1472" y2="52" stroke="#26262F" stroke-width="1" />
    <circle cx="28" cy="26" r="6" fill="#FF5F56" />
    <circle cx="48" cy="26" r="6" fill="#FFBD2E" />
    <circle cx="68" cy="26" r="6" fill="#27C93F" />
    <text x="110" y="31" font-family="monospace" font-size="13" fill="#F4F2EB" font-weight="700">KRONOS TERMINAL PRO // v4.8</text>
    <rect x="360" y="14" width="90" height="24" rx="4" fill="#C6F432" fill-opacity="0.15" />
    <text x="405" y="30" font-family="monospace" font-size="11" fill="#C6F432" font-weight="700" text-anchor="middle">LIVE 120 FPS</text>
    <text x="1150" y="31" font-family="monospace" font-size="12" fill="#8E8E96">FEED: NYSE / NASDAQ / BINANCE</text>
    <text x="1450" y="31" font-family="monospace" font-size="12" fill="#C6F432" font-weight="700" text-anchor="end">LATENCY: 0.8ms</text>

    <rect x="0" y="52" width="240" height="728" fill="#15151A" />
    <line x1="240" y1="52" x2="240" y2="780" stroke="#26262F" />
    <text x="24" y="85" font-family="monospace" font-size="11" fill="#8E8E96" font-weight="700">ACTIVE INSTRUMENTS</text>
    <rect x="12" y="104" width="216" height="56" rx="6" fill="#1C1C24" stroke="#C6F432" />
    <text x="24" y="128" font-family="sans-serif" font-size="14" fill="#F4F2EB" font-weight="700">BTC / USD</text>
    <text x="216" y="128" font-family="monospace" font-size="13" fill="#C6F432" font-weight="700" text-anchor="end">$96,420.50</text>
    <text x="216" y="148" font-family="monospace" font-size="11" fill="#C6F432" text-anchor="end">+4.82%</text>

    <g transform="translate(260, 70)">
      <text x="0" y="20" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">BTC / USD PERPETUAL CONTRACT</text>
      <text x="0" y="44" font-family="monospace" font-size="13" fill="#C6F432">INDEX: 96,420.50 USD  |  HIGH: 97,100.00  |  24H VOL: $14.2B</text>
      <rect x="0" y="60" width="900" height="420" rx="8" fill="#0E0E12" stroke="#26262F" />
      <path d="M 20 340 Q 220 310, 420 270 T 720 190 T 880 140" fill="none" stroke="#C6F432" stroke-width="2.5" />
      <rect x="44" y="310" width="14" height="45" fill="#C6F432" />
      <rect x="124" y="285" width="14" height="50" fill="#C6F432" />
      <rect x="244" y="235" width="14" height="55" fill="#C6F432" />
      <rect x="362" y="175" width="16" height="60" fill="#C6F432" />
      <rect x="534" y="125" width="14" height="55" fill="#C6F432" />
      <rect x="702" y="85" width="16" height="50" fill="#C6F432" />
      <line x1="0" y1="102" x2="900" y2="102" stroke="#C6F432" stroke-dasharray="6 4" />
      <rect x="800" y="88" width="95" height="26" rx="4" fill="#C6F432" />
      <text x="847" y="105" font-family="monospace" font-size="12" fill="#121216" font-weight="800" text-anchor="middle">$96,420.50</text>
    </g>

    <g transform="translate(1180, 70)">
      <rect x="0" y="0" width="270" height="480" rx="8" fill="#15151A" stroke="#26262F" />
      <text x="16" y="28" font-family="monospace" font-size="12" fill="#F4F2EB" font-weight="700">ORDER BOOK (L2)</text>
      <text x="16" y="78" font-family="monospace" font-size="11" fill="#FF5F56">96,445.00  1.480  142.7k</text>
      <text x="16" y="103" font-family="monospace" font-size="11" fill="#FF5F56">96,438.50  0.820   79.0k</text>
      <line x1="16" y1="145" x2="254" y2="145" stroke="#C6F432" />
      <text x="135" y="162" font-family="monospace" font-size="12" fill="#C6F432" text-anchor="middle">SPREAD: $1.50</text>
      <text x="16" y="203" font-family="monospace" font-size="11" fill="#C6F432">96,420.50  5.120  493.6k</text>
      <text x="16" y="228" font-family="monospace" font-size="11" fill="#C6F432">96,412.00  2.310  222.7k</text>
    </g>

    <g transform="translate(260, 570)">
      <rect x="0" y="0" width="1190" height="190" rx="8" fill="#15151A" stroke="#26262F" />
      <text x="20" y="28" font-family="monospace" font-size="12" fill="#F4F2EB" font-weight="700">EXECUTION LOG &amp; RISK HEALTH</text>
      <text x="20" y="70" font-family="monospace" font-size="12" fill="#C6F432">14:02:19.421 [BUY] BTC/USD PERP • QTY: 1.4000 • PRICE: $96,419.50 • EXEC: 0.74ms • FILLED</text>
      <text x="20" y="105" font-family="monospace" font-size="12" fill="#C6F432">14:02:18.102 [BUY] ETH/USD PERP • QTY: 18.500 • PRICE: $3,539.80 • EXEC: 0.81ms • FILLED</text>
      <text x="20" y="140" font-family="monospace" font-size="12" fill="#FF5F56">14:02:15.890 [SELL] SOL/USD PERP • QTY: 84.000 • PRICE: $214.20 • EXEC: 0.69ms • FILLED</text>
      <text x="20" y="172" font-family="monospace" font-size="11" fill="#C6F432">✦ ALPHA: +$42,840.00 | MARGIN: 14.8% | DRAWDOWN: 0.02%</text>
    </g>
  </g>
`;

// 2. APEX LUXURY CAR RENTAL & APP DASHBOARD
const apexRentalVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0E0E12" stroke="#262630" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">APEX MOBILITY // LUXURY CAR RENTAL PLATFORM &amp; MOBILE APP</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#C6F432" text-anchor="end">DUBAI • ZURICH • MIAMI • 99.8% FLEET DISPATCH</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#22222A" />

    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="940" height="650" rx="10" fill="#14141B" stroke="#2A2A38" />
      <rect x="0" y="0" width="940" height="40" rx="10" fill="#1B1B24" />
      <circle cx="24" cy="20" r="5" fill="#FF5F56" />
      <circle cx="40" cy="20" r="5" fill="#FFBD2E" />
      <circle cx="56" cy="20" r="5" fill="#27C93F" />
      <text x="470" y="24" font-family="monospace" font-size="11" fill="#8E8E96" text-anchor="middle">https://apex-drive.com/fleet/supercars</text>

      <g transform="translate(30, 60)">
        <rect x="0" y="0" width="880" height="65" rx="8" fill="#1B1B26" stroke="#2E2E3E" />
        <text x="24" y="26" font-family="monospace" font-size="10" fill="#8E8E96">PICKUP LOCATION</text>
        <text x="24" y="46" font-family="sans-serif" font-size="14" fill="#F4F2EB" font-weight="700">Dubai International Airport (DXB)</text>
        <text x="320" y="26" font-family="monospace" font-size="10" fill="#8E8E96">DATES</text>
        <text x="320" y="46" font-family="sans-serif" font-size="14" fill="#F4F2EB" font-weight="700">Oct 24 — Oct 28 (4 Days)</text>
        <text x="580" y="26" font-family="monospace" font-size="10" fill="#8E8E96">CATEGORY</text>
        <text x="580" y="46" font-family="sans-serif" font-size="14" fill="#C6F432" font-weight="700">Supercars &amp; Hypercars</text>
        <rect x="740" y="12" width="120" height="40" rx="6" fill="#C6F432" />
        <text x="800" y="36" font-family="sans-serif" font-size="12" fill="#0E0E12" font-weight="800" text-anchor="middle">SEARCH FLEET</text>
      </g>

      <g transform="translate(30, 145)">
        <rect x="0" y="0" width="425" height="470" rx="10" fill="#181822" stroke="#C6F432" stroke-width="1.5" />
        <rect x="15" y="15" width="395" height="230" rx="8" fill="#0F0F14" />
        <polygon points="50,180 90,140 220,130 310,140 370,180 380,200 320,205 270,180 180,180 120,205 60,205" fill="#242430" stroke="#C6F432" stroke-width="2" />
        <circle cx="120" cy="205" r="28" fill="#121218" stroke="#C6F432" stroke-width="2" />
        <circle cx="320" cy="205" r="28" fill="#121218" stroke="#C6F432" stroke-width="2" />
        <rect x="25" y="25" width="110" height="24" rx="4" fill="#C6F432" />
        <text x="80" y="41" font-family="monospace" font-size="10" fill="#0E0E12" font-weight="800" text-anchor="middle">INSTANT CONFIRM</text>
        <text x="20" y="280" font-family="sans-serif" font-size="20" fill="#F4F2EB" font-weight="800">Porsche 911 GT3 RS (992)</text>
        <text x="20" y="304" font-family="monospace" font-size="11" fill="#8E8E96">518 HP • 0-100: 3.2s • Top: 296 km/h</text>
        <line x1="20" y1="320" x2="405" y2="320" stroke="#252532" />
        <text x="20" y="355" font-family="sans-serif" font-size="26" fill="#F4F2EB" font-weight="800">$1,450 <tspan font-size="12" fill="#8E8E96" font-family="monospace">/ DAY</tspan></text>
        <rect x="20" y="405" width="385" height="46" rx="23" fill="#C6F432" />
        <text x="212" y="433" font-family="sans-serif" font-size="13" fill="#0E0E12" font-weight="800" text-anchor="middle">RESERVE NOW • APPLE PAY</text>
      </g>

      <g transform="translate(485, 145)">
        <rect x="0" y="0" width="425" height="470" rx="10" fill="#181822" stroke="#2E2E3E" />
        <rect x="15" y="15" width="395" height="230" rx="8" fill="#0F0F14" />
        <polygon points="50,180 100,140 230,135 320,145 370,180 380,200 320,205 270,180 180,180 120,205 60,205" fill="#242430" stroke="#FF5A1F" stroke-width="2" />
        <circle cx="120" cy="205" r="28" fill="#121218" stroke="#FF5A1F" stroke-width="2" />
        <circle cx="320" cy="205" r="28" fill="#121218" stroke="#FF5A1F" stroke-width="2" />
        <text x="20" y="280" font-family="sans-serif" font-size="20" fill="#F4F2EB" font-weight="800">Ferrari 296 GTB Hybrid</text>
        <text x="20" y="304" font-family="monospace" font-size="11" fill="#8E8E96">819 HP • 0-100: 2.9s • Rosso Corsa</text>
        <line x1="20" y1="320" x2="405" y2="320" stroke="#252532" />
        <text x="20" y="355" font-family="sans-serif" font-size="26" fill="#F4F2EB" font-weight="800">$1,850 <tspan font-size="12" fill="#8E8E96" font-family="monospace">/ DAY</tspan></text>
        <rect x="20" y="405" width="385" height="46" rx="23" fill="#1F1F2C" stroke="#3A3A4E" />
        <text x="212" y="433" font-family="sans-serif" font-size="13" fill="#F4F2EB" font-weight="800" text-anchor="middle">VIEW DETAILS &amp; BOOK</text>
      </g>
    </g>

    <g transform="translate(1030, 85)">
      <rect x="0" y="0" width="400" height="650" rx="36" fill="#0C0C10" stroke="#3A3A4C" stroke-width="3" />
      <rect x="130" y="12" width="140" height="24" rx="12" fill="#16161F" />
      <g transform="translate(30, 55)">
        <text x="0" y="20" font-family="monospace" font-size="10" fill="#8E8E96">ACTIVE RENTAL #APX-994</text>
        <text x="0" y="48" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">Porsche GT3 RS</text>
        <g transform="translate(170, 160)">
          <circle cx="0" cy="0" r="85" fill="#151520" stroke="#C6F432" stroke-width="3" />
          <circle cx="0" cy="0" r="105" fill="none" stroke="#C6F432" stroke-width="1.5" stroke-dasharray="6 6" />
          <text x="0" y="-8" font-family="sans-serif" font-size="14" fill="#C6F432" font-weight="800" text-anchor="middle">HOLD TO</text>
          <text x="0" y="16" font-family="sans-serif" font-size="18" fill="#F4F2EB" font-weight="900" text-anchor="middle">UNLOCK</text>
          <text x="0" y="38" font-family="monospace" font-size="10" fill="#8E8E96" text-anchor="middle">BLUETOOTH 5.3</text>
        </g>
        <g transform="translate(0, 310)">
          <rect x="0" y="0" width="340" height="150" rx="10" fill="#161622" stroke="#262634" />
          <text x="20" y="30" font-family="monospace" font-size="11" fill="#8E8E96">FUEL LEVEL</text>
          <text x="20" y="55" font-family="sans-serif" font-size="20" fill="#C6F432" font-weight="800">96% (480 km)</text>
          <text x="180" y="30" font-family="monospace" font-size="11" fill="#8E8E96">GPS LOCATION</text>
          <text x="180" y="55" font-family="sans-serif" font-size="14" fill="#F4F2EB" font-weight="700">Dubai Marina Walk</text>
          <line x1="20" y1="80" x2="320" y2="80" stroke="#222230" />
          <text x="20" y="110" font-family="monospace" font-size="11" fill="#8E8E96">ODOMETER: 4,120 KM</text>
          <text x="180" y="110" font-family="monospace" font-size="11" fill="#8E8E96">TIRE PSI: 32 / 32</text>
          <text x="20" y="132" font-family="monospace" font-size="11" fill="#C6F432">✓ COMPREHENSIVE INSURANCE ACTIVE</text>
        </g>
        <rect x="0" y="490" width="340" height="48" rx="24" fill="#1C1C28" stroke="#3A3A4C" />
        <text x="170" y="520" font-family="sans-serif" font-size="12" fill="#F4F2EB" font-weight="700" text-anchor="middle">24/7 VIP CONCIERGE &amp; ROADSIDE ASSIST</text>
      </g>
    </g>
  </g>
`;

// 3. OMNICORE ERP
const omniErpVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0F1116" stroke="#222834" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">OMNICORE CLOUD ERP // GLOBAL ENTERPRISE PLATFORM</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#5B8DEF" text-anchor="end">MULTI-WAREHOUSE • FINANCIAL LEDGER • ROLE-BASED ACCESS</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#1D2330" />

    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="220" height="650" rx="8" fill="#131722" stroke="#202636" />
      <text x="20" y="36" font-family="monospace" font-size="11" fill="#8E8E96">ERP MODULES</text>
      <rect x="10" y="55" width="200" height="40" rx="6" fill="#1D2536" stroke="#5B8DEF" />
      <text x="25" y="80" font-family="sans-serif" font-size="13" fill="#F4F2EB" font-weight="700">📊 Executive Overview</text>
      <text x="25" y="125" font-family="sans-serif" font-size="13" fill="#8E8E96">📦 Supply &amp; Inventory</text>
      <text x="25" y="165" font-family="sans-serif" font-size="13" fill="#8E8E96">💰 Financial General Ledger</text>
      <text x="25" y="205" font-family="sans-serif" font-size="13" fill="#8E8E96">👥 HR &amp; Global Payroll</text>
      <text x="25" y="245" font-family="sans-serif" font-size="13" fill="#8E8E96">🏭 Manufacturing Plants</text>
      <line x1="20" y1="520" x2="200" y2="520" stroke="#1D2330" />
      <text x="20" y="550" font-family="monospace" font-size="11" fill="#5B8DEF">ORACLE / SAP CONNECTOR</text>
      <text x="20" y="575" font-family="monospace" font-size="11" fill="#C6F432">✓ POSTGRES REPLICATION</text>
    </g>

    <g transform="translate(280, 85)">
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="270" height="95" rx="8" fill="#141824" stroke="#222838" />
        <text x="20" y="30" font-family="monospace" font-size="11" fill="#8E8E96">TOTAL REVENUE (Q3)</text>
        <text x="20" y="65" font-family="sans-serif" font-size="28" fill="#F4F2EB" font-weight="800">$18.42M</text>
        <text x="20" y="85" font-family="monospace" font-size="11" fill="#C6F432">+18.4% YoY</text>

        <rect x="290" y="0" width="270" height="95" rx="8" fill="#141824" stroke="#222838" />
        <text x="310" y="30" font-family="monospace" font-size="11" fill="#8E8E96">ACTIVE PO APPROVALS</text>
        <text x="310" y="65" font-family="sans-serif" font-size="28" fill="#5B8DEF" font-weight="800">142 Orders</text>

        <rect x="580" y="0" width="270" height="95" rx="8" fill="#141824" stroke="#222838" />
        <text x="600" y="30" font-family="monospace" font-size="11" fill="#8E8E96">INVENTORY TURNOVER</text>
        <text x="600" y="65" font-family="sans-serif" font-size="28" fill="#C6F432" font-weight="800">8.4x</text>

        <rect x="870" y="0" width="280" height="95" rx="8" fill="#141824" stroke="#222838" />
        <text x="890" y="30" font-family="monospace" font-size="11" fill="#8E8E96">GLOBAL WAREHOUSES</text>
        <text x="890" y="65" font-family="sans-serif" font-size="28" fill="#FF5A1F" font-weight="800">12 Hubs</text>
      </g>

      <g transform="translate(0, 115)">
        <rect x="0" y="0" width="700" height="310" rx="8" fill="#121622" stroke="#222838" />
        <text x="24" y="32" font-family="monospace" font-size="12" fill="#F4F2EB" font-weight="700">MULTI-FACILITY CASH FLOW &amp; EBITDA RUN RATE</text>
        <rect x="40" y="210" width="35" height="60" fill="#5B8DEF" />
        <rect x="100" y="190" width="35" height="80" fill="#5B8DEF" />
        <rect x="160" y="160" width="35" height="110" fill="#5B8DEF" />
        <rect x="220" y="130" width="35" height="140" fill="#C6F432" />
        <rect x="280" y="110" width="35" height="160" fill="#C6F432" />
        <path d="M 50 190 Q 200 140, 350 90 T 650 60" fill="none" stroke="#C6F432" stroke-width="3" />
        <text x="550" y="55" font-family="monospace" font-size="12" fill="#C6F432" font-weight="700">+$2.8M SURPLUS</text>
      </g>

      <g transform="translate(720, 115)">
        <rect x="0" y="0" width="430" height="310" rx="8" fill="#121622" stroke="#222838" />
        <text x="20" y="32" font-family="monospace" font-size="12" fill="#F4F2EB" font-weight="700">RECENT PURCHASE ORDERS</text>
        <text x="20" y="75" font-family="monospace" font-size="11" fill="#8E8E96">PO-8842 • Microchip Wafers</text>
        <text x="410" y="75" font-family="monospace" font-size="11" fill="#C6F432" text-anchor="end">$482,000 [APPROVED]</text>
        <text x="20" y="115" font-family="monospace" font-size="11" fill="#8E8E96">PO-8843 • Titanium Alloy Billets</text>
        <text x="410" y="115" font-family="monospace" font-size="11" fill="#C6F432" text-anchor="end">$1,240,000 [APPROVED]</text>
        <text x="20" y="155" font-family="monospace" font-size="11" fill="#8E8E96">PO-8844 • Sensor Actuators</text>
        <text x="410" y="155" font-family="monospace" font-size="11" fill="#5B8DEF" text-anchor="end">$89,400 [IN REVIEW]</text>
      </g>

      <g transform="translate(0, 445)">
        <rect x="0" y="0" width="1150" height="190" rx="8" fill="#141824" stroke="#222838" />
        <text x="24" y="30" font-family="monospace" font-size="12" fill="#F4F2EB" font-weight="700">WAREHOUSE SUPPLY CHAIN TELEMETRY // REAL-TIME MQTT FEED</text>
        <text x="24" y="75" font-family="monospace" font-size="12" fill="#F4F2EB">WH-ZURICH (Main): Capacity 88.4% | Lead-time 1.2 days | Robotic Sort: 4,800 units/hr | Status: NORMAL</text>
        <text x="24" y="110" font-family="monospace" font-size="12" fill="#F4F2EB">WH-DUBAI-DWC: Capacity 74.2% | Air-Freight Inbound: 14 Containers | Cold-Storage: -20°C Verified | Status: OPTIMAL</text>
        <text x="24" y="145" font-family="monospace" font-size="12" fill="#C6F432">✓ AUTOMATED RESTOCKING DISPATCHED 42 SKU REPLENISHMENTS VIA API INTEGRATION</text>
      </g>
    </g>
  </g>
`;

// 4. AUTOMATA N8N AI
const automataVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0D0D12" stroke="#262634" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">AUTOMATA // MULTI-AGENT n8n WORKFLOW ENGINE</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#FF5A1F" text-anchor="end">AUTONOMOUS LLM ORCHESTRATION • 24/7 EVENT-DRIVEN</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#1E1E28" />

    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="1392" height="650" rx="10" fill="#121218" stroke="#22222E" />
      <path d="M 230 180 C 330 180, 350 180, 420 180" fill="none" stroke="#FF5A1F" stroke-width="3" />
      <path d="M 640 180 C 720 180, 740 120, 800 120" fill="none" stroke="#C6F432" stroke-width="3" />
      <path d="M 640 180 C 720 180, 740 260, 800 260" fill="none" stroke="#5B8DEF" stroke-width="3" />
      <path d="M 1020 120 C 1100 120, 1120 180, 1180 180" fill="none" stroke="#C6F432" stroke-width="3" />

      <g transform="translate(30, 120)">
        <rect x="0" y="0" width="200" height="120" rx="12" fill="#1B1B26" stroke="#FF5A1F" stroke-width="2" />
        <rect x="0" y="0" width="200" height="34" rx="12" fill="#FF5A1F" />
        <text x="16" y="22" font-family="monospace" font-size="11" fill="#0E0E12" font-weight="800">WEBHOOK TRIGGER</text>
        <text x="16" y="60" font-family="sans-serif" font-size="13" fill="#F4F2EB" font-weight="700">HubSpot &amp; Stripe Event</text>
        <text x="16" y="80" font-family="monospace" font-size="10" fill="#8E8E96">Listen on POST /v1/lead</text>
        <text x="16" y="100" font-family="monospace" font-size="10" fill="#C6F432">✓ Active (24,190 Runs)</text>
      </g>

      <g transform="translate(420, 120)">
        <rect x="0" y="0" width="220" height="120" rx="12" fill="#1B1B26" stroke="#C6F432" stroke-width="2" />
        <rect x="0" y="0" width="220" height="34" rx="12" fill="#C6F432" />
        <text x="16" y="22" font-family="monospace" font-size="11" fill="#0E0E12" font-weight="800">AUTONOMOUS AGENT</text>
        <text x="16" y="60" font-family="sans-serif" font-size="13" fill="#F4F2EB" font-weight="700">Claude 3.5 Extraction</text>
        <text x="16" y="80" font-family="monospace" font-size="10" fill="#8E8E96">Parse intent, budget, scope</text>
        <text x="16" y="100" font-family="monospace" font-size="10" fill="#C6F432">✓ 340ms Latency • 0 Err</text>
      </g>

      <g transform="translate(800, 60)">
        <rect x="0" y="0" width="220" height="110" rx="12" fill="#1B1B26" stroke="#C6F432" stroke-width="1.5" />
        <rect x="0" y="0" width="220" height="30" rx="12" fill="#262638" />
        <text x="16" y="20" font-family="monospace" font-size="11" fill="#C6F432" font-weight="800">VECTOR MEMORY</text>
        <text x="16" y="55" font-family="sans-serif" font-size="13" fill="#F4F2EB" font-weight="700">PostgreSQL Embeddings</text>
        <text x="16" y="95" font-family="monospace" font-size="10" fill="#C6F432">✓ Match Score: 0.94</text>
      </g>

      <g transform="translate(800, 210)">
        <rect x="0" y="0" width="220" height="110" rx="12" fill="#1B1B26" stroke="#5B8DEF" stroke-width="1.5" />
        <rect x="0" y="0" width="220" height="30" rx="12" fill="#262638" />
        <text x="16" y="20" font-family="monospace" font-size="11" fill="#5B8DEF" font-weight="800">ROUTER CONDITION</text>
        <text x="16" y="55" font-family="sans-serif" font-size="13" fill="#F4F2EB" font-weight="700">Qualify: Enterprise Tier</text>
        <text x="16" y="95" font-family="monospace" font-size="10" fill="#5B8DEF">✓ True Branch Taken</text>
      </g>

      <g transform="translate(1180, 120)">
        <rect x="0" y="0" width="190" height="120" rx="12" fill="#1B1B26" stroke="#C6F432" stroke-width="2" />
        <rect x="0" y="0" width="190" height="34" rx="12" fill="#C6F432" />
        <text x="16" y="22" font-family="monospace" font-size="11" fill="#0E0E12" font-weight="800">OUTPUT ACTION</text>
        <text x="16" y="60" font-family="sans-serif" font-size="13" fill="#F4F2EB" font-weight="700">Slack VIP Alert</text>
        <text x="16" y="80" font-family="monospace" font-size="10" fill="#8E8E96">Cal.com Invite Sent</text>
        <text x="16" y="100" font-family="monospace" font-size="10" fill="#C6F432">✓ Pipeline Finished</text>
      </g>

      <g transform="translate(30, 390)">
        <rect x="0" y="0" width="1332" height="230" rx="8" fill="#0D0D12" stroke="#22222E" />
        <text x="24" y="30" font-family="monospace" font-size="12" fill="#F4F2EB" font-weight="700">LIVE WORKFLOW EXECUTION STREAM // n8n v1.62 ENTERPRISE</text>
        <text x="24" y="75" font-family="monospace" font-size="12" fill="#C6F432">20:51:14.281 [SUCCESS] Execution #98421 took 320ms. Webhook parsed 14 parameters.</text>
        <text x="24" y="105" font-family="monospace" font-size="12" fill="#F4F2EB">20:51:14.390 [LLM_AGENT] Extracted client intent: "Headless Shopify Plus &amp; Mobile App". Confidence: 99.4%</text>
        <text x="24" y="135" font-family="monospace" font-size="12" fill="#5B8DEF">20:51:14.510 [DB_WRITE] Synced contact to PostgreSQL vector cluster. Distance: 0.12.</text>
        <text x="24" y="165" font-family="monospace" font-size="12" fill="#C6F432">20:51:14.600 [DELIVERY] Slack notification dispatched to #leads-vip. Calendar booking link created.</text>
      </g>
    </g>
  </g>
`;

// 5. HELVETIA REAL ESTATE
const helvetiaVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#101014" stroke="#262630" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">HELVETIA PRIME // FRACTIONAL REAL ESTATE MARKETPLACE</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#C6F432" text-anchor="end">ZURICH • DUBAI • 8.4% APY YIELD • SWISS FINMA COMPLIANT</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#22222A" />

    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="880" height="650" rx="10" fill="#161620" stroke="#282838" />
      <polygon points="100,480 100,200 440,200 440,480" fill="#22222E" stroke="#F4F2EB" stroke-width="2" />
      <polygon points="440,200 780,240 780,480 440,480" fill="#1A1A24" stroke="#F4F2EB" stroke-width="2" />
      <rect x="160" y="240" width="80" height="90" fill="#5B8DEF" fill-opacity="0.3" stroke="#5B8DEF" />
      <rect x="280" y="240" width="80" height="90" fill="#5B8DEF" fill-opacity="0.3" stroke="#5B8DEF" />
      <rect x="520" y="270" width="90" height="80" fill="#5B8DEF" fill-opacity="0.3" stroke="#5B8DEF" />

      <rect x="40" y="40" width="280" height="90" rx="8" fill="#0C0C10" stroke="#2A2A38" />
      <text x="60" y="70" font-family="sans-serif" font-size="18" fill="#F4F2EB" font-weight="800">ZURICH LAKEFRONT VILLA</text>
      <text x="60" y="95" font-family="monospace" font-size="12" fill="#C6F432">ASSET VALUATION: CHF 14.8M</text>
      <text x="60" y="115" font-family="monospace" font-size="11" fill="#8E8E96">FRACTIONS FUNDED: 94%</text>
    </g>

    <g transform="translate(950, 85)">
      <rect x="0" y="0" width="482" height="650" rx="10" fill="#14141C" stroke="#282838" />
      <text x="30" y="40" font-family="sans-serif" font-size="18" fill="#F4F2EB" font-weight="800">INVESTMENT CALCULATOR</text>
      <g transform="translate(30, 80)">
        <rect x="0" y="0" width="422" height="70" rx="6" fill="#1D1D2A" />
        <text x="20" y="30" font-family="monospace" font-size="11" fill="#8E8E96">INVESTMENT AMOUNT</text>
        <text x="20" y="55" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">$50,000 USD</text>

        <rect x="0" y="90" width="422" height="70" rx="6" fill="#1D1D2A" />
        <text x="20" y="120" font-family="monospace" font-size="11" fill="#8E8E96">PROJECTED ANNUAL YIELD</text>
        <text x="20" y="145" font-family="sans-serif" font-size="22" fill="#C6F432" font-weight="800">$4,200 / YR (8.4%)</text>
      </g>
      <rect x="30" y="420" width="422" height="52" rx="26" fill="#C6F432" />
      <text x="241" y="452" font-family="sans-serif" font-size="14" fill="#0E0E12" font-weight="800" text-anchor="middle">ACQUIRE FRACTIONAL DEED</text>
    </g>
  </g>
`;

// 6. PULSECARE TELEHEALTH
const pulseVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0F1216" stroke="#222C38" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">PULSECARE // HIPAA-COMPLIANT TELEHEALTH CLINIC &amp; EHR</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#5B8DEF" text-anchor="end">WEBRTC E2E ENCRYPTED • 2.4M CONSULTATIONS • REAL-TIME VITALS</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#1D2330" />

    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="860" height="650" rx="10" fill="#141A22" stroke="#243040" />
      <rect x="30" y="30" width="800" height="420" rx="12" fill="#0A0E14" />
      <circle cx="430" cy="210" r="70" fill="#182230" stroke="#5B8DEF" stroke-width="2" />
      <text x="430" y="320" font-family="sans-serif" font-size="16" fill="#F4F2EB" font-weight="700" text-anchor="middle">Dr. Sarah Jenkins, MD (Cardiology)</text>
      <text x="430" y="345" font-family="monospace" font-size="12" fill="#C6F432" text-anchor="middle">● LIVE 1080p ENCRYPTED SESSION (00:14:22)</text>
      
      <!-- Patient Vitals Overlay -->
      <rect x="50" y="50" width="220" height="90" rx="8" fill="#101824" stroke="#243040" />
      <text x="65" y="75" font-family="monospace" font-size="10" fill="#8E8E96">HEART RATE</text>
      <text x="65" y="105" font-family="sans-serif" font-size="24" fill="#FF5F56" font-weight="800">72 BPM</text>
      <text x="160" y="105" font-family="sans-serif" font-size="18" fill="#5B8DEF" font-weight="700">120/80</text>
    </g>

    <g transform="translate(930, 85)">
      <rect x="0" y="0" width="502" height="650" rx="10" fill="#131822" stroke="#243040" />
      <text x="30" y="40" font-family="sans-serif" font-size="18" fill="#F4F2EB" font-weight="800">ELECTRONIC HEALTH RECORD</text>
      <g transform="translate(30, 80)">
        <text x="0" y="20" font-family="monospace" font-size="12" fill="#8E8E96">PATIENT: Alexander Vance (Age 34)</text>
        <text x="0" y="60" font-family="sans-serif" font-size="14" fill="#F4F2EB">Diagnosis: Mild Hypertension (Stage 1)</text>
        <rect x="0" y="90" width="442" height="80" rx="6" fill="#1A2230" />
        <text x="20" y="125" font-family="monospace" font-size="12" fill="#C6F432">E-PRESCRIPTION ISSUED TO APOTHEKE ZURICH</text>
      </g>
      <rect x="30" y="460" width="442" height="52" rx="26" fill="#5B8DEF" />
      <text x="251" y="492" font-family="sans-serif" font-size="14" fill="#0E0E12" font-weight="800" text-anchor="middle">COMPLETE CONSULTATION &amp; SYNC</text>
    </g>
  </g>
`;

// 7. MONOLITH WATCHES
const monolithVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0C0C0E" stroke="#222228" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">MONOLITH GENEVE // HAUTE HORLOGERIE DIGITAL VAULT</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#D4AF37" text-anchor="end">NFC TAMPER-PROOF • BLOCKCHAIN PROVENANCE • ESCROW</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#1E1E24" />

    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="940" height="650" rx="10" fill="#121216" stroke="#24242E" />
      <circle cx="470" cy="325" r="180" fill="#181820" stroke="#D4AF37" stroke-width="3" />
      <circle cx="470" cy="325" r="160" fill="#0E0E12" stroke="#2A2A36" stroke-width="1.5" />
      <line x1="470" y1="325" x2="470" y2="200" stroke="#F4F2EB" stroke-width="4" />
      <line x1="470" y1="325" x2="570" y2="325" stroke="#D4AF37" stroke-width="3" />
      <circle cx="470" cy="325" r="10" fill="#D4AF37" />
      <text x="470" y="420" font-family="sans-serif" font-size="14" fill="#F4F2EB" font-weight="700" text-anchor="middle">PERPETUAL CALENDAR CHRONO</text>
    </g>

    <g transform="translate(1010, 85)">
      <rect x="0" y="0" width="422" height="650" rx="10" fill="#14141A" stroke="#262634" />
      <text x="30" y="40" font-family="sans-serif" font-size="18" fill="#F4F2EB" font-weight="800">DIGITAL PASSPORT</text>
      <g transform="translate(30, 80)">
        <text x="0" y="20" font-family="monospace" font-size="11" fill="#8E8E96">SERIAL: #MTH-2024-008</text>
        <text x="0" y="55" font-family="sans-serif" font-size="20" fill="#F4F2EB" font-weight="800">CHF 184,000</text>
        <rect x="0" y="80" width="362" height="80" rx="6" fill="#1C1C26" />
        <text x="20" y="115" font-family="monospace" font-size="11" fill="#C6F432">✓ NFC CRYPTOGRAPHIC CHIP VERIFIED</text>
        <text x="20" y="135" font-family="monospace" font-size="11" fill="#8E8E96">INSURED SWISS ARMORED VAULT</text>
      </g>
    </g>
  </g>
`;

// 8. AEROJET PRIVATE CHARTER
const aeroVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0C0E14" stroke="#1E2432" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">AEROJET INTERNATIONAL // PRIVATE JET CHARTER DISPATCH</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#5B8DEF" text-anchor="end">RADAR ADS-B TELEMETRY • GULFSTREAM G650ER • EMPTY LEGS</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#1A202C" />

    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="940" height="650" rx="10" fill="#10141E" stroke="#1E2638" />
      <path d="M 120 380 Q 400 120, 820 220" fill="none" stroke="#5B8DEF" stroke-width="3" stroke-dasharray="6 4" />
      <circle cx="120" cy="380" r="8" fill="#5B8DEF" />
      <text x="120" y="410" font-family="monospace" font-size="11" fill="#F4F2EB">GENEVA (GVA)</text>
      <circle cx="820" cy="220" r="8" fill="#C6F432" />
      <text x="820" y="250" font-family="monospace" font-size="11" fill="#F4F2EB">DUBAI (DWC)</text>
      <polygon points="460,200 480,210 450,225" fill="#F4F2EB" />
      <text x="460" y="180" font-family="monospace" font-size="11" fill="#C6F432">FLIGHT AJ-402 • MACH 0.90 • 41,000 FT</text>
    </g>

    <g transform="translate(1010, 85)">
      <rect x="0" y="0" width="422" height="650" rx="10" fill="#121622" stroke="#1E2638" />
      <text x="30" y="40" font-family="sans-serif" font-size="18" fill="#F4F2EB" font-weight="800">EMPTY LEG SPECIAL</text>
      <text x="30" y="80" font-family="sans-serif" font-size="20" fill="#C6F432" font-weight="800">$28,500 <tspan font-size="12" fill="#8E8E96">FLAT RATE</tspan></text>
      <text x="30" y="110" font-family="monospace" font-size="11" fill="#8E8E96">Normal: $54,000 • 12 Passengers</text>
    </g>
  </g>
`;

// 9. VOLTFLEET LOGISTICS
const voltVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0E1210" stroke="#1E2822" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">VOLTFLEET // LAST-MILE EV LOGISTICS DISPATCH TOWER</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#C6F432" text-anchor="end">4,500+ ELECTRIC VANS • -22% ROUTE LATENCY</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#1A241C" />

    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="1392" height="650" rx="10" fill="#121814" stroke="#1E2A20" />
      <text x="30" y="40" font-family="monospace" font-size="13" fill="#C6F432">ACTIVE TELEMATICS NETWORK (ZURICH • FRANKFURT • AMSTERDAM)</text>
      <circle cx="320" cy="240" r="14" fill="#C6F432" />
      <circle cx="580" cy="180" r="14" fill="#C6F432" />
      <circle cx="840" cy="310" r="14" fill="#C6F432" />
      <circle cx="1120" cy="220" r="14" fill="#C6F432" />
      <line x1="320" y1="240" x2="580" y2="180" stroke="#C6F432" stroke-width="2" />
      <line x1="580" y1="180" x2="840" y2="310" stroke="#C6F432" stroke-width="2" />
      <line x1="840" y1="310" x2="1120" y2="220" stroke="#C6F432" stroke-width="2" />
    </g>
  </g>
`;

// 10. NEXUS SMART HOME & ENERGY
const nexusVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0C1014" stroke="#1E2632" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">NEXUS ENERGY // SMART IOT TELEMETRY &amp; TARIFF ARBITRAGE</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#00F0FF" text-anchor="end">SOLAR MICRO-INVERTERS • BATTERY GRID ARBITRAGE</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#1A202A" />

    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="1392" height="650" rx="10" fill="#10151C" stroke="#1E2836" />
      <path d="M 40 450 Q 300 120, 600 350 T 1200 180" fill="none" stroke="#00F0FF" stroke-width="3" />
      <text x="40" y="50" font-family="sans-serif" font-size="28" fill="#F4F2EB" font-weight="800">14.8 kWh Generated Today</text>
      <text x="40" y="80" font-family="monospace" font-size="12" fill="#C6F432">+$4.20 Grid Arbitrage Net Credit</text>
    </g>
  </g>
`;

// 11. SOLARIS RESORTS
const solarisVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0E1214" stroke="#1E262A" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">SOLARIS LUXURY RESORTS // EDITORIAL BOOKING SUITE</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#FFBD2E" text-anchor="end">MALDIVES &amp; SWISS ALPS • MICHELIN DINING SUITES</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#182024" />

    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="1392" height="650" rx="10" fill="#12181C" stroke="#1C262C" />
      <text x="40" y="50" font-family="sans-serif" font-size="26" fill="#F4F2EB" font-weight="800">OVERWATER CORAL PAVILION // VILLA 14</text>
      <text x="40" y="80" font-family="monospace" font-size="12" fill="#FFBD2E">$3,200 / NIGHT • SEAPLANE TRANSFER INCLUDED</text>
    </g>
  </g>
`;

// Include previous 5 project visuals (Aura, Velocity, Synthesis, Lumen, Strata)
const auraVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#141416" stroke="#2A2A30" stroke-width="1.5" />
    <text x="40" y="55" font-family="sans-serif" font-size="28" fill="#F4F2EB" font-weight="800">AURA SPATIAL DESIGN // MONOGRAPH 04</text>
    <text x="1432" y="55" font-family="monospace" font-size="12" fill="#8E8E96" text-anchor="end">VALS, SWITZERLAND • 46.6190° N, 9.1812° E</text>
    <line x1="40" y1="75" x2="1432" y2="75" stroke="#26262F" />

    <g transform="translate(40, 100)">
      <rect x="0" y="0" width="600" height="630" rx="8" fill="#0E0E10" stroke="#26262F" />
      <polygon points="80,520 80,260 220,260 220,520" fill="#1C1C22" stroke="#F4F2EB" stroke-width="2" />
      <polygon points="180,260 520,260 520,320 220,320" fill="#24242C" stroke="#F4F2EB" stroke-width="2.5" />
      <rect x="220" y="320" width="220" height="200" fill="#5B8DEF" fill-opacity="0.1" stroke="#5B8DEF" />
    </g>
    <g transform="translate(680, 100)">
      <rect x="0" y="0" width="752" height="630" rx="8" fill="#1A1A22" stroke="#2A2A32" />
      <text x="60" y="75" font-family="sans-serif" font-size="18" fill="#F4F2EB" font-weight="700">VALS CANTILEVER RESIDENCE</text>
      <text x="60" y="125" font-family="monospace" font-size="12" fill="#C6F432">AWWWARDS SITE OF THE DAY • 100/100</text>
    </g>
  </g>
`;

const velocityVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0C0C10" stroke="#222228" stroke-width="1.5" />
    <text x="40" y="50" font-family="sans-serif" font-size="24" fill="#F4F2EB" font-weight="800">VELOCITY V-01 HYPER-EV</text>
    <text x="360" y="50" font-family="monospace" font-size="12" fill="#FF5A1F" font-weight="700">3D WEBGL ENGINE // 60 FPS PBR</text>
    <g transform="translate(140, 180)">
      <ellipse cx="500" cy="300" rx="480" ry="140" fill="none" stroke="#2A2A34" stroke-width="1.5" stroke-dasharray="6 6" />
      <circle cx="280" cy="310" r="52" fill="#16161D" stroke="#FF5A1F" stroke-width="3" />
      <circle cx="720" cy="310" r="52" fill="#16161D" stroke="#FF5A1F" stroke-width="3" />
      <polygon points="160,300 210,260 360,250 480,180 660,180 780,240 860,260 880,300 780,310 720,270 660,310 340,310 280,270 220,310" fill="#1F1F28" stroke="#F4F2EB" stroke-width="2" />
    </g>
  </g>
`;

const synthesisVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#111116" stroke="#262630" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">SYNTHESIS GENERATIVE AUDIO ENGINE // DAW PRO</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#C6F432" text-anchor="end">48kHz / 32-BIT FLOAT • SPATIAL 7.1.4 DOLBY ATMOS</text>
    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="940" height="420" rx="8" fill="#16161D" stroke="#26262F" />
      <path d="M 230 48 Q 280 20, 330 48 T 430 48 T 530 48 T 630 48 T 730 48" fill="none" stroke="#C6F432" stroke-width="3" />
      <path d="M 230 152 Q 260 120, 290 152 T 350 152 T 410 152" fill="none" stroke="#5B8DEF" stroke-width="2" />
    </g>
  </g>
`;

const lumenVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#141416" stroke="#26262F" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">LUMEN BOTANICALS // ZURICH LABORATORY</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#FF5A1F" text-anchor="end">HEADLESS SHOPIFY PLUS • CART CONVERSION +214%</text>
    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="860" height="650" rx="10" fill="#181820" stroke="#26262E" />
      <rect x="365" y="250" width="130" height="190" rx="20" fill="#4A2610" stroke="#D97706" stroke-width="2" />
    </g>
    <g transform="translate(930, 85)">
      <rect x="0" y="0" width="502" height="650" rx="10" fill="#16161D" stroke="#26262F" />
      <text x="32" y="40" font-family="sans-serif" font-size="18" fill="#F4F2EB" font-weight="800">PURCHASE RITUAL</text>
      <text x="32" y="200" font-family="monospace" font-size="20" fill="#C6F432" font-weight="800">$165.00 USD</text>
    </g>
  </g>
`;

const strataVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0F1116" stroke="#222834" stroke-width="1.5" />
    <text x="40" y="45" font-family="sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">STRATA GLOBAL CAPITAL // ANNUAL MACRO-INTELLIGENCE</text>
    <text x="1432" y="45" font-family="monospace" font-size="12" fill="#5B8DEF" text-anchor="end">AUM: $1.8B • 14 SOVEREIGN LPs</text>
    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="900" height="420" rx="8" fill="#131722" stroke="#222834" />
      <path d="M 120 260 Q 300 80, 520 180 T 820 100" fill="none" stroke="#5B8DEF" stroke-width="3" />
      <circle cx="340" cy="140" r="16" fill="#C6F432" />
      <text x="340" y="115" font-family="monospace" font-size="11" fill="#C6F432" text-anchor="middle">ZURICH HUB ($640M)</text>
    </g>
  </g>
`;

// Service Visuals
const webServiceVisual = kronosVisual;
const mobileServiceVisual = apexRentalVisual;

// 16 Full Case Studies Project Definitions
const allProjects = [
  { file: 'project-kronos', title: 'Kronos Terminal', sub: 'High-Frequency Trading Visualization', accent: '#C6F432', cat: 'CASE STUDY 01 // FINTECH', visual: kronosVisual },
  { file: 'project-aura', title: 'Aura Architects', sub: 'Spatial Monograph & Concrete Architecture', accent: '#F4F2EB', cat: 'CASE STUDY 02 // ARCHITECTURE', visual: auraVisual },
  { file: 'project-velocity', title: 'Velocity Labs', sub: '3D Hyper-EV Real-Time Configurator', accent: '#FF5A1F', cat: 'CASE STUDY 03 // 3D WEBGL', visual: velocityVisual },
  { file: 'project-apex', title: 'Apex Drive Mobility', sub: 'Luxury Supercar Rental & Keyless App', accent: '#C6F432', cat: 'CASE STUDY 04 // CAR RENTAL & APPS', visual: apexRentalVisual },
  { file: 'project-omni', title: 'OmniCore Cloud ERP', sub: 'Enterprise Logistics & Financial Dashboard', accent: '#5B8DEF', cat: 'CASE STUDY 05 // ENTERPRISE ERP', visual: omniErpVisual },
  { file: 'project-automata', title: 'Automata Intelligence', sub: 'Autonomous n8n Agent Workflow Pipeline', accent: '#FF5A1F', cat: 'CASE STUDY 06 // APPLIED AI & n8n', visual: automataVisual },
  { file: 'project-synthesis', title: 'Synthesis Audio', sub: 'Spatial Audio Cloud DAW Workstation', accent: '#C6F432', cat: 'CASE STUDY 07 // AI AUDIO', visual: synthesisVisual },
  { file: 'project-lumen', title: 'Lumen Botanicals', sub: 'Luxury Headless Skincare E-Commerce', accent: '#FF5A1F', cat: 'CASE STUDY 08 // E-COMMERCE', visual: lumenVisual },
  { file: 'project-strata', title: 'Strata Capital', sub: 'Sovereign Macro-Intelligence Briefing', accent: '#5B8DEF', cat: 'CASE STUDY 09 // VENTURE CAPITAL', visual: strataVisual },
  { file: 'project-helvetia', title: 'Helvetia Prime', sub: 'Fractional Real Estate Investment Portal', accent: '#C6F432', cat: 'CASE STUDY 10 // FINTECH & REAL ESTATE', visual: helvetiaVisual },
  { file: 'project-pulse', title: 'PulseCare Health', sub: 'Encrypted Telemedicine Clinic & EHR System', accent: '#5B8DEF', cat: 'CASE STUDY 11 // HEALTHCARE', visual: pulseVisual },
  { file: 'project-monolith', title: 'Monolith Horology', sub: 'Luxury Watch Vault & NFC Provenance', accent: '#FFBD2E', cat: 'CASE STUDY 12 // LUXURY E-COMM', visual: monolithVisual },
  { file: 'project-aero', title: 'AeroJet Private', sub: 'On-Demand Aviation & Radar Dispatch Engine', accent: '#5B8DEF', cat: 'CASE STUDY 13 // AVIATION & TRAVEL', visual: aeroVisual },
  { file: 'project-volt', title: 'VoltFleet Dispatch', sub: 'Electric Last-Mile Logistics Control Hub', accent: '#C6F432', cat: 'CASE STUDY 14 // SAAS & FLEET', visual: voltVisual },
  { file: 'project-nexus', title: 'Nexus Smart Grid', sub: 'Edge IoT Telemetry & Dynamic Energy Grid', accent: '#00F0FF', cat: 'CASE STUDY 15 // CLEANTECH IOT', visual: nexusVisual },
  { file: 'project-solaris', title: 'Solaris Resorts', sub: 'Ultra-Luxury Hospitality Reservation Suite', accent: '#FFBD2E', cat: 'CASE STUDY 16 // HOSPITALITY', visual: solarisVisual },
];

const allServices = [
  { file: 'service-web', title: 'Web Development', sub: 'Next.js 15, React, HTML5, Framer, Webflow', accent: '#C6F432', cat: 'PILLAR 01 // ENGINEERING', visual: kronosVisual },
  { file: 'service-ecommerce', title: 'E-Commerce Engineering', sub: 'Shopify Plus, Headless Commerce, Custom Checkout', accent: '#FF5A1F', cat: 'PILLAR 02 // E-COMMERCE', visual: lumenVisual },
  { file: 'service-mobile', title: 'Mobile App Development', sub: 'React Native, Native iOS Swift, Android Kotlin', accent: '#C6F432', cat: 'PILLAR 03 // MOBILE APPS', visual: apexRentalVisual },
  { file: 'service-game', title: 'Game Development & WebGL', sub: 'Three.js, Unity 3D, Custom Shaders, Spatial XR', accent: '#FF5A1F', cat: 'PILLAR 04 // 3D & GAMES', visual: velocityVisual },
  { file: 'service-branding', title: 'Branding & UI/UX Design', sub: 'Editorial Systems, Design Tokens, Spatial Typography', accent: '#F4F2EB', cat: 'PILLAR 05 // DESIGN SYSTEMS', visual: auraVisual },
  { file: 'service-ai', title: 'AI & Autonomous Engineering', sub: 'Custom LLMs, n8n Agent Pipelines, Vector DB', accent: '#C6F432', cat: 'PILLAR 06 // APPLIED AI', visual: automataVisual },
  { file: 'service-growth', title: 'Growth Marketing & SEO', sub: 'Real-Time Conversions, Semantic SEO, Attribution', accent: '#5B8DEF', cat: 'PILLAR 07 // GROWTH', visual: strataVisual },
  { file: 'service-cloud', title: 'Cloud Infrastructure & DevOps', sub: 'AWS, Cloudflare Edge, Docker, Kubernetes', accent: '#C6F432', cat: 'PILLAR 08 // DEVOPS', visual: omniErpVisual },
];

async function generateAll() {
  const combined = [...allProjects, ...allServices];
  console.log(`Starting generation of ${combined.length} items (both SVG and PNG)...`);

  for (const item of combined) {
    const svgStr = createSVG(item.title, item.sub, item.accent, item.cat, item.visual);
    const svgPath = path.join(imgDir, `${item.file}.svg`);
    const pngPath = path.join(imgDir, `${item.file}.png`);

    // Write SVG
    fs.writeFileSync(svgPath, svgStr, 'utf8');

    // Convert to PNG with Sharp
    const svgBuf = Buffer.from(svgStr);
    await sharp(svgBuf)
      .png({ quality: 95 })
      .toFile(pngPath);

    console.log(`✓ Generated: ${item.file}.svg & ${item.file}.png`);
  }

  console.log('🎉 Successfully generated all projects & services in pristine PNG and SVG formats!');
}

generateAll().catch(err => {
  console.error('Fatal generation error:', err);
  process.exit(1);
});
