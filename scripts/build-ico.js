const fs = require('fs');
const sharp = require('sharp');

async function buildIco() {
  const src = 'public/logo/Incorelab logo.png';
  const cropSize = 960;
  const left = 150;
  const top = 55;
  const base = sharp(src)
    .extract({ left, top, width: cropSize, height: cropSize })
    .ensureAlpha();

  const sizes = [16, 32, 48];
  const pngBuffers = [];

  for (const s of sizes) {
    // Explicitly guarantee 4-channel RGBA PNG format for Turbopack ICO parser
    const buf = await base
      .clone()
      .resize(s, s)
      .ensureAlpha()
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toBuffer();

    const meta = await sharp(buf).metadata();
    console.log('Size ' + s + 'x' + s + ' channels: ' + meta.channels + ', hasAlpha: ' + meta.hasAlpha);
    pngBuffers.push({ size: s, buffer: buf });
  }

  // Calculate header and entries
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const entrySize = 16;
  let offset = headerSize + numImages * entrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(numImages, 4); // count

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(entrySize);
    entry.writeUInt8(item.size, 0); // width
    entry.writeUInt8(item.size, 1); // height
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel (RGBA)
    entry.writeUInt32LE(item.buffer.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset
    entries.push(entry);
    offset += item.buffer.length;
  }

  const icoBuffer = Buffer.concat([
    header,
    ...entries,
    ...pngBuffers.map(p => p.buffer)
  ]);

  fs.writeFileSync('public/favicon.ico', icoBuffer);
  fs.writeFileSync('app/favicon.ico', icoBuffer);
  console.log('Created valid RGBA favicon.ico (' + icoBuffer.length + ' bytes)');
}

buildIco();
