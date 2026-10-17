const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '..', 'public', 'images', 'ambient');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// =========================================================================
// ASSET 1: Optical Smoked Quartz Prism Monolith
// Pure Swiss material craft: beveled crystal facets, optical chromatic refraction,
// laser-etched alignment crosshairs, and realistic frosted internal dispersion.
// =========================================================================
function generatePrismSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 1400" width="1400" height="1400">
    <defs>
      <!-- Refraction gradients -->
      <linearGradient id="facetTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.28" />
        <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.10" />
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.02" />
      </linearGradient>
      <linearGradient id="facetFront" x1="30%" y1="0%" x2="70%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.16" />
        <stop offset="60%" stop-color="#A5B4FC" stop-opacity="0.08" />
        <stop offset="100%" stop-color="#1E1E28" stop-opacity="0.35" />
      </linearGradient>
      <linearGradient id="facetSide" x1="0%" y1="0%" x2="100%" y2="80%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.08" />
        <stop offset="100%" stop-color="#0E0E14" stop-opacity="0.65" />
      </linearGradient>
      <linearGradient id="specularEdge" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8" />
        <stop offset="40%" stop-color="#C6F432" stop-opacity="0.4" />
        <stop offset="80%" stop-color="#FF5A1F" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.1" />
      </linearGradient>
      <linearGradient id="causticBeam" x1="0%" y1="20%" x2="100%" y2="80%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.35" />
        <stop offset="30%" stop-color="#C6F432" stop-opacity="0.15" />
        <stop offset="70%" stop-color="#5B8DEF" stop-opacity="0.08" />
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.0" />
      </linearGradient>
      <filter id="prismGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="30" dy="50" stdDeviation="40" flood-color="#000000" flood-opacity="0.45" />
      </filter>
    </defs>

    <!-- Translucent Ambient Caustic Light Flare exiting the prism -->
    <polygon points="700,520 1350,250 1380,950 780,1080" fill="url(#causticBeam)" />

    <!-- Main 3D Monolithic Glass Form with realistic drop shadow -->
    <g filter="url(#softShadow)">
      <!-- Base Prism Shadow Floor Contact -->
      <polygon points="420,1020 780,1180 1020,980 660,840" fill="#000000" fill-opacity="0.3" />

      <!-- Back Interior Refraction Wall -->
      <polygon points="660,340 1020,480 1020,980 660,840" fill="#14141E" fill-opacity="0.5" />
      
      <!-- Internal Optical Caustic Core -->
      <line x1="660" y1="340" x2="780" y2="1180" stroke="#FFFFFF" stroke-opacity="0.15" stroke-dasharray="3 6" stroke-width="1.5" />
      <line x1="420" y1="520" x2="1020" y2="980" stroke="#C6F432" stroke-opacity="0.18" stroke-dasharray="4 8" stroke-width="1.5" />

      <!-- Left Facet (Smoked / Internal Density) -->
      <polygon points="420,520 660,340 660,840 420,1020" fill="url(#facetSide)" stroke="#FFFFFF" stroke-opacity="0.12" stroke-width="1" />

      <!-- Right Facet (Deep Shadow & Internal Total Reflection) -->
      <polygon points="660,340 1020,480 1020,980 780,1180 660,840" fill="url(#facetSide)" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1" />

      <!-- Main Front Facing Refraction Plane -->
      <polygon points="420,520 780,680 780,1180 420,1020" fill="url(#facetFront)" stroke="#FFFFFF" stroke-opacity="0.25" stroke-width="1.2" />

      <!-- Top Crystal Facet (Specular Light Catcher) -->
      <polygon points="660,340 420,520 780,680 1020,480" fill="url(#facetTop)" stroke="#FFFFFF" stroke-opacity="0.4" stroke-width="1.5" />
    </g>

    <!-- Beveled Precision Specular Razor Edges -->
    <line x1="660" y1="340" x2="780" y2="680" stroke="url(#specularEdge)" stroke-width="3" filter="url(#prismGlow)" />
    <line x1="780" y1="680" x2="780" y2="1180" stroke="url(#specularEdge)" stroke-width="2.5" />
    <line x1="420" y1="520" x2="780" y2="680" stroke="#FFFFFF" stroke-opacity="0.75" stroke-width="2" />
    <line x1="780" y1="680" x2="1020" y2="480" stroke="#FFFFFF" stroke-opacity="0.6" stroke-width="2" />

    <!-- Swiss Studio Laser-Etched Measurement Indices on Glass Surface -->
    <g font-family="'JetBrains Mono', monospace" font-size="11" fill="#FFFFFF" fill-opacity="0.45" letter-spacing="2">
      <!-- Top index -->
      <line x1="640" y1="330" x2="680" y2="330" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="1" />
      <text x="700" y="334">VERTEX α // 54.7°</text>

      <!-- Center optical focal datum -->
      <circle cx="600" cy="600" r="16" fill="none" stroke="#FFFFFF" stroke-opacity="0.35" stroke-width="1" />
      <circle cx="600" cy="600" r="3" fill="#C6F432" fill-opacity="0.8" />
      <line x1="570" y1="600" x2="630" y2="600" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="1" />
      <line x1="600" y1="570" x2="600" y2="630" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="1" />
      <text x="630" y="604" font-size="9">DATUM // FOCAL F-1.4</text>

      <!-- Calibrated vertical millimeter ruler along left edge -->
      <g stroke="#FFFFFF" stroke-opacity="0.35" stroke-width="0.8">
        <line x1="410" y1="560" x2="425" y2="560" />
        <line x1="415" y1="580" x2="425" y2="580" />
        <line x1="415" y1="600" x2="425" y2="600" />
        <line x1="410" y1="620" x2="425" y2="620" />
        <line x1="415" y1="640" x2="425" y2="640" />
        <line x1="415" y1="660" x2="425" y2="660" />
        <line x1="410" y1="680" x2="425" y2="680" />
        <line x1="415" y1="700" x2="425" y2="700" />
        <line x1="415" y1="720" x2="425" y2="720" />
        <line x1="405" y1="740" x2="425" y2="740" stroke-width="1.5" />
      </g>
      <text x="320" y="744" font-size="9">740.0 MM</text>

      <!-- Bottom studio specification stamp -->
      <text x="440" y="1060" font-size="10" fill="#FFFFFF" fill-opacity="0.6" font-weight="700">INCORELAB // OPTICAL SLAB SPEC 01</text>
      <text x="440" y="1080" font-size="9" fill="#FFFFFF" fill-opacity="0.35">INDEX OF REFRACTION: n = 1.544 • QUARTZ</text>
    </g>
  </svg>`;
}

// =========================================================================
// ASSET 2: Precision Swiss Moiré Interference Topology
// Mathematical optical wave interference: creates dynamic shimmering bands
// as users scroll. 100% human-crafted geometry, never seen on generic AI sites.
// =========================================================================
function generateMoireSVG() {
  const width = 1600;
  const height = 1600;
  let paths = '';

  // Center 1: (600, 800)
  // Center 2: (1000, 800)
  // Concentric fine rings causing Huygens wave interference pattern
  for (let r = 40; r <= 1100; r += 22) {
    const opacity = (1 - (r / 1200) * 0.7).toFixed(2);
    paths += `<circle cx="620" cy="800" r="${r}" fill="none" stroke="#FFFFFF" stroke-opacity="${(opacity * 0.18).toFixed(3)}" stroke-width="1" />\n`;
    paths += `<circle cx="980" cy="800" r="${r}" fill="none" stroke="#FFFFFF" stroke-opacity="${(opacity * 0.18).toFixed(3)}" stroke-width="1" />\n`;
  }

  // Cross-radial hyperbolic asymptotic interference rays
  for (let angle = 0; angle < 360; angle += 15) {
    const rad = (angle * Math.PI) / 180;
    const x2 = 800 + Math.cos(rad) * 900;
    const y2 = 800 + Math.sin(rad) * 900;
    paths += `<line x1="800" y1="800" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#FFFFFF" stroke-opacity="0.04" stroke-width="0.8" />\n`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
    <defs>
      <radialGradient id="moireVignette" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="1" />
        <stop offset="70%" stop-color="#FFFFFF" stop-opacity="0.6" />
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
      </radialGradient>
      <mask id="vignetteMask">
        <rect width="100%" height="100%" fill="url(#moireVignette)" />
      </mask>
    </defs>

    <g mask="url(#vignetteMask)">
      ${paths}

      <!-- Center Calibration Ring with Cardinal Nodes -->
      <circle cx="800" cy="800" r="180" fill="none" stroke="#C6F432" stroke-opacity="0.3" stroke-width="1.5" stroke-dasharray="6 8" />
      <circle cx="800" cy="800" r="8" fill="#C6F432" fill-opacity="0.6" />
      <line x1="720" y1="800" x2="880" y2="800" stroke="#C6F432" stroke-opacity="0.4" stroke-width="1" />
      <line x1="800" y1="720" x2="800" y2="880" stroke="#C6F432" stroke-opacity="0.4" stroke-width="1" />

      <!-- Typography Telemetry -->
      <text x="800" y="600" font-family="'JetBrains Mono', monospace" font-size="11" fill="#FFFFFF" fill-opacity="0.4" text-anchor="middle" letter-spacing="4">
        MOIRÉ INTERFERENCE FIELD // FREQ: 45.45 LP/MM
      </text>
      <text x="800" y="1020" font-family="'JetBrains Mono', monospace" font-size="10" fill="#FFFFFF" fill-opacity="0.3" text-anchor="middle" letter-spacing="3">
        OPTICAL DIFFRACTION HARMONIC MATRIX
      </text>
    </g>
  </svg>`;
}

// =========================================================================
// ASSET 3: Architectural Directional Sunlight Caustic Beam
// Natural sunlight passing through floor-to-ceiling glass louvers.
// Creates physical studio atmosphere, warm exposure, and cinematic realism.
// =========================================================================
function generateCausticSVG() {
  const width = 1800;
  const height = 1200;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
    <defs>
      <!-- Beam gradients with gentle feathered edges -->
      <linearGradient id="beamPrimary" x1="15%" y1="0%" x2="85%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.28" />
        <stop offset="35%" stop-color="#FFFDF7" stop-opacity="0.14" />
        <stop offset="70%" stop-color="#FFFFFF" stop-opacity="0.04" />
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.0" />
      </linearGradient>
      <linearGradient id="beamWarm" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF5A1F" stop-opacity="0.12" />
        <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.06" />
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.0" />
      </linearGradient>
      <linearGradient id="beamAcid" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stop-color="#C6F432" stop-opacity="0.09" />
        <stop offset="60%" stop-color="#FFFFFF" stop-opacity="0.03" />
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.0" />
      </linearGradient>
      <filter id="causticBlur" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation="35" />
      </filter>
    </defs>

    <!-- Diagonal Architectural Slanted Window Panes -->
    <g filter="url(#causticBlur)">
      <!-- Main High-Key Sunlight Shaft -->
      <polygon points="150,-100 600,-100 1450,1300 1000,1300" fill="url(#beamPrimary)" />
      
      <!-- Second Narrow Slit (Louver shadow separation) -->
      <polygon points="680,-100 840,-100 1690,1300 1530,1300" fill="url(#beamWarm)" />

      <!-- Third Wide Atmospheric Wash -->
      <polygon points="900,-100 1350,-100 2200,1300 1750,1300" fill="url(#beamAcid)" />

      <!-- Soft Horizon Floor Reflection Spill -->
      <ellipse cx="1200" cy="1050" rx="600" ry="180" fill="#FFFFFF" fill-opacity="0.08" />
    </g>

    <!-- Crisp Hairline Architectural Shadows (Mullion lines) -->
    <line x1="600" y1="-50" x2="1450" y2="1250" stroke="#FFFFFF" stroke-opacity="0.18" stroke-width="1.5" />
    <line x1="680" y1="-50" x2="1530" y2="1250" stroke="#000000" stroke-opacity="0.22" stroke-width="2" />
    <line x1="840" y1="-50" x2="1690" y2="1250" stroke="#FFFFFF" stroke-opacity="0.12" stroke-width="1.5" />
    <line x1="900" y1="-50" x2="1750" y2="1250" stroke="#000000" stroke-opacity="0.18" stroke-width="2" />

    <!-- Subtle Optical Dust Particles / Analog Exposure Specks -->
    <circle cx="950" cy="420" r="1.5" fill="#FFFFFF" fill-opacity="0.6" />
    <circle cx="1120" cy="680" r="2" fill="#FFFFFF" fill-opacity="0.5" />
    <circle cx="780" cy="310" r="1" fill="#FFFFFF" fill-opacity="0.4" />
    <circle cx="1250" cy="520" r="1.8" fill="#FFFFFF" fill-opacity="0.5" />
    <circle cx="1380" cy="850" r="1.2" fill="#FFFFFF" fill-opacity="0.4" />
    <circle cx="1040" cy="790" r="2.2" fill="#FFFFFF" fill-opacity="0.6" />
  </svg>`;
}

// =========================================================================
// ASSET 4: Swiss Technical Datum & Optical Reticle Plate
// Architectural drafting datum with circular vernier protractor,
// millimeter tick scale, precision crosshairs, and industrial studio mark.
// =========================================================================
function generateReticleSVG() {
  const width = 1200;
  const height = 1200;

  let degreeTicks = '';
  for (let d = 0; d < 360; d += 2) {
    const isMajor = d % 10 === 0;
    const isMedium = d % 5 === 0 && !isMajor;
    const len = isMajor ? 14 : isMedium ? 8 : 4;
    const rad = (d * Math.PI) / 180;
    const r1 = 440;
    const r2 = r1 - len;
    const x1 = 600 + Math.cos(rad) * r1;
    const y1 = 600 + Math.sin(rad) * r1;
    const x2 = 600 + Math.cos(rad) * r2;
    const y2 = 600 + Math.sin(rad) * r2;
    const strokeOpacity = isMajor ? '0.45' : isMedium ? '0.25' : '0.12';
    degreeTicks += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#FFFFFF" stroke-opacity="${strokeOpacity}" stroke-width="${isMajor ? 1.5 : 0.8}" />\n`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
    <g>
      <!-- Outer Dial Circles -->
      <circle cx="600" cy="600" r="440" fill="none" stroke="#FFFFFF" stroke-opacity="0.25" stroke-width="1.2" />
      <circle cx="600" cy="600" r="424" fill="none" stroke="#FFFFFF" stroke-opacity="0.12" stroke-width="0.8" stroke-dasharray="2 4" />
      <circle cx="600" cy="600" r="320" fill="none" stroke="#FFFFFF" stroke-opacity="0.18" stroke-width="1" />
      <circle cx="600" cy="600" r="180" fill="none" stroke="#C6F432" stroke-opacity="0.35" stroke-width="1.5" stroke-dasharray="4 6" />
      <circle cx="600" cy="600" r="60" fill="none" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="1" />
      <circle cx="600" cy="600" r="4" fill="#C6F432" />

      <!-- Degree Ticks -->
      ${degreeTicks}

      <!-- Crosshairs with Center Notch -->
      <line x1="80" y1="600" x2="540" y2="600" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="1" />
      <line x1="660" y1="600" x2="1120" y2="600" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="1" />
      <line x1="600" y1="80" x2="600" y2="540" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="1" />
      <line x1="600" y1="660" x2="600" y2="1120" stroke="#FFFFFF" stroke-opacity="0.3" stroke-width="1" />

      <!-- Precision Corner Registration Marks -->
      <g stroke="#FFFFFF" stroke-opacity="0.4" stroke-width="1.2">
        <path d="M 120 160 L 120 120 L 160 120" fill="none" />
        <path d="M 1080 160 L 1080 120 L 1040 120" fill="none" />
        <path d="M 120 1040 L 120 1080 L 160 1080" fill="none" />
        <path d="M 1080 1040 L 1080 1080 L 1040 1080" fill="none" />
      </g>

      <!-- Cardinal Angle Labels -->
      <g font-family="'JetBrains Mono', monospace" font-size="11" fill="#FFFFFF" fill-opacity="0.4" text-anchor="middle" font-weight="600">
        <text x="600" y="145">000° // NORTH POLAR</text>
        <text x="1055" y="604" text-anchor="start">090° // E</text>
        <text x="600" y="1065">180° // NADIR</text>
        <text x="145" y="604" text-anchor="end">270° // W</text>
      </g>

      <!-- Center Calibration Stamp -->
      <g font-family="'JetBrains Mono', monospace" fill="#FFFFFF" fill-opacity="0.45">
        <text x="600" y="480" font-size="10" text-anchor="middle" letter-spacing="3" fill="#C6F432">INCORELAB CALIBRATED APERTURE</text>
        <text x="600" y="730" font-size="9" text-anchor="middle" letter-spacing="2">LAT 47.3769° N  •  LON 8.5417° E</text>
        <text x="600" y="748" font-size="8" text-anchor="middle" letter-spacing="1.5" fill-opacity="0.3">ATELIER OPTICAL TELEMETRY // SPEC-24</text>
      </g>
    </g>
  </svg>`;
}

async function renderAll() {
  console.log('Rendering high-resolution transparent PNG background assets...');

  const prismSvg = Buffer.from(generatePrismSVG());
  const moireSvg = Buffer.from(generateMoireSVG());
  const causticSvg = Buffer.from(generateCausticSVG());
  const reticleSvg = Buffer.from(generateReticleSVG());

  // 1. Optical Prism Monolith (1400x1400)
  await sharp(prismSvg)
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(path.join(outDir, 'optical-prism-monolith.png'));
  console.log('✓ Created optical-prism-monolith.png');

  // 2. Moiré Interference Topology (1600x1600)
  await sharp(moireSvg)
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(path.join(outDir, 'moire-interference-grid.png'));
  console.log('✓ Created moire-interference-grid.png');

  // 3. Architectural Sunlight Caustic (1800x1200)
  await sharp(causticSvg)
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(path.join(outDir, 'architectural-sunlight-caustic.png'));
  console.log('✓ Created architectural-sunlight-caustic.png');

  // 4. Studio Spec Datum Reticle (1200x1200)
  await sharp(reticleSvg)
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(path.join(outDir, 'studio-spec-plate.png'));
  console.log('✓ Created studio-spec-plate.png');

  console.log('All 4 authentic, non-AI transparent PNG assets generated successfully!');
}

renderAll().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
