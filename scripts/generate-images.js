const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

function createSVG(title, subtitle, accentColor, category, visualSvg) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
  <defs>
    <radialGradient id="bgGlow_${title.replace(/\s+/g, '')}" cx="50%" cy="40%" r="75%">
      <stop offset="0%" stop-color="#18181E" stop-opacity="1" />
      <stop offset="60%" stop-color="#101013" stop-opacity="1" />
      <stop offset="100%" stop-color="#08080A" stop-opacity="1" />
    </radialGradient>
    <radialGradient id="spotlight_${title.replace(/\s+/g, '')}" cx="60%" cy="35%" r="50%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.18" />
      <stop offset="100%" stop-color="${accentColor}" stop-opacity="0" />
    </radialGradient>
    <pattern id="gridPattern_${title.replace(/\s+/g, '')}" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#26262B" stroke-width="0.7" stroke-opacity="0.5" />
    </pattern>
    <linearGradient id="cardGrad_${title.replace(/\s+/g, '')}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1C1C22" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#121216" stop-opacity="0.95" />
    </linearGradient>
    <linearGradient id="glassGrad_${title.replace(/\s+/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.01" />
    </linearGradient>
    <filter id="shadow_${title.replace(/\s+/g, '')}" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.65" />
    </filter>
  </defs>

  <!-- Background Layer -->
  <rect width="100%" height="100%" fill="url(#bgGlow_${title.replace(/\s+/g, '')})" />
  <rect width="100%" height="100%" fill="url(#gridPattern_${title.replace(/\s+/g, '')})" />
  <rect width="100%" height="100%" fill="url(#spotlight_${title.replace(/\s+/g, '')})" />

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
  <text x="64" y="70" font-family="'JetBrains Mono', 'Courier New', monospace" font-size="12" fill="${accentColor}" letter-spacing="3" font-weight="700">INCORELAB // DIGITAL PRODUCT STUDIO</text>
  <text x="1536" y="70" font-family="'JetBrains Mono', 'Courier New', monospace" font-size="12" fill="#7E7E86" letter-spacing="3" text-anchor="end" font-weight="600">${category}</text>

  <!-- Main UI Dashboard / App Scene Viewport -->
  <g transform="translate(64, 96)">
    ${visualSvg}
  </g>

  <!-- Bottom Editorial Caption Bar -->
  <line x1="30" y1="910" x2="1570" y2="910" stroke="#26262C" stroke-width="1" />
  <text x="64" y="948" font-family="'Inter', -apple-system, BlinkMacSystemFont, sans-serif" font-size="28" fill="#F4F2EB" font-weight="700" letter-spacing="-0.5">${title}</text>
  <text x="1536" y="948" font-family="'JetBrains Mono', 'Courier New', monospace" font-size="13" fill="#8E8E96" letter-spacing="2" text-anchor="end">${subtitle}</text>
</svg>`;
}

// ==========================================
// 1. PROJECT: KRONOS TERMINAL (High-Frequency Trading Dashboard)
// ==========================================
const kronosProjectVisual = `
  <g>
    <!-- Main Dashboard Container with Glass Shadow -->
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#121216" stroke="#2A2A32" stroke-width="1.5" />
    
    <!-- Top Navigation Window Bar -->
    <rect x="0" y="0" width="1472" height="52" rx="14" fill="#181820" />
    <rect x="0" y="40" width="1472" height="12" fill="#181820" />
    <line x1="0" y1="52" x2="1472" y2="52" stroke="#26262F" stroke-width="1" />
    
    <!-- Window Controls -->
    <circle cx="28" cy="26" r="6" fill="#FF5F56" />
    <circle cx="48" cy="26" r="6" fill="#FFBD2E" />
    <circle cx="68" cy="26" r="6" fill="#27C93F" />
    <text x="110" y="31" font-family="'JetBrains Mono', monospace" font-size="13" fill="#F4F2EB" font-weight="700">KRONOS TERMINAL PRO // v4.8</text>
    <rect x="360" y="14" width="90" height="24" rx="4" fill="#C6F432" fill-opacity="0.15" />
    <text x="405" y="30" font-family="'JetBrains Mono', monospace" font-size="11" fill="#C6F432" font-weight="700" text-anchor="middle">LIVE 120 FPS</text>
    
    <!-- Right Top Telemetry -->
    <text x="1150" y="31" font-family="'JetBrains Mono', monospace" font-size="12" fill="#8E8E96">FEED: NYSE / NASDAQ / BINANCE</text>
    <circle cx="1380" cy="26" r="4" fill="#C6F432" />
    <text x="1450" y="31" font-family="'JetBrains Mono', monospace" font-size="12" fill="#C6F432" font-weight="700" text-anchor="end">LATENCY: 0.8ms</text>

    <!-- Left Sidebar: Watchlist / Pairs -->
    <rect x="0" y="52" width="240" height="728" fill="#15151A" />
    <line x1="240" y1="52" x2="240" y2="780" stroke="#26262F" stroke-width="1" />
    <text x="24" y="85" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96" font-weight="700">ACTIVE INSTRUMENTS</text>
    
    <!-- Pair 1: BTC/USD -->
    <rect x="12" y="104" width="216" height="56" rx="6" fill="#1C1C24" stroke="#C6F432" stroke-width="1" />
    <text x="24" y="128" font-family="'Inter', sans-serif" font-size="14" fill="#F4F2EB" font-weight="700">BTC / USD</text>
    <text x="24" y="148" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">VOL: $4.2B</text>
    <text x="216" y="128" font-family="'JetBrains Mono', monospace" font-size="13" fill="#C6F432" font-weight="700" text-anchor="end">$96,420.50</text>
    <text x="216" y="148" font-family="'JetBrains Mono', monospace" font-size="11" fill="#C6F432" text-anchor="end">+4.82%</text>

    <!-- Pair 2: ETH/USD -->
    <rect x="12" y="168" width="216" height="56" rx="6" fill="#181820" stroke="#26262F" />
    <text x="24" y="192" font-family="'Inter', sans-serif" font-size="14" fill="#F4F2EB" font-weight="600">ETH / USD</text>
    <text x="24" y="212" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">VOL: $1.9B</text>
    <text x="216" y="192" font-family="'JetBrains Mono', monospace" font-size="13" fill="#F4F2EB" text-anchor="end">$3,540.20</text>
    <text x="216" y="212" font-family="'JetBrains Mono', monospace" font-size="11" fill="#C6F432" text-anchor="end">+2.15%</text>

    <!-- Pair 3: NVDA -->
    <rect x="12" y="232" width="216" height="56" rx="6" fill="#181820" stroke="#26262F" />
    <text x="24" y="256" font-family="'Inter', sans-serif" font-size="14" fill="#F4F2EB" font-weight="600">NVDA CORP</text>
    <text x="24" y="276" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">VOL: $3.1B</text>
    <text x="216" y="256" font-family="'JetBrains Mono', monospace" font-size="13" fill="#F4F2EB" text-anchor="end">$142.80</text>
    <text x="216" y="276" font-family="'JetBrains Mono', monospace" font-size="11" fill="#FF5F56" text-anchor="end">-0.45%</text>

    <!-- Pair 4: AAPL -->
    <rect x="12" y="296" width="216" height="56" rx="6" fill="#181820" stroke="#26262F" />
    <text x="24" y="320" font-family="'Inter', sans-serif" font-size="14" fill="#F4F2EB" font-weight="600">AAPL INC</text>
    <text x="24" y="340" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">VOL: $1.4B</text>
    <text x="216" y="320" font-family="'JetBrains Mono', monospace" font-size="13" fill="#F4F2EB" text-anchor="end">$228.40</text>
    <text x="216" y="340" font-family="'JetBrains Mono', monospace" font-size="11" fill="#C6F432" text-anchor="end">+1.12%</text>

    <!-- Center Top: Main Candlestick Chart Area -->
    <g transform="translate(260, 70)">
      <!-- Chart Controls Header -->
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">BTC / USD PERPETUAL CONTRACT</text>
      <text x="0" y="44" font-family="'JetBrains Mono', monospace" font-size="13" fill="#C6F432" font-weight="700">INDEX: 96,420.50 USD  |  HIGH: 97,100.00  |  LOW: 94,820.00  |  24H VOL: $14.2B</text>
      
      <!-- Timeframe Pills -->
      <g transform="translate(680, 0)">
        <rect x="0" y="0" width="40" height="24" rx="4" fill="#26262F" />
        <text x="20" y="16" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96" text-anchor="middle">1M</text>
        <rect x="48" y="0" width="40" height="24" rx="4" fill="#26262F" />
        <text x="68" y="16" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96" text-anchor="middle">5M</text>
        <rect x="96" y="0" width="40" height="24" rx="4" fill="#C6F432" />
        <text x="116" y="16" font-family="'JetBrains Mono', monospace" font-size="11" fill="#121216" font-weight="700" text-anchor="middle">15M</text>
        <rect x="144" y="0" width="40" height="24" rx="4" fill="#26262F" />
        <text x="164" y="16" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96" text-anchor="middle">1H</text>
        <rect x="192" y="0" width="40" height="24" rx="4" fill="#26262F" />
        <text x="212" y="16" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96" text-anchor="middle">1D</text>
      </g>

      <!-- Chart Grid & Candles -->
      <rect x="0" y="60" width="900" height="420" rx="8" fill="#0E0E12" stroke="#26262F" />
      <!-- Grid lines -->
      <line x1="0" y1="140" x2="900" y2="140" stroke="#1A1A22" stroke-dasharray="4 4" />
      <line x1="0" y1="220" x2="900" y2="220" stroke="#1A1A22" stroke-dasharray="4 4" />
      <line x1="0" y1="300" x2="900" y2="300" stroke="#1A1A22" stroke-dasharray="4 4" />
      <line x1="0" y1="380" x2="900" y2="380" stroke="#1A1A22" stroke-dasharray="4 4" />
      <line x1="200" y1="60" x2="200" y2="480" stroke="#1A1A22" stroke-dasharray="4 4" />
      <line x1="450" y1="60" x2="450" y2="480" stroke="#1A1A22" stroke-dasharray="4 4" />
      <line x1="700" y1="60" x2="700" y2="480" stroke="#1A1A22" stroke-dasharray="4 4" />

      <!-- Exponential Moving Average Lines -->
      <path d="M 20 320 Q 200 280, 400 240 T 700 160 T 880 120" fill="none" stroke="#5B8DEF" stroke-width="2" />
      <path d="M 20 340 Q 220 310, 420 270 T 720 190 T 880 140" fill="none" stroke="#C6F432" stroke-width="2.5" />

      <!-- Candlesticks (Sequence of realistic green & red candles) -->
      <!-- Green 1 -->
      <line x1="50" y1="290" x2="50" y2="370" stroke="#C6F432" stroke-width="1.5" />
      <rect x="44" y="310" width="12" height="45" fill="#C6F432" rx="2" />
      <!-- Red 2 -->
      <line x1="90" y1="310" x2="90" y2="380" stroke="#FF5F56" stroke-width="1.5" />
      <rect x="84" y="325" width="12" height="35" fill="#FF5F56" rx="2" />
      <!-- Green 3 -->
      <line x1="130" y1="270" x2="130" y2="350" stroke="#C6F432" stroke-width="1.5" />
      <rect x="124" y="285" width="12" height="50" fill="#C6F432" rx="2" />
      <!-- Green 4 -->
      <line x1="170" y1="240" x2="170" y2="320" stroke="#C6F432" stroke-width="1.5" />
      <rect x="164" y="255" width="12" height="40" fill="#C6F432" rx="2" />
      <!-- Red 5 -->
      <line x1="210" y1="260" x2="210" y2="330" stroke="#FF5F56" stroke-width="1.5" />
      <rect x="204" y="270" width="12" height="35" fill="#FF5F56" rx="2" />
      <!-- Green 6 -->
      <line x1="250" y1="220" x2="250" y2="300" stroke="#C6F432" stroke-width="1.5" />
      <rect x="244" y="235" width="12" height="55" fill="#C6F432" rx="2" />
      <!-- Green 7 -->
      <line x1="290" y1="190" x2="290" y2="270" stroke="#C6F432" stroke-width="1.5" />
      <rect x="284" y="210" width="12" height="45" fill="#C6F432" rx="2" />
      <!-- Red 8 -->
      <line x1="330" y1="210" x2="330" y2="280" stroke="#FF5F56" stroke-width="1.5" />
      <rect x="324" y="220" width="12" height="30" fill="#FF5F56" rx="2" />
      <!-- Green 9 (Big Bullish Surge) -->
      <line x1="370" y1="160" x2="370" y2="250" stroke="#C6F432" stroke-width="2" />
      <rect x="362" y="175" width="16" height="60" fill="#C6F432" rx="2" />
      <!-- Green 10 -->
      <line x1="420" y1="140" x2="420" y2="220" stroke="#C6F432" stroke-width="1.5" />
      <rect x="414" y="155" width="12" height="45" fill="#C6F432" rx="2" />
      <!-- Red 11 -->
      <line x1="460" y1="150" x2="460" y2="230" stroke="#FF5F56" stroke-width="1.5" />
      <rect x="454" y="165" width="12" height="40" fill="#FF5F56" rx="2" />
      <!-- Green 12 -->
      <line x1="500" y1="130" x2="500" y2="210" stroke="#C6F432" stroke-width="1.5" />
      <rect x="494" y="145" width="12" height="50" fill="#C6F432" rx="2" />
      <!-- Green 13 -->
      <line x1="540" y1="110" x2="540" y2="190" stroke="#C6F432" stroke-width="1.5" />
      <rect x="534" y="125" width="12" height="55" fill="#C6F432" rx="2" />
      <!-- Green 14 -->
      <line x1="580" y1="95" x2="580" y2="175" stroke="#C6F432" stroke-width="1.5" />
      <rect x="574" y="110" width="12" height="50" fill="#C6F432" rx="2" />
      <!-- Red 15 -->
      <line x1="620" y1="115" x2="620" y2="185" stroke="#FF5F56" stroke-width="1.5" />
      <rect x="614" y="125" width="12" height="35" fill="#FF5F56" rx="2" />
      <!-- Green 16 -->
      <line x1="660" y1="90" x2="660" y2="165" stroke="#C6F432" stroke-width="1.5" />
      <rect x="654" y="105" width="12" height="45" fill="#C6F432" rx="2" />
      <!-- Green 17 (Peak Breakout) -->
      <line x1="710" y1="70" x2="710" y2="150" stroke="#C6F432" stroke-width="2" />
      <rect x="702" y="85" width="16" height="50" fill="#C6F432" rx="2" />
      <!-- Green 18 (Current Tick Marker) -->
      <line x1="760" y1="65" x2="760" y2="140" stroke="#C6F432" stroke-width="2" />
      <rect x="752" y="80" width="16" height="45" fill="#C6F432" rx="2" />
      
      <!-- Current Price Cursor Line -->
      <line x1="0" y1="102" x2="900" y2="102" stroke="#C6F432" stroke-width="1.5" stroke-dasharray="6 4" />
      <rect x="800" y="88" width="95" height="26" rx="4" fill="#C6F432" />
      <text x="847" y="105" font-family="'JetBrains Mono', monospace" font-size="12" fill="#121216" font-weight="800" text-anchor="middle">$96,420.50</text>

      <!-- Bottom Volume Histogram -->
      <g transform="translate(0, 410)">
        <rect x="44" y="20" width="12" height="50" fill="#C6F432" fill-opacity="0.5" />
        <rect x="84" y="35" width="12" height="35" fill="#FF5F56" fill-opacity="0.5" />
        <rect x="124" y="15" width="12" height="55" fill="#C6F432" fill-opacity="0.5" />
        <rect x="164" y="28" width="12" height="42" fill="#C6F432" fill-opacity="0.5" />
        <rect x="204" y="40" width="12" height="30" fill="#FF5F56" fill-opacity="0.5" />
        <rect x="244" y="22" width="12" height="48" fill="#C6F432" fill-opacity="0.5" />
        <rect x="284" y="18" width="12" height="52" fill="#C6F432" fill-opacity="0.5" />
        <rect x="362" y="5" width="16" height="65" fill="#C6F432" fill-opacity="0.8" />
        <rect x="534" y="10" width="12" height="60" fill="#C6F432" fill-opacity="0.6" />
        <rect x="702" y="2" width="16" height="68" fill="#C6F432" fill-opacity="0.9" />
        <rect x="752" y="6" width="16" height="64" fill="#C6F432" fill-opacity="0.9" />
      </g>
    </g>

    <!-- Right Column: Live Order Book Depth -->
    <g transform="translate(1180, 70)">
      <rect x="0" y="0" width="270" height="480" rx="8" fill="#15151A" stroke="#26262F" />
      <text x="16" y="28" font-family="'JetBrains Mono', monospace" font-size="12" fill="#F4F2EB" font-weight="700">ORDER BOOK (L2)</text>
      <text x="16" y="52" font-family="'JetBrains Mono', monospace" font-size="10" fill="#8E8E96">PRICE (USD)     SIZE       TOTAL</text>
      
      <!-- Asks (Red) -->
      <rect x="150" y="65" width="105" height="18" fill="#FF5F56" fill-opacity="0.15" />
      <text x="16" y="78" font-family="'JetBrains Mono', monospace" font-size="11" fill="#FF5F56">96,445.00</text>
      <text x="110" y="78" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">1.480</text>
      <text x="250" y="78" font-family="'JetBrains Mono', monospace" font-size="11" fill="#F4F2EB" text-anchor="end">142.7k</text>

      <rect x="170" y="90" width="85" height="18" fill="#FF5F56" fill-opacity="0.15" />
      <text x="16" y="103" font-family="'JetBrains Mono', monospace" font-size="11" fill="#FF5F56">96,438.50</text>
      <text x="110" y="103" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">0.820</text>
      <text x="250" y="103" font-family="'JetBrains Mono', monospace" font-size="11" fill="#F4F2EB" text-anchor="end">79.0k</text>

      <rect x="130" y="115" width="125" height="18" fill="#FF5F56" fill-opacity="0.25" />
      <text x="16" y="128" font-family="'JetBrains Mono', monospace" font-size="11" fill="#FF5F56">96,429.00</text>
      <text x="110" y="128" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">3.940</text>
      <text x="250" y="128" font-family="'JetBrains Mono', monospace" font-size="11" fill="#F4F2EB" text-anchor="end">379.8k</text>

      <!-- Spread Indicator -->
      <line x1="16" y1="145" x2="254" y2="145" stroke="#C6F432" stroke-width="1" />
      <text x="135" y="162" font-family="'JetBrains Mono', monospace" font-size="12" fill="#C6F432" font-weight="700" text-anchor="middle">SPREAD: $1.50 (0.001%)</text>
      <line x1="16" y1="175" x2="254" y2="175" stroke="#C6F432" stroke-width="1" />

      <!-- Bids (Green) -->
      <rect x="110" y="190" width="145" height="18" fill="#C6F432" fill-opacity="0.25" />
      <text x="16" y="203" font-family="'JetBrains Mono', monospace" font-size="11" fill="#C6F432">96,420.50</text>
      <text x="110" y="203" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">5.120</text>
      <text x="250" y="203" font-family="'JetBrains Mono', monospace" font-size="11" fill="#F4F2EB" text-anchor="end">493.6k</text>

      <rect x="140" y="215" width="115" height="18" fill="#C6F432" fill-opacity="0.18" />
      <text x="16" y="228" font-family="'JetBrains Mono', monospace" font-size="11" fill="#C6F432">96,412.00</text>
      <text x="110" y="228" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">2.310</text>
      <text x="250" y="228" font-family="'JetBrains Mono', monospace" font-size="11" fill="#F4F2EB" text-anchor="end">222.7k</text>

      <rect x="180" y="240" width="75" height="18" fill="#C6F432" fill-opacity="0.12" />
      <text x="16" y="253" font-family="'JetBrains Mono', monospace" font-size="11" fill="#C6F432">96,405.00</text>
      <text x="110" y="253" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">1.190</text>
      <text x="250" y="253" font-family="'JetBrains Mono', monospace" font-size="11" fill="#F4F2EB" text-anchor="end">114.7k</text>
    </g>

    <!-- Bottom Panel: Execution Log & Risk Telemetry -->
    <g transform="translate(260, 570)">
      <rect x="0" y="0" width="1190" height="190" rx="8" fill="#15151A" stroke="#26262F" />
      <text x="20" y="28" font-family="'JetBrains Mono', monospace" font-size="12" fill="#F4F2EB" font-weight="700">AUTONOMOUS EXECUTION LOG &amp; RISK HEALTH</text>
      <line x1="20" y1="42" x2="1170" y2="42" stroke="#26262F" />

      <!-- Row 1 -->
      <text x="20" y="70" font-family="'JetBrains Mono', monospace" font-size="12" fill="#8E8E96">14:02:19.421</text>
      <rect x="130" y="56" width="60" height="20" rx="3" fill="#C6F432" />
      <text x="160" y="70" font-family="'JetBrains Mono', monospace" font-size="11" fill="#121216" font-weight="800" text-anchor="middle">BUY</text>
      <text x="210" y="70" font-family="'JetBrains Mono', monospace" font-size="12" fill="#F4F2EB">BTC/USD PERP  •  QTY: 1.4000  •  PRICE: $96,419.50  •  SLIPPAGE: 0.0002%  •  EXECUTION: 0.74ms</text>
      <text x="1150" y="70" font-family="'JetBrains Mono', monospace" font-size="12" fill="#C6F432" font-weight="700" text-anchor="end">FILLED</text>

      <!-- Row 2 -->
      <text x="20" y="105" font-family="'JetBrains Mono', monospace" font-size="12" fill="#8E8E96">14:02:18.102</text>
      <rect x="130" y="91" width="60" height="20" rx="3" fill="#C6F432" />
      <text x="160" y="105" font-family="'JetBrains Mono', monospace" font-size="11" fill="#121216" font-weight="800" text-anchor="middle">BUY</text>
      <text x="210" y="105" font-family="'JetBrains Mono', monospace" font-size="12" fill="#F4F2EB">ETH/USD PERP  •  QTY: 18.500  •  PRICE: $3,539.80  •  SLIPPAGE: 0.0001%  •  EXECUTION: 0.81ms</text>
      <text x="1150" y="105" font-family="'JetBrains Mono', monospace" font-size="12" fill="#C6F432" font-weight="700" text-anchor="end">FILLED</text>

      <!-- Row 3 -->
      <text x="20" y="140" font-family="'JetBrains Mono', monospace" font-size="12" fill="#8E8E96">14:02:15.890</text>
      <rect x="130" y="126" width="60" height="20" rx="3" fill="#FF5F56" />
      <text x="160" y="140" font-family="'JetBrains Mono', monospace" font-size="11" fill="#F4F2EB" font-weight="800" text-anchor="middle">SELL</text>
      <text x="210" y="140" font-family="'JetBrains Mono', monospace" font-size="12" fill="#F4F2EB">SOL/USD PERP  •  QTY: 84.000  •  PRICE: $214.20   •  SLIPPAGE: 0.0004%  •  EXECUTION: 0.69ms</text>
      <text x="1150" y="140" font-family="'JetBrains Mono', monospace" font-size="12" fill="#C6F432" font-weight="700" text-anchor="end">FILLED</text>

      <text x="20" y="172" font-family="'JetBrains Mono', monospace" font-size="11" fill="#C6F432">✦ TOTAL SESSION ALPHA: +$42,840.00  |  ACTIVE RISK MARGIN: 14.8%  |  MAX DRAWDOWN: 0.02%</text>
    </g>
  </g>
`;

// ==========================================
// 2. PROJECT: AURA ARCHITECTS (Luxury Architectural Monograph & Pavilion)
// ==========================================
const auraProjectVisual = `
  <g>
    <!-- Architectural Monograph Canvas -->
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#141416" stroke="#2A2A30" stroke-width="1.5" />

    <!-- Top Editorial Header -->
    <text x="40" y="55" font-family="'Inter', sans-serif" font-size="28" fill="#F4F2EB" font-weight="800" letter-spacing="-1">AURA SPATIAL DESIGN // MONOGRAPH 04</text>
    <text x="1432" y="55" font-family="'JetBrains Mono', monospace" font-size="12" fill="#8E8E96" text-anchor="end">VALS, SWITZERLAND • 46.6190° N, 9.1812° E</text>
    <line x1="40" y1="75" x2="1432" y2="75" stroke="#26262F" />

    <!-- Left Architectural Blueprint / Elevation Wireframe -->
    <g transform="translate(40, 100)">
      <rect x="0" y="0" width="600" height="630" rx="8" fill="#0E0E10" stroke="#26262F" />
      <text x="24" y="36" font-family="'JetBrains Mono', monospace" font-size="12" fill="#F4F2EB" font-weight="700">ELEVATION SECTION &amp; SUN STUDY</text>
      <text x="24" y="56" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">SCALE: 1:50  |  SOLAR AZIMUTH: 214°  |  BÉTON BRUT</text>
      
      <!-- Golden Ratio Proportions & Dimension Lines -->
      <line x1="50" y1="120" x2="550" y2="120" stroke="#3A3A44" stroke-dasharray="4 4" />
      <line x1="50" y1="360" x2="550" y2="360" stroke="#3A3A44" stroke-dasharray="4 4" />
      <line x1="50" y1="520" x2="550" y2="520" stroke="#F4F2EB" stroke-width="2" />
      
      <!-- Concrete Cantilever Pavilion Form -->
      <polygon points="80,520 80,260 220,260 220,520" fill="#1C1C22" stroke="#F4F2EB" stroke-width="2" />
      <polygon points="180,260 520,260 520,320 220,320" fill="#24242C" stroke="#F4F2EB" stroke-width="2.5" />
      
      <!-- Glass Glazing Panels with Ambient Reflections -->
      <rect x="220" y="320" width="220" height="200" fill="#5B8DEF" fill-opacity="0.1" stroke="#5B8DEF" stroke-width="1.5" />
      <line x1="275" y1="320" x2="275" y2="520" stroke="#5B8DEF" stroke-width="1" />
      <line x1="330" y1="320" x2="330" y2="520" stroke="#5B8DEF" stroke-width="1" />
      <line x1="385" y1="320" x2="385" y2="520" stroke="#5B8DEF" stroke-width="1" />

      <!-- Reflection Pool Underneath -->
      <rect x="80" y="520" width="440" height="40" fill="#5B8DEF" fill-opacity="0.2" />
      <line x1="80" y1="520" x2="520" y2="520" stroke="#5B8DEF" stroke-width="1" />

      <!-- Dimension Callouts -->
      <text x="350" y="245" font-family="'JetBrains Mono', monospace" font-size="11" fill="#F4F2EB" text-anchor="middle">32.4m CANTILEVER SPAN</text>
      <text x="545" y="420" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">h: 6.8m</text>
      
      <!-- Material Tags -->
      <g transform="translate(24, 575)">
        <rect x="0" y="0" width="130" height="28" rx="4" fill="#181820" stroke="#3A3A44" />
        <text x="65" y="18" font-family="'JetBrains Mono', monospace" font-size="11" fill="#F4F2EB" text-anchor="middle">RAW CONCRETE</text>
        
        <rect x="145" y="0" width="130" height="28" rx="4" fill="#181820" stroke="#3A3A44" />
        <text x="210" y="18" font-family="'JetBrains Mono', monospace" font-size="11" fill="#F4F2EB" text-anchor="middle">NORDIC GRANITE</text>

        <rect x="290" y="0" width="130" height="28" rx="4" fill="#181820" stroke="#3A3A44" />
        <text x="355" y="18" font-family="'JetBrains Mono', monospace" font-size="11" fill="#F4F2EB" text-anchor="middle">LOW-IRON GLASS</text>
      </g>
    </g>

    <!-- Right 3D Spatial Rendering / Photography Presentation -->
    <g transform="translate(680, 100)">
      <rect x="0" y="0" width="752" height="630" rx="8" fill="#1A1A22" stroke="#2A2A32" />
      
      <!-- Light Gradient and Architectural Atmosphere -->
      <polygon points="0,0 752,0 752,630 0,630" fill="url(#cardGrad_AuraArchitects)" />
      
      <!-- Monolithic Structure Shading -->
      <polygon points="100,500 100,180 320,180 320,500" fill="#2E2E38" />
      <polygon points="320,180 680,240 680,310 320,250" fill="#3D3D4A" />
      <polygon points="320,250 680,310 680,500 320,500" fill="#1C1C24" />

      <!-- Diagonal Sunlight Beam -->
      <polygon points="200,0 450,0 680,500 400,500" fill="#FFFFFF" fill-opacity="0.04" />

      <!-- Minimal Typography Block -->
      <rect x="40" y="40" width="340" height="120" rx="6" fill="#0E0E12" fill-opacity="0.85" stroke="#26262F" />
      <text x="60" y="75" font-family="'Inter', sans-serif" font-size="18" fill="#F4F2EB" font-weight="700">VALS CANTILEVER RESIDENCE</text>
      <text x="60" y="100" font-family="'JetBrains Mono', monospace" font-size="12" fill="#8E8E96">COMPLETION: 2024 • AURA STUDIO</text>
      <text x="60" y="125" font-family="'JetBrains Mono', monospace" font-size="12" fill="#C6F432">AWWWARDS SITE OF THE DAY • 100/100</text>
    </g>
  </g>
`;

// ==========================================
// 3. PROJECT: VELOCITY LABS (3D Hypercar Configurator)
// ==========================================
const velocityProjectVisual = `
  <g>
    <!-- Dark Studio Configurator Canvas -->
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0C0C10" stroke="#222228" stroke-width="1.5" />
    
    <!-- Top 3D Viewport Bar -->
    <text x="40" y="50" font-family="'Inter', sans-serif" font-size="24" fill="#F4F2EB" font-weight="800">VELOCITY V-01 HYPER-EV</text>
    <text x="360" y="50" font-family="'JetBrains Mono', monospace" font-size="12" fill="#FF5A1F" font-weight="700">3D WEBGL ENGINE // 60 FPS PBR</text>
    <line x1="40" y1="70" x2="1432" y2="70" stroke="#1E1E26" />

    <!-- 3D Orbit Camera Wireframe Grid Floor -->
    <g transform="translate(140, 180)">
      <ellipse cx="500" cy="300" rx="480" ry="140" fill="none" stroke="#2A2A34" stroke-width="1.5" stroke-dasharray="6 6" />
      <ellipse cx="500" cy="300" rx="320" ry="90" fill="none" stroke="#FF5A1F" stroke-opacity="0.3" stroke-width="1" />
      
      <!-- Hypercar Profile Silhouette & Shading (Exotic Cyber-Aero Hypercar) -->
      <!-- Wheels -->
      <circle cx="280" cy="310" r="52" fill="#16161D" stroke="#FF5A1F" stroke-width="3" />
      <circle cx="280" cy="310" r="32" fill="#0C0C10" stroke="#F4F2EB" stroke-width="1.5" />
      <circle cx="720" cy="310" r="52" fill="#16161D" stroke="#FF5A1F" stroke-width="3" />
      <circle cx="720" cy="310" r="32" fill="#0C0C10" stroke="#F4F2EB" stroke-width="1.5" />

      <!-- Hypercar Bodywork Polygon Paths -->
      <polygon points="160,300 210,260 360,250 480,180 660,180 780,240 860,260 880,300 780,310 720,270 660,310 340,310 280,270 220,310" fill="#1F1F28" stroke="#F4F2EB" stroke-width="2" />
      
      <!-- Carbon Fiber Cockpit Canopy -->
      <polygon points="460,245 520,185 640,185 680,245" fill="#FF5A1F" fill-opacity="0.25" stroke="#FF5A1F" stroke-width="2" />

      <!-- Rear Aero Active Wing -->
      <line x1="840" y1="210" x2="890" y2="210" stroke="#FF5A1F" stroke-width="4" />
      <line x1="860" y1="210" x2="860" y2="260" stroke="#F4F2EB" stroke-width="2" />

      <!-- LED Headlight / Tail light Glow -->
      <path d="M 160 295 L 210 295" stroke="#00F0FF" stroke-width="4" />
      <path d="M 860 265 L 880 270" stroke="#FF3B30" stroke-width="4" />

      <!-- Interactive 3D Orbit Node Pins -->
      <circle cx="360" cy="220" r="10" fill="#FF5A1F" />
      <circle cx="360" cy="220" r="20" fill="none" stroke="#FF5A1F" stroke-width="1.5" stroke-dasharray="4 4" />
      <rect x="385" y="205" width="140" height="28" rx="4" fill="#14141A" stroke="#FF5A1F" />
      <text x="455" y="223" font-family="'JetBrains Mono', monospace" font-size="11" fill="#F4F2EB" text-anchor="middle">CARBON FIBER SPLITTER</text>

      <circle cx="680" cy="180" r="10" fill="#00F0FF" />
      <rect x="705" y="165" width="150" height="28" rx="4" fill="#14141A" stroke="#00F0FF" />
      <text x="780" y="183" font-family="'JetBrains Mono', monospace" font-size="11" fill="#F4F2EB" text-anchor="middle">ACTIVE AERO FLAPS</text>
    </g>

    <!-- Right Configurator Customization Controls Bar -->
    <g transform="translate(1080, 90)">
      <rect x="0" y="0" width="350" height="640" rx="10" fill="#14141A" stroke="#2A2A34" />
      <text x="24" y="36" font-family="'Inter', sans-serif" font-size="16" fill="#F4F2EB" font-weight="700">SPECIFICATION STUDIO</text>
      
      <!-- Color Picker -->
      <text x="24" y="70" font-family="'JetBrains Mono', monospace" font-size="12" fill="#8E8E96">EXTERIOR BESPOKE LIVERY</text>
      <circle cx="40" cy="100" r="16" fill="#1A1A22" stroke="#FF5A1F" stroke-width="2.5" />
      <circle cx="85" cy="100" r="16" fill="#FF5A1F" stroke="#2A2A34" stroke-width="1.5" />
      <circle cx="130" cy="100" r="16" fill="#C6F432" stroke="#2A2A34" stroke-width="1.5" />
      <circle cx="175" cy="100" r="16" fill="#F4F2EB" stroke="#2A2A34" stroke-width="1.5" />

      <line x1="24" y1="135" x2="326" y2="135" stroke="#22222A" />

      <!-- Performance Specs Grid -->
      <text x="24" y="165" font-family="'JetBrains Mono', monospace" font-size="12" fill="#8E8E96">DYNAMIC TELEMETRY</text>
      
      <rect x="24" y="180" width="140" height="70" rx="6" fill="#1A1A24" />
      <text x="40" y="210" font-family="'Inter', sans-serif" font-size="22" fill="#FF5A1F" font-weight="800">1.84s</text>
      <text x="40" y="234" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">0-100 KM/H</text>

      <rect x="186" y="180" width="140" height="70" rx="6" fill="#1A1A24" />
      <text x="202" y="210" font-family="'Inter', sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">440</text>
      <text x="202" y="234" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">TOP KM/H</text>

      <rect x="24" y="265" width="140" height="70" rx="6" fill="#1A1A24" />
      <text x="40" y="295" font-family="'Inter', sans-serif" font-size="22" fill="#C6F432" font-weight="800">1,900</text>
      <text x="40" y="319" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">HORSEPOWER</text>

      <rect x="186" y="265" width="140" height="70" rx="6" fill="#1A1A24" />
      <text x="202" y="295" font-family="'Inter', sans-serif" font-size="22" fill="#5B8DEF" font-weight="800">800V</text>
      <text x="202" y="319" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">ARCHITECTURE</text>

      <line x1="24" y1="360" x2="326" y2="360" stroke="#22222A" />

      <!-- Pre-Order CTA Button -->
      <rect x="24" y="550" width="302" height="52" rx="26" fill="#FF5A1F" />
      <text x="175" y="582" font-family="'Inter', sans-serif" font-size="14" fill="#0E0E12" font-weight="800" text-anchor="middle">LOCK IN CONFIGURATION — $42M ALLOCATED</text>
    </g>
  </g>
`;

// ==========================================
// 4. PROJECT: SYNTHESIS AUDIO (Spatial Audio Cloud DAW)
// ==========================================
const synthesisProjectVisual = `
  <g>
    <!-- Cloud DAW Workstation Interface -->
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#111116" stroke="#262630" stroke-width="1.5" />
    
    <!-- Top DAW Menu Bar -->
    <text x="40" y="45" font-family="'Inter', sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">SYNTHESIS GENERATIVE AUDIO ENGINE // DAW PRO</text>
    <text x="1432" y="45" font-family="'JetBrains Mono', monospace" font-size="12" fill="#C6F432" text-anchor="end">48kHz / 32-BIT FLOAT • SPATIAL 7.1.4 DOLBY ATMOS</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#22222A" />

    <!-- Left DAW Multitrack Viewport -->
    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="940" height="420" rx="8" fill="#16161D" stroke="#26262F" />
      
      <!-- Track 01: Sub Bass AI -->
      <rect x="0" y="0" width="220" height="95" fill="#1C1C24" stroke="#26262F" />
      <text x="20" y="38" font-family="'JetBrains Mono', monospace" font-size="13" fill="#F4F2EB" font-weight="700">01 // NEURAL SUB-BASS</text>
      <text x="20" y="62" font-family="'JetBrains Mono', monospace" font-size="11" fill="#C6F432">AI SYNTHESIS • 32Hz</text>
      <!-- Track 1 Waveform -->
      <path d="M 230 48 Q 280 20, 330 48 T 430 48 T 530 48 T 630 48 T 730 48 T 830 48 T 930 48" fill="none" stroke="#C6F432" stroke-width="3" />

      <!-- Track 02: Granular Texture -->
      <rect x="0" y="105" width="220" height="95" fill="#1C1C24" stroke="#26262F" />
      <text x="20" y="143" font-family="'JetBrains Mono', monospace" font-size="13" fill="#F4F2EB" font-weight="700">02 // GRANULAR RES</text>
      <text x="20" y="167" font-family="'JetBrains Mono', monospace" font-size="11" fill="#5B8DEF">GRAIN: 12ms • DENSITY 8</text>
      <!-- Track 2 Waveform -->
      <path d="M 230 152 Q 260 120, 290 152 T 350 152 T 410 152 T 470 152 T 530 152 T 590 152 T 650 152 T 710 152 T 770 152 T 830 152 T 890 152" fill="none" stroke="#5B8DEF" stroke-width="2" />

      <!-- Track 03: Spatial Vocal Resynthesis -->
      <rect x="0" y="210" width="220" height="95" fill="#1C1C24" stroke="#26262F" />
      <text x="20" y="248" font-family="'JetBrains Mono', monospace" font-size="13" fill="#F4F2EB" font-weight="700">03 // SPATIAL VOCALS</text>
      <text x="20" y="272" font-family="'JetBrains Mono', monospace" font-size="11" fill="#FF5A1F">3D POSITION: +34°, -12°</text>
      <!-- Track 3 Waveform -->
      <path d="M 230 257 Q 270 220, 310 257 T 390 257 T 470 257 T 550 257 T 630 257 T 710 257 T 790 257 T 870 257" fill="none" stroke="#FF5A1F" stroke-width="2.5" />

      <!-- Track 04: Impulse Reverberation -->
      <rect x="0" y="315" width="220" height="95" fill="#1C1C24" stroke="#26262F" />
      <text x="20" y="353" font-family="'JetBrains Mono', monospace" font-size="13" fill="#F4F2EB" font-weight="700">04 // IMPULSE REVERB</text>
      <text x="20" y="377" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">SPACE: ZURICH CATHEDRAL</text>
      <!-- Track 4 Waveform Decay -->
      <path d="M 230 362 Q 280 330, 330 362 T 430 362 T 530 362 T 630 362 T 730 362 T 830 362 T 930 362" fill="none" stroke="#F4F2EB" stroke-width="1.5" stroke-opacity="0.6" />
      
      <!-- Playhead Scrub Line -->
      <line x1="580" y1="0" x2="580" y2="420" stroke="#C6F432" stroke-width="2" />
      <polygon points="572,0 588,0 580,14" fill="#C6F432" />
    </g>

    <!-- Right 3D Spatial Audio Positioning Sphere -->
    <g transform="translate(1010, 85)">
      <rect x="0" y="0" width="422" height="420" rx="8" fill="#16161D" stroke="#26262F" />
      <text x="24" y="36" font-family="'JetBrains Mono', monospace" font-size="12" fill="#F4F2EB" font-weight="700">BINAURAL 360° SPATIAL FIELD</text>
      
      <!-- Concentric Spherical Orbit Rings -->
      <circle cx="211" cy="220" r="140" fill="none" stroke="#2A2A38" stroke-width="1.5" />
      <circle cx="211" cy="220" r="90" fill="none" stroke="#3A3A4A" stroke-width="1" stroke-dasharray="4 4" />
      <circle cx="211" cy="220" r="40" fill="none" stroke="#C6F432" stroke-width="1.5" />

      <!-- Center Listener Node -->
      <circle cx="211" cy="220" r="10" fill="#F4F2EB" />
      <text x="211" y="245" font-family="'JetBrains Mono', monospace" font-size="10" fill="#8E8E96" text-anchor="middle">LISTENER</text>

      <!-- Spatial Sound Sources -->
      <circle cx="160" cy="140" r="8" fill="#C6F432" />
      <text x="160" y="125" font-family="'JetBrains Mono', monospace" font-size="10" fill="#C6F432" text-anchor="middle">BASS (L)</text>

      <circle cx="280" cy="160" r="8" fill="#5B8DEF" />
      <text x="280" y="145" font-family="'JetBrains Mono', monospace" font-size="10" fill="#5B8DEF" text-anchor="middle">TEXTURE (R)</text>

      <circle cx="230" cy="310" r="8" fill="#FF5A1F" />
      <text x="230" y="332" font-family="'JetBrains Mono', monospace" font-size="10" fill="#FF5A1F" text-anchor="middle">VOCAL (REAR)</text>
    </g>

    <!-- Bottom Audio Mastering Hardware Rack -->
    <g transform="translate(40, 525)">
      <rect x="0" y="0" width="1392" height="220" rx="8" fill="#14141A" stroke="#26262F" />
      <text x="24" y="32" font-family="'JetBrains Mono', monospace" font-size="12" fill="#F4F2EB" font-weight="700">ANALOG-MODELED MASTERING CONSOLE</text>

      <!-- Rotary Knobs (Rotary Frequencies) -->
      <g transform="translate(60, 60)">
        <circle cx="40" cy="40" r="30" fill="#1E1E28" stroke="#C6F432" stroke-width="3" />
        <line x1="40" y1="40" x2="58" y2="22" stroke="#C6F432" stroke-width="3" />
        <text x="40" y="90" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96" text-anchor="middle">RESONANCE</text>

        <circle cx="160" cy="40" r="30" fill="#1E1E28" stroke="#5B8DEF" stroke-width="3" />
        <line x1="160" y1="40" x2="140" y2="20" stroke="#5B8DEF" stroke-width="3" />
        <text x="160" y="90" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96" text-anchor="middle">CUTOFF</text>

        <circle cx="280" cy="40" r="30" fill="#1E1E28" stroke="#FF5A1F" stroke-width="3" />
        <line x1="280" y1="40" x2="300" y2="25" stroke="#FF5A1F" stroke-width="3" />
        <text x="280" y="90" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96" text-anchor="middle">DRIVE</text>

        <circle cx="400" cy="40" r="30" fill="#1E1E28" stroke="#F4F2EB" stroke-width="3" />
        <line x1="400" y1="40" x2="400" y2="15" stroke="#F4F2EB" stroke-width="3" />
        <text x="400" y="90" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96" text-anchor="middle">AIR SHELF</text>
      </g>

      <!-- Real-Time Frequency Spectrum Visualizer (FFT Bars) -->
      <g transform="translate(560, 50)">
        <rect x="0" y="0" width="560" height="120" rx="6" fill="#0C0C10" stroke="#22222A" />
        <!-- 20 Spectrum Analyzer Bars -->
        <rect x="20" y="80" width="16" height="35" fill="#C6F432" />
        <rect x="45" y="60" width="16" height="55" fill="#C6F432" />
        <rect x="70" y="40" width="16" height="75" fill="#C6F432" />
        <rect x="95" y="25" width="16" height="90" fill="#C6F432" />
        <rect x="120" y="35" width="16" height="80" fill="#C6F432" />
        <rect x="145" y="50" width="16" height="65" fill="#5B8DEF" />
        <rect x="170" y="65" width="16" height="50" fill="#5B8DEF" />
        <rect x="195" y="45" width="16" height="70" fill="#5B8DEF" />
        <rect x="220" y="30" width="16" height="85" fill="#5B8DEF" />
        <rect x="245" y="40" width="16" height="75" fill="#5B8DEF" />
        <rect x="270" y="55" width="16" height="60" fill="#FF5A1F" />
        <rect x="295" y="70" width="16" height="45" fill="#FF5A1F" />
        <rect x="320" y="50" width="16" height="65" fill="#FF5A1F" />
        <rect x="345" y="65" width="16" height="50" fill="#FF5A1F" />
        <rect x="370" y="80" width="16" height="35" fill="#FF5A1F" />
        <rect x="395" y="90" width="16" height="25" fill="#F4F2EB" />
        <rect x="420" y="95" width="16" height="20" fill="#F4F2EB" />
        <rect x="445" y="100" width="16" height="15" fill="#F4F2EB" />
        <text x="280" y="140" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96" text-anchor="middle">REAL-TIME SPECTRAL FFT (20Hz - 20kHz)</text>
      </g>
    </g>
  </g>
`;

// ==========================================
// 5. PROJECT: LUMEN BOTANICALS (Headless Luxury Skincare Storefront)
// ==========================================
const lumenProjectVisual = `
  <g>
    <!-- Luxury Headless Storefront Interface -->
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#141416" stroke="#26262F" stroke-width="1.5" />
    
    <!-- Editorial E-Commerce Header -->
    <text x="40" y="45" font-family="'Inter', sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">LUMEN BOTANICALS // ZURICH LABORATORY</text>
    <text x="1432" y="45" font-family="'JetBrains Mono', monospace" font-size="12" fill="#FF5A1F" text-anchor="end">HEADLESS SHOPIFY PLUS • CART CONVERSION +214%</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#22222A" />

    <!-- Left Product Hero Showcase -->
    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="860" height="650" rx="10" fill="#181820" stroke="#26262E" />
      
      <!-- Amber Glass Pipette Dropper Serum Bottle Illustration -->
      <g transform="translate(430, 280)">
        <!-- Shadow Base -->
        <ellipse cx="0" cy="180" rx="120" ry="25" fill="#0A0A0C" fill-opacity="0.6" />
        
        <!-- Amber Glass Bottle Body -->
        <rect x="-65" y="-30" width="130" height="190" rx="20" fill="#4A2610" stroke="#D97706" stroke-width="2" />
        
        <!-- Liquid Serum Level -->
        <rect x="-60" y="20" width="120" height="135" rx="16" fill="#B45309" fill-opacity="0.8" />
        
        <!-- Minimalist White Swiss Product Label -->
        <rect x="-50" y="20" width="100" height="110" rx="4" fill="#F4F2EB" />
        <text x="0" y="48" font-family="'Inter', sans-serif" font-size="11" fill="#0E0E12" font-weight="900" text-anchor="middle">LUMEN</text>
        <text x="0" y="64" font-family="'JetBrains Mono', monospace" font-size="8" fill="#4B5563" text-anchor="middle">CELLULAR EXTRACT</text>
        <line x1="-30" y1="72" x2="30" y2="72" stroke="#D1D5DB" />
        <text x="0" y="90" font-family="'JetBrains Mono', monospace" font-size="9" fill="#0E0E12" font-weight="700" text-anchor="middle">50 ML / 1.7 FL OZ</text>
        <text x="0" y="105" font-family="'JetBrains Mono', monospace" font-size="7" fill="#6B7280" text-anchor="middle">SWISS FORMULATION</text>

        <!-- Dropper Cap Neck -->
        <rect x="-35" y="-70" width="70" height="40" rx="4" fill="#1C1C24" stroke="#374151" />
        <rect x="-20" y="-115" width="40" height="45" rx="15" fill="#111116" stroke="#4B5563" />
      </g>

      <!-- Product Badges & Clinical Efficacy -->
      <rect x="40" y="40" width="220" height="110" rx="8" fill="#121216" stroke="#26262F" />
      <text x="60" y="70" font-family="'Inter', sans-serif" font-size="14" fill="#F4F2EB" font-weight="700">BIODYNAMIC SQUALANE</text>
      <text x="60" y="92" font-family="'JetBrains Mono', monospace" font-size="11" fill="#C6F432">98.4% ACTIVE RETENTION</text>
      <text x="60" y="114" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">COLD-PRESSED IN VALAIS</text>
    </g>

    <!-- Right Instant Checkout & Cart Ritual Drawer -->
    <g transform="translate(930, 85)">
      <rect x="0" y="0" width="502" height="650" rx="10" fill="#16161D" stroke="#26262F" />
      <text x="32" y="40" font-family="'Inter', sans-serif" font-size="18" fill="#F4F2EB" font-weight="800">PURCHASE RITUAL</text>
      <text x="32" y="65" font-family="'JetBrains Mono', monospace" font-size="12" fill="#8E8E96">GLOBAL PRIORITY EXPRESS DISPATCH</text>
      <line x1="32" y1="85" x2="470" y2="85" stroke="#26262F" />

      <!-- Cart Item Card -->
      <rect x="32" y="110" width="438" height="120" rx="8" fill="#1C1C24" stroke="#2A2A34" />
      <rect x="48" y="125" width="70" height="90" rx="6" fill="#121216" />
      <text x="83" y="175" font-family="'Inter', sans-serif" font-size="18" fill="#D97706" text-anchor="middle">✦</text>

      <text x="135" y="148" font-family="'Inter', sans-serif" font-size="15" fill="#F4F2EB" font-weight="700">Active Cellular Renewal Serum</text>
      <text x="135" y="172" font-family="'JetBrains Mono', monospace" font-size="12" fill="#8E8E96">Size: 50ml  |  Qty: 1  |  Batch: 08-CH</text>
      <text x="135" y="200" font-family="'JetBrains Mono', monospace" font-size="16" fill="#F4F2EB" font-weight="800">$165.00 USD</text>

      <!-- Cart Metrics / Guarantees -->
      <g transform="translate(32, 260)">
        <text x="0" y="20" font-family="'JetBrains Mono', monospace" font-size="12" fill="#8E8E96">SUBTOTAL</text>
        <text x="438" y="20" font-family="'JetBrains Mono', monospace" font-size="12" fill="#F4F2EB" text-anchor="end">$165.00</text>

        <text x="0" y="45" font-family="'JetBrains Mono', monospace" font-size="12" fill="#8E8E96">DUTIES &amp; SWISS VAT</text>
        <text x="438" y="45" font-family="'JetBrains Mono', monospace" font-size="12" fill="#C6F432" text-anchor="end">INCLUDED ($0.00)</text>

        <text x="0" y="70" font-family="'JetBrains Mono', monospace" font-size="12" fill="#8E8E96">EXPRESS AIR DELIVERY</text>
        <text x="438" y="70" font-family="'JetBrains Mono', monospace" font-size="12" fill="#C6F432" text-anchor="end">FREE COMPLIMENTARY</text>

        <line x1="0" y1="90" x2="438" y2="90" stroke="#26262F" />

        <text x="0" y="125" font-family="'Inter', sans-serif" font-size="18" fill="#F4F2EB" font-weight="800">TOTAL</text>
        <text x="438" y="125" font-family="'JetBrains Mono', monospace" font-size="20" fill="#C6F432" font-weight="800" text-anchor="end">$165.00 USD</text>
      </g>

      <!-- Instant Checkout Buttons -->
      <rect x="32" y="440" width="438" height="56" rx="28" fill="#F4F2EB" />
      <text x="251" y="474" font-family="'Inter', sans-serif" font-size="15" fill="#0E0E12" font-weight="800" text-anchor="middle"> PAY WITH APPLE PAY</text>

      <rect x="32" y="510" width="438" height="56" rx="28" fill="#FF5A1F" />
      <text x="251" y="544" font-family="'Inter', sans-serif" font-size="15" fill="#0E0E12" font-weight="800" text-anchor="middle">PROCEED TO SECURE CHECKOUT</text>

      <text x="251" y="605" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96" text-anchor="middle">🔒 256-BIT ENCRYPTION • 30-DAY CELLULAR GUARANTEE</text>
    </g>
  </g>
`;

// ==========================================
// 6. PROJECT: STRATA CAPITAL (Sovereign Wealth Intelligence Briefing)
// ==========================================
const strataProjectVisual = `
  <g>
    <!-- Macro Financial Intelligence Platform -->
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#0F1116" stroke="#222834" stroke-width="1.5" />
    
    <!-- Top Header Bar -->
    <text x="40" y="45" font-family="'Inter', sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">STRATA GLOBAL CAPITAL // ANNUAL MACRO-INTELLIGENCE</text>
    <text x="1432" y="45" font-family="'JetBrains Mono', monospace" font-size="12" fill="#5B8DEF" text-anchor="end">AUM: $1.8B • 14 SOVEREIGN LPs • QUANTUM &amp; FUSION ALLOCATIONS</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#1D2330" />

    <!-- Left Global Capital Flow Heatmap & Infographic -->
    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="900" height="420" rx="8" fill="#131722" stroke="#222834" />
      <text x="24" y="36" font-family="'JetBrains Mono', monospace" font-size="12" fill="#F4F2EB" font-weight="700">CROSS-BORDER CAPITAL CORRIDORS (ZURICH • DUBAI • TOKYO • NY)</text>
      
      <!-- Geopolitical Vector Grid -->
      <line x1="40" y1="120" x2="860" y2="120" stroke="#1D2330" stroke-dasharray="4 4" />
      <line x1="40" y1="220" x2="860" y2="220" stroke="#1D2330" stroke-dasharray="4 4" />
      <line x1="40" y1="320" x2="860" y2="320" stroke="#1D2330" stroke-dasharray="4 4" />

      <!-- Curved Capital Flow Corridors -->
      <path d="M 120 260 Q 300 80, 520 180 T 820 100" fill="none" stroke="#5B8DEF" stroke-width="3" />
      <path d="M 160 310 Q 380 160, 600 240 T 840 180" fill="none" stroke="#C6F432" stroke-width="2.5" />

      <!-- Capital Hub Nodes -->
      <circle cx="120" cy="260" r="14" fill="#5B8DEF" stroke="#F4F2EB" stroke-width="2" />
      <text x="120" y="295" font-family="'JetBrains Mono', monospace" font-size="11" fill="#F4F2EB" text-anchor="middle">NEW YORK ($580M)</text>

      <circle cx="340" cy="140" r="16" fill="#C6F432" stroke="#0E0E12" stroke-width="2" />
      <text x="340" y="115" font-family="'JetBrains Mono', monospace" font-size="11" fill="#C6F432" text-anchor="middle">ZURICH HUB ($640M)</text>

      <circle cx="580" cy="200" r="14" fill="#5B8DEF" stroke="#F4F2EB" stroke-width="2" />
      <text x="580" y="235" font-family="'JetBrains Mono', monospace" font-size="11" fill="#F4F2EB" text-anchor="middle">DUBAI DIFC ($390M)</text>

      <circle cx="820" cy="100" r="12" fill="#FF5A1F" stroke="#F4F2EB" stroke-width="2" />
      <text x="820" y="75" font-family="'JetBrains Mono', monospace" font-size="11" fill="#FF5A1F" text-anchor="middle">TOKYO TECH ($210M)</text>
    </g>

    <!-- Right Portfolio Allocation Donut & Risk Table -->
    <g transform="translate(970, 85)">
      <rect x="0" y="0" width="462" height="420" rx="8" fill="#131722" stroke="#222834" />
      <text x="24" y="36" font-family="'JetBrains Mono', monospace" font-size="12" fill="#F4F2EB" font-weight="700">DEEP TECH ASSET ALLOCATION</text>
      
      <!-- Sector Breakdown List -->
      <g transform="translate(24, 70)">
        <rect x="0" y="0" width="14" height="14" rx="2" fill="#C6F432" />
        <text x="26" y="12" font-family="'Inter', sans-serif" font-size="13" fill="#F4F2EB">Clean Fusion Energy</text>
        <text x="414" y="12" font-family="'JetBrains Mono', monospace" font-size="13" fill="#C6F432" font-weight="700" text-anchor="end">32% ($576M)</text>

        <rect x="0" y="35" width="14" height="14" rx="2" fill="#5B8DEF" />
        <text x="26" y="47" font-family="'Inter', sans-serif" font-size="13" fill="#F4F2EB">Quantum Compute Architectures</text>
        <text x="414" y="47" font-family="'JetBrains Mono', monospace" font-size="13" fill="#5B8DEF" font-weight="700" text-anchor="end">28% ($504M)</text>

        <rect x="0" y="70" width="14" height="14" rx="2" fill="#FF5A1F" />
        <text x="26" y="82" font-family="'Inter', sans-serif" font-size="13" fill="#F4F2EB">Orbital &amp; Space Logistics</text>
        <text x="414" y="82" font-family="'JetBrains Mono', monospace" font-size="13" fill="#FF5A1F" font-weight="700" text-anchor="end">22% ($396M)</text>

        <rect x="0" y="105" width="14" height="14" rx="2" fill="#F4F2EB" />
        <text x="26" y="117" font-family="'Inter', sans-serif" font-size="13" fill="#F4F2EB">Applied Autonomous AI</text>
        <text x="414" y="117" font-family="'JetBrains Mono', monospace" font-size="13" fill="#F4F2EB" font-weight="700" text-anchor="end">18% ($324M)</text>
      </g>

      <line x1="24" y1="230" x2="438" y2="230" stroke="#1D2330" />

      <!-- Key Macro Indicators -->
      <g transform="translate(24, 255)">
        <text x="0" y="20" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">NET REALIZED IRR</text>
        <text x="0" y="50" font-family="'Inter', sans-serif" font-size="24" fill="#C6F432" font-weight="800">+24.8%</text>

        <text x="220" y="20" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">LIQUIDITY HORIZON</text>
        <text x="220" y="50" font-family="'Inter', sans-serif" font-size="24" fill="#F4F2EB" font-weight="800">4.2 YRS</text>

        <text x="0" y="90" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">SHARPE RATIO</text>
        <text x="0" y="120" font-family="'Inter', sans-serif" font-size="24" fill="#5B8DEF" font-weight="800">2.84</text>

        <text x="220" y="90" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">LP DIGITAL ACCESS</text>
        <text x="220" y="120" font-family="'Inter', sans-serif" font-size="24" fill="#FF5A1F" font-weight="800">GATED NDA</text>
      </g>
    </g>

    <!-- Bottom Macro Insights Ticker -->
    <g transform="translate(40, 535)">
      <rect x="0" y="0" width="1392" height="200" rx="8" fill="#131722" stroke="#222834" />
      <text x="24" y="32" font-family="'JetBrains Mono', monospace" font-size="12" fill="#F4F2EB" font-weight="700">MACRO ADVISORY BRIEFING // SUMMARY INSIGHTS</text>
      <line x1="24" y1="46" x2="1368" y2="46" stroke="#1D2330" />
      
      <text x="24" y="80" font-family="'Inter', sans-serif" font-size="15" fill="#F4F2EB" font-weight="600">1. Sovereign Capital Deployment accelerates toward Zero-Emission Fusion Power &amp; Sub-Kelvin Superconducting Qubits.</text>
      <text x="24" y="115" font-family="'Inter', sans-serif" font-size="15" fill="#F4F2EB" font-weight="600">2. Switzerland and UAE strengthen dual regulatory corridors for cross-border tokenized securities and AI compute infrastructure.</text>
      <text x="24" y="150" font-family="'Inter', sans-serif" font-size="15" fill="#F4F2EB" font-weight="600">3. Strata LP Portal provides continuous verified cryptographic audit trails for all institutional stakeholders.</text>
    </g>
  </g>
`;

// ==========================================
// 7. SERVICE: WEB DEVELOPMENT (Next.js 15 & React Split IDE + App)
// ==========================================
const webServiceVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#111116" stroke="#26262F" stroke-width="1.5" />
    <text x="40" y="45" font-family="'Inter', sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">ENGINEERING WORKSPACE // NEXT.JS 15 APP ROUTER</text>
    <text x="1432" y="45" font-family="'JetBrains Mono', monospace" font-size="12" fill="#C6F432" text-anchor="end">SUB-400MS LATENCY • 100/100 CORE WEB VITALS</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#22222A" />

    <!-- Left Editor -->
    <g transform="translate(40, 85)">
      <rect x="0" y="0" width="680" height="650" rx="8" fill="#0C0C0F" stroke="#22222A" />
      <!-- Editor Top Bar -->
      <rect x="0" y="0" width="680" height="40" rx="8" fill="#16161D" />
      <text x="24" y="25" font-family="'JetBrains Mono', monospace" font-size="12" fill="#C6F432">page.tsx</text>
      <text x="140" y="25" font-family="'JetBrains Mono', monospace" font-size="12" fill="#8E8E96">layout.tsx</text>
      <text x="260" y="25" font-family="'JetBrains Mono', monospace" font-size="12" fill="#8E8E96">styles.css</text>

      <!-- Code Lines -->
      <g transform="translate(24, 70)">
        <text x="0" y="0" font-family="'JetBrains Mono', monospace" font-size="14" fill="#FF5A1F">import</text>
        <text x="60" y="0" font-family="'JetBrains Mono', monospace" font-size="14" fill="#F4F2EB">{ Suspense } from &apos;react&apos;;</text>

        <text x="0" y="30" font-family="'JetBrains Mono', monospace" font-size="14" fill="#FF5A1F">import</text>
        <text x="60" y="30" font-family="'JetBrains Mono', monospace" font-size="14" fill="#F4F2EB">{ StreamData } from &apos;@incorelab/core&apos;;</text>

        <text x="0" y="80" font-family="'JetBrains Mono', monospace" font-size="14" fill="#5B8DEF">export default async function</text>
        <text x="265" y="80" font-family="'JetBrains Mono', monospace" font-size="14" fill="#C6F432" font-weight="700">App()</text>
        <text x="315" y="80" font-family="'JetBrains Mono', monospace" font-size="14" fill="#F4F2EB">{</text>

        <text x="24" y="120" font-family="'JetBrains Mono', monospace" font-size="14" fill="#8E8E96">// Edge rendered directly at CDN boundary</text>
        <text x="24" y="150" font-family="'JetBrains Mono', monospace" font-size="14" fill="#FF5A1F">const</text>
        <text x="75" y="150" font-family="'JetBrains Mono', monospace" font-size="14" fill="#F4F2EB">data = await fetchEdgeTelemetry();</text>

        <text x="24" y="200" font-family="'JetBrains Mono', monospace" font-size="14" fill="#5B8DEF">return</text>
        <text x="85" y="200" font-family="'JetBrains Mono', monospace" font-size="14" fill="#F4F2EB">(</text>
        
        <text x="48" y="240" font-family="'JetBrains Mono', monospace" font-size="14" fill="#C6F432">&lt;main className=&quot;min-h-screen bg-obsidian&quot;&gt;</text>
        <text x="72" y="280" font-family="'JetBrains Mono', monospace" font-size="14" fill="#F4F2EB">&lt;Suspense fallback={&lt;Skeleton /&gt;}&gt;</text>
        <text x="96" y="320" font-family="'JetBrains Mono', monospace" font-size="14" fill="#5B8DEF">&lt;DashboardView payload={data} /&gt;</text>
        <text x="72" y="360" font-family="'JetBrains Mono', monospace" font-size="14" fill="#F4F2EB">&lt;/Suspense&gt;</text>
        <text x="48" y="400" font-family="'JetBrains Mono', monospace" font-size="14" fill="#C6F432">&lt;/main&gt;</text>
        
        <text x="24" y="440" font-family="'JetBrains Mono', monospace" font-size="14" fill="#F4F2EB">);</text>
        <text x="0" y="480" font-family="'JetBrains Mono', monospace" font-size="14" fill="#F4F2EB">}</text>
      </g>
    </g>

    <!-- Right Live Web App Preview -->
    <g transform="translate(760, 85)">
      <rect x="0" y="0" width="672" height="650" rx="8" fill="#15151D" stroke="#22222A" />
      <rect x="0" y="0" width="672" height="40" rx="8" fill="#1C1C26" />
      <circle cx="20" cy="20" r="5" fill="#FF5F56" />
      <circle cx="36" cy="20" r="5" fill="#FFBD2E" />
      <circle cx="52" cy="20" r="5" fill="#27C93F" />
      <rect x="80" y="10" width="300" height="20" rx="4" fill="#121218" />
      <text x="140" y="24" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">https://incorelab.com/app</text>

      <!-- Rendered App Content -->
      <g transform="translate(30, 70)">
        <text x="0" y="20" font-family="'Inter', sans-serif" font-size="20" fill="#F4F2EB" font-weight="800">Production Application Dashboard</text>
        
        <!-- Live Metric Cards -->
        <rect x="0" y="45" width="190" height="85" rx="6" fill="#1C1C26" stroke="#2A2A38" />
        <text x="16" y="75" font-family="'Inter', sans-serif" font-size="22" fill="#C6F432" font-weight="800">99.99%</text>
        <text x="16" y="100" font-family="'JetBrains Mono', monospace" font-size="10" fill="#8E8E96">EDGE AVAILABILITY</text>

        <rect x="210" y="45" width="190" height="85" rx="6" fill="#1C1C26" stroke="#2A2A38" />
        <text x="226" y="75" font-family="'Inter', sans-serif" font-size="22" fill="#5B8DEF" font-weight="800">320ms</text>
        <text x="226" y="100" font-family="'JetBrains Mono', monospace" font-size="10" fill="#8E8E96">GLOBAL TTFB</text>

        <rect x="420" y="45" width="190" height="85" rx="6" fill="#1C1C26" stroke="#2A2A38" />
        <text x="436" y="75" font-family="'Inter', sans-serif" font-size="22" fill="#FF5A1F" font-weight="800">100/100</text>
        <text x="436" y="100" font-family="'JetBrains Mono', monospace" font-size="10" fill="#8E8E96">LIGHTHOUSE SEO</text>

        <!-- Dynamic Chart in App -->
        <rect x="0" y="155" width="612" height="380" rx="8" fill="#111116" stroke="#262632" />
        <path d="M 30 460 Q 180 320, 320 380 T 580 200" fill="none" stroke="#C6F432" stroke-width="3" />
        <text x="30" y="195" font-family="'JetBrains Mono', monospace" font-size="12" fill="#F4F2EB" font-weight="700">REAL-TIME TRAFFIC &amp; CONVERSIONS STREAM</text>
      </g>
    </g>
  </g>
`;

// ==========================================
// 8. SERVICE: MOBILE APPS (React Native & Native iOS/Android)
// ==========================================
const mobileServiceVisual = `
  <g>
    <rect x="0" y="0" width="1472" height="780" rx="14" fill="#101014" stroke="#26262F" stroke-width="1.5" />
    <text x="40" y="45" font-family="'Inter', sans-serif" font-size="22" fill="#F4F2EB" font-weight="800">MOBILE APP ENGINEERING // REACT NATIVE &amp; SWIFT</text>
    <text x="1432" y="45" font-family="'JetBrains Mono', monospace" font-size="12" fill="#C6F432" text-anchor="end">60/120 FPS NATIVE SMOOTHNESS • OFFLINE-FIRST</text>
    <line x1="40" y1="65" x2="1432" y2="65" stroke="#22222A" />

    <!-- Two Sleek Phone Frames Side by Side -->
    <!-- Phone 1: Fintech Wallet & Biometrics -->
    <g transform="translate(240, 100)">
      <rect x="0" y="0" width="360" height="630" rx="40" fill="#0A0A0E" stroke="#3A3A46" stroke-width="4" />
      <!-- Dynamic Island Notch -->
      <rect x="110" y="14" width="140" height="26" rx="13" fill="#16161D" />
      <circle cx="225" cy="27" r="4.5" fill="#22222E" />

      <!-- App Header -->
      <text x="32" y="80" font-family="'Inter', sans-serif" font-size="14" fill="#8E8E96">TOTAL BALANCE</text>
      <text x="32" y="125" font-family="'Inter', sans-serif" font-size="34" fill="#F4F2EB" font-weight="800">$184,920.40</text>
      <text x="32" y="152" font-family="'JetBrains Mono', monospace" font-size="12" fill="#C6F432">+12.4% THIS MONTH</text>

      <!-- Virtual Metal Card -->
      <g transform="translate(24, 180)">
        <rect x="0" y="0" width="312" height="180" rx="18" fill="url(#cardGrad_WebDevelopment)" stroke="#FF5A1F" stroke-width="1.5" />
        <text x="24" y="36" font-family="'Inter', sans-serif" font-size="16" fill="#F4F2EB" font-weight="800">INCORELAB BLACK</text>
        <text x="24" y="115" font-family="'JetBrains Mono', monospace" font-size="15" fill="#F4F2EB">••••  ••••  ••••  8842</text>
        <text x="24" y="148" font-family="'JetBrains Mono', monospace" font-size="11" fill="#8E8E96">EXPIRES 11/29</text>
        <text x="288" y="148" font-family="'Inter', sans-serif" font-size="14" fill="#F4F2EB" font-weight="700" text-anchor="end">VISA PLATINUM</text>
      </g>

      <!-- Quick Action Buttons -->
      <g transform="translate(24, 385)">
        <rect x="0" y="0" width="94" height="48" rx="24" fill="#C6F432" />
        <text x="47" y="30" font-family="'Inter', sans-serif" font-size="12" fill="#101014" font-weight="700" text-anchor="middle">SEND</text>

        <rect x="108" y="0" width="94" height="48" rx="24" fill="#1C1C26" stroke="#2A2A38" />
        <text x="155" y="30" font-family="'Inter', sans-serif" font-size="12" fill="#F4F2EB" font-weight="700" text-anchor="middle">RECEIVE</text>

        <rect x="216" y="0" width="94" height="48" rx="24" fill="#1C1C26" stroke="#2A2A38" />
        <text x="263" y="30" font-family="'Inter', sans-serif" font-size="12" fill="#F4F2EB" font-weight="700" text-anchor="middle">INVEST</text>
      </g>

      <!-- Recent Transactions List -->
      <g transform="translate(24, 465)">
        <text x="0" y="0" font-family="'Inter', sans-serif" font-size="13" fill="#8E8E96" font-weight="700">RECENT ACTIVITY</text>
        <line x1="0" y1="12" x2="312" y2="12" stroke="#1E1E28" />

        <text x="0" y="40" font-family="'Inter', sans-serif" font-size="13" fill="#F4F2EB" font-weight="600">Apple Store Fifth Ave</text>
        <text x="312" y="40" font-family="'JetBrains Mono', monospace" font-size="13" fill="#FF5F56" font-weight="700" text-anchor="end">-$1,499.00</text>

        <text x="0" y="75" font-family="'Inter', sans-serif" font-size="13" fill="#F4F2EB" font-weight="600">Stripe Payout (SaaS)</text>
        <text x="312" y="75" font-family="'JetBrains Mono', monospace" font-size="13" fill="#C6F432" font-weight="700" text-anchor="end">+$12,840.00</text>
      </g>
    </g>

    <!-- Phone 2: Analytics & Health Dashboard -->
    <g transform="translate(740, 100)">
      <rect x="0" y="0" width="360" height="630" rx="40" fill="#0A0A0E" stroke="#3A3A46" stroke-width="4" />
      <rect x="110" y="14" width="140" height="26" rx="13" fill="#16161D" />

      <text x="32" y="80" font-family="'Inter', sans-serif" font-size="14" fill="#8E8E96">PERFORMANCE TRACKER</text>
      <text x="32" y="115" font-family="'Inter', sans-serif" font-size="28" fill="#F4F2EB" font-weight="800">Daily Health Metric</text>

      <!-- Circular Progress Ring in App -->
      <circle cx="180" cy="260" r="95" fill="none" stroke="#1C1C26" stroke-width="14" />
      <circle cx="180" cy="260" r="95" fill="none" stroke="#C6F432" stroke-width="14" stroke-dasharray="480" stroke-dashoffset="120" stroke-linecap="round" />
      <text x="180" y="255" font-family="'Inter', sans-serif" font-size="36" fill="#F4F2EB" font-weight="900" text-anchor="middle">92%</text>
      <text x="180" y="285" font-family="'JetBrains Mono', monospace" font-size="11" fill="#C6F432" text-anchor="middle">OPTIMAL SCORE</text>

      <!-- Key Mobile Features Pills -->
      <g transform="translate(32, 400)">
        <rect x="0" y="0" width="296" height="52" rx="10" fill="#181822" stroke="#2A2A38" />
        <text x="20" y="32" font-family="'Inter', sans-serif" font-size="13" fill="#F4F2EB" font-weight="600">Cross-Platform Sync</text>
        <text x="276" y="32" font-family="'JetBrains Mono', monospace" font-size="12" fill="#C6F432" text-anchor="end">0.1s</text>

        <rect x="0" y="65" width="296" height="52" rx="10" fill="#181822" stroke="#2A2A38" />
        <text x="20" y="97" font-family="'Inter', sans-serif" font-size="13" fill="#F4F2EB" font-weight="600">Push Notifications</text>
        <text x="276" y="97" font-family="'JetBrains Mono', monospace" font-size="12" fill="#5B8DEF" text-anchor="end">APNS</text>

        <rect x="0" y="130" width="296" height="52" rx="10" fill="#181822" stroke="#2A2A38" />
        <text x="20" y="162" font-family="'Inter', sans-serif" font-size="13" fill="#F4F2EB" font-weight="600">Biometric Encryption</text>
        <text x="276" y="162" font-family="'JetBrains Mono', monospace" font-size="12" fill="#FF5A1F" text-anchor="end">SECURE</text>
      </g>
    </g>
  </g>
`;

// Compile and write all 14 visual artworks
const allArtworks = [
  // 6 Projects (All Custom Unique Visuals)
  { file: 'project-kronos.svg', title: 'Kronos Terminal', sub: 'Autonomous High-Frequency Trading Interface', accent: '#C6F432', cat: 'CASE STUDY 01 // FINTECH', visual: kronosProjectVisual },
  { file: 'project-aura.svg', title: 'Aura Architects', sub: 'Spatial Monograph & Cantilever Architecture', accent: '#F4F2EB', cat: 'CASE STUDY 02 // ARCHITECTURE', visual: auraProjectVisual },
  { file: 'project-velocity.svg', title: 'Velocity Labs', sub: '3D Hyper-EV Real-Time Configurator', accent: '#FF5A1F', cat: 'CASE STUDY 03 // 3D WEBGL', visual: velocityProjectVisual },
  { file: 'project-synthesis.svg', title: 'Synthesis Audio', sub: 'Spatial Audio Cloud DAW Workstation', accent: '#C6F432', cat: 'CASE STUDY 04 // AI AUDIO', visual: synthesisProjectVisual },
  { file: 'project-lumen.svg', title: 'Lumen Botanicals', sub: 'Luxury Headless Skincare E-Commerce', accent: '#FF5A1F', cat: 'CASE STUDY 05 // E-COMMERCE', visual: lumenProjectVisual },
  { file: 'project-strata.svg', title: 'Strata Capital', sub: 'Sovereign Macro-Intelligence Briefing', accent: '#5B8DEF', cat: 'CASE STUDY 06 // VENTURE CAPITAL', visual: strataProjectVisual },

  // 8 Services (Dashboards, Stores, Apps, Systems)
  { file: 'service-web.svg', title: 'Web Development', sub: 'Next.js 15, React, HTML5, Framer, Webflow', accent: '#C6F432', cat: 'PILLAR 01 // ENGINEERING', visual: webServiceVisual },
  { file: 'service-ecommerce.svg', title: 'E-Commerce Engineering', sub: 'Shopify Plus, Headless Commerce, Custom Checkout', accent: '#FF5A1F', cat: 'PILLAR 02 // E-COMMERCE', visual: lumenProjectVisual },
  { file: 'service-mobile.svg', title: 'Mobile App Development', sub: 'React Native, Native iOS Swift, Android Kotlin', accent: '#C6F432', cat: 'PILLAR 03 // MOBILE APPS', visual: mobileServiceVisual },
  { file: 'service-game.svg', title: 'Game Development & WebGL', sub: 'Three.js, Unity 3D, Custom Shaders, Spatial XR', accent: '#FF5A1F', cat: 'PILLAR 04 // 3D & GAMES', visual: velocityProjectVisual },
  { file: 'service-branding.svg', title: 'Branding & UI/UX Design', sub: 'Editorial Systems, Design Tokens, Spatial Typography', accent: '#F4F2EB', cat: 'PILLAR 05 // DESIGN SYSTEMS', visual: auraProjectVisual },
  { file: 'service-ai.svg', title: 'AI & Autonomous Engineering', sub: 'Autonomous LLM Agents, Audio Synthesis, Data Pipelines', accent: '#C6F432', cat: 'PILLAR 06 // APPLIED AI', visual: synthesisProjectVisual },
  { file: 'service-growth.svg', title: 'Growth Marketing & SEO', sub: 'Real-Time Conversions, Semantic SEO, Attribution', accent: '#5B8DEF', cat: 'PILLAR 07 // GROWTH', visual: strataProjectVisual },
  { file: 'service-cloud.svg', title: 'Cloud Infrastructure & DevOps', sub: 'AWS, Cloudflare Edge, Docker, Kubernetes', accent: '#C6F432', cat: 'PILLAR 08 // DEVOPS', visual: kronosProjectVisual },
];

allArtworks.forEach(art => {
  const fullSvg = createSVG(art.title, art.sub, art.accent, art.cat, art.visual);
  const destPath = path.join(imgDir, art.file);
  fs.writeFileSync(destPath, fullSvg, 'utf8');
  console.log(`Generated: ${art.file}`);
});

console.log('Successfully generated all 14 hyper-detailed studio SVG artworks in public/images!');
