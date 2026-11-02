const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function makeRoundedFavicons() {
  const root = path.join(__dirname, '..');
  const src = path.join(root, 'public', 'logo', 'Incorelab logo.png');

  // Emblem crop centered at (603, 495) with size 620x620 (zero text, pure emblem)
  const cropSize = 620;
  const cropX = 293;
  const cropY = 185;

  const emblemRaw = await sharp(src)
    .extract({ left: cropX, top: cropY, width: cropSize, height: cropSize })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = emblemRaw;
  const w = info.width, h = info.height;

  // Feather the outer 40 pixels so the ambient glow transitions seamlessly
  const featheredRGBA = Buffer.alloc(w * h * 4);
  const half = w / 2;
  const radius = half - 10;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const srcIdx = (y * w + x) * 3;
      const outIdx = (y * w + x) * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      const dist = Math.hypot(x - half, y - half);
      const alphaFactor = dist > radius - 45 ? Math.max(0, (radius - dist) / 45) : 1;

      featheredRGBA[outIdx] = r;
      featheredRGBA[outIdx + 1] = g;
      featheredRGBA[outIdx + 2] = b;
      featheredRGBA[outIdx + 3] = Math.round(255 * alphaFactor);
    }
  }

  // Resize emblem to 400x400 to center inside 512x512
  const featheredEmblem = await sharp(featheredRGBA, { raw: { width: w, height: h, channels: 4 } })
    .resize(400, 400, { fit: 'contain' })
    .png()
    .toBuffer();

  const offset = Math.round((512 - 400) / 2); // 56px

  // Dark radial gradient matching site theme (#0E0E12)
  const bgSvg = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <radialGradient id="darkBg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#14131D" />
      <stop offset="60%" stop-color="#0E0E12" />
      <stop offset="100%" stop-color="#08080A" />
    </radialGradient>
    <rect width="512" height="512" fill="url(#darkBg)" />
  </svg>`;
  const bgBuf = await sharp(Buffer.from(bgSvg)).png().toBuffer();

  const composited = await sharp(bgBuf)
    .composite([{ input: featheredEmblem, top: offset, left: offset }])
    .png()
    .toBuffer();

  // Circle mask with subtle border for high-definition rounded favicon
  const circleMaskSvg = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <circle cx="256" cy="256" r="256" fill="#FFF" />
  </svg>`;
  const circleMask = await sharp(Buffer.from(circleMaskSvg)).png().toBuffer();

  const circleBorderSvg = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <circle cx="256" cy="256" r="254" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="2" />
  </svg>`;
  const circleBorder = await sharp(Buffer.from(circleBorderSvg)).png().toBuffer();

  // Master 512x512 rounded favicon buffer
  const masterRounded = await sharp(composited)
    .composite([
      { input: circleMask, blend: 'dest-in' },
      { input: circleBorder, blend: 'over' }
    ])
    .ensureAlpha()
    .png({ compressionLevel: 9 })
    .toBuffer();

  console.log('Generated master rounded icon buffer (512x512)');

  // 1. Save 512x512
  await sharp(masterRounded)
    .toFile(path.join(root, 'public', 'icon-512x512.png'));

  // 2. Save 192x192
  await sharp(masterRounded)
    .resize(192, 192, { kernel: sharp.kernel.lanczos3 })
    .toFile(path.join(root, 'public', 'icon-192x192.png'));

  // 3. Save Apple touch icon 180x180 (public + app)
  await sharp(masterRounded)
    .resize(180, 180, { kernel: sharp.kernel.lanczos3 })
    .toFile(path.join(root, 'public', 'apple-touch-icon.png'));
  await sharp(masterRounded)
    .resize(180, 180, { kernel: sharp.kernel.lanczos3 })
    .toFile(path.join(root, 'app', 'apple-icon.png'));

  // 4. Save 48x48 icon (public + app)
  await sharp(masterRounded)
    .resize(48, 48, { kernel: sharp.kernel.lanczos3 })
    .toFile(path.join(root, 'public', 'icon.png'));
  await sharp(masterRounded)
    .resize(48, 48, { kernel: sharp.kernel.lanczos3 })
    .toFile(path.join(root, 'app', 'icon.png'));

  // 5. Save 32x32 and 16x16
  await sharp(masterRounded)
    .resize(32, 32, { kernel: sharp.kernel.lanczos3 })
    .toFile(path.join(root, 'public', 'favicon-32x32.png'));
  await sharp(masterRounded)
    .resize(16, 16, { kernel: sharp.kernel.lanczos3 })
    .toFile(path.join(root, 'public', 'favicon-16x16.png'));

  // 6. Build multi-resolution favicon.ico [16, 32, 48]
  const icoSizes = [16, 32, 48];
  const pngBuffers = [];

  for (const s of icoSizes) {
    const buf = await sharp(masterRounded)
      .resize(s, s, { kernel: sharp.kernel.lanczos3 })
      .ensureAlpha()
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toBuffer();
    pngBuffers.push({ size: s, buffer: buf });
  }

  const numImages = pngBuffers.length;
  const headerSize = 6;
  const entrySize = 16;
  let offsetIco = headerSize + numImages * entrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(numImages, 4); // count

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(item.size, 0);
    entry.writeUInt8(item.size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(item.buffer.length, 8);
    entry.writeUInt32LE(offsetIco, 12);
    entries.push(entry);
    offsetIco += item.buffer.length;
  }

  const icoBuffer = Buffer.concat([
    header,
    ...entries,
    ...pngBuffers.map(p => p.buffer)
  ]);

  fs.writeFileSync(path.join(root, 'public', 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(root, 'app', 'favicon.ico'), icoBuffer);

  console.log('All rounded favicons (ICO + PNGs) generated and saved successfully!');
}

makeRoundedFavicons().catch(err => {
  console.error(err);
  process.exit(1);
});
