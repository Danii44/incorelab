const sharp = require('sharp');
const fs = require('fs');

async function makeFavicons() {
  const src = 'public/logo/Incorelab logo.png';
  
  // Center of emblem is around x = (230 + 1030) / 2 = 630, y = (122 + 949) / 2 = 535.
  // The emblem itself is ~820x827.
  // Let's create a square crop of size 960x960 centered at (630, 535):
  const cropSize = 960;
  const left = Math.max(0, Math.min(1254 - cropSize, Math.round(630 - cropSize / 2)));
  const top = Math.max(0, Math.min(1254 - cropSize, Math.round(535 - cropSize / 2)));
  
  console.log(`Cropping with left=${left}, top=${top}, width=${cropSize}, height=${cropSize}`);

  // Base cropped image
  const cropped = sharp(src).extract({ left, top, width: cropSize, height: cropSize });

  // 1. Generate 512x512 high-res app icon
  await cropped
    .clone()
    .resize(512, 512, { fit: 'contain' })
    .png()
    .toFile('public/icon-512x512.png');

  // 2. Generate 192x192 Android / PWA icon
  await cropped
    .clone()
    .resize(192, 192, { fit: 'contain' })
    .png()
    .toFile('public/icon-192x192.png');

  // 3. Generate Apple Touch Icon 180x180
  await cropped
    .clone()
    .resize(180, 180, { fit: 'contain' })
    .png()
    .toFile('public/apple-touch-icon.png');
  await cropped
    .clone()
    .resize(180, 180, { fit: 'contain' })
    .png()
    .toFile('app/apple-icon.png');

  // 4. Generate 32x32 and 48x48 PNG icons
  await cropped
    .clone()
    .resize(32, 32, { fit: 'contain' })
    .png()
    .toFile('public/favicon-32x32.png');
  await cropped
    .clone()
    .resize(16, 16, { fit: 'contain' })
    .png()
    .toFile('public/favicon-16x16.png');
  await cropped
    .clone()
    .resize(48, 48, { fit: 'contain' })
    .png()
    .toFile('public/icon.png');
  await cropped
    .clone()
    .resize(48, 48, { fit: 'contain' })
    .png()
    .toFile('app/icon.png');

  console.log('Generated PNG icons successfully!');
}

makeFavicons();
