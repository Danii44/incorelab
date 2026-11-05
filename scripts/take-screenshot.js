const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

async function capture() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const userDataDir = path.join(__dirname, '..', `.chrome-temp-${Date.now()}`);
  fs.mkdirSync(userDataDir, { recursive: true });

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    `--user-data-dir=${userDataDir}`,
    '--disable-gpu',
    '--no-sandbox',
    '--window-size=390,2800',
    'http://localhost:3000/contact'
  ]);

  // Wait for CDP to be ready
  let tabs;
  for (let i = 0; i < 40; i++) {
    try {
      const listRes = await fetch('http://127.0.0.1:9222/json/list');
      tabs = await listRes.json();
      if (tabs && tabs[0]?.webSocketDebuggerUrl) break;
    } catch {
      // ignore
    }
    await new Promise(r => setTimeout(r, 250));
  }

  try {
    const wsUrl = tabs?.[0]?.webSocketDebuggerUrl;
    if (!wsUrl) throw new Error('No tab found');

    const ws = new WebSocket(wsUrl);
    let id = 1;
    const send = (method, params = {}) => new Promise((resolve) => {
      const curId = id++;
      const handler = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === curId) {
          ws.removeEventListener('message', handler);
          resolve(msg.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: curId, method, params }));
    });

    await new Promise(r => ws.addEventListener('open', r, { once: true }));

    await send('Page.enable');
    await send('Page.addScriptToEvaluateOnNewDocument', {
      source: 'sessionStorage.setItem("incorelab_loaded", "true");'
    });
    await send('Page.navigate', { url: 'http://localhost:3000/contact' });

    // Wait 3.5s for page load & render
    await new Promise(r => setTimeout(r, 3500));

    // Capture screenshot
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(shot.data, 'base64');
    fs.writeFileSync(path.join(__dirname, '..', 'contact_mobile.png'), buffer);
    console.log('Successfully captured contact_mobile.png');
    ws.close();
  } finally {
    try { chromeProc.kill('SIGKILL'); } catch(e) {}
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch(e) {}
  }
}

capture().catch(console.error);
