const path = require('path');
(async () => {
  try {
    const { chromium } = require('playwright');
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
    const args = process.argv.slice(2);
    const filename = args[0] || 'flyer.html';
    const outputName = filename.replace('.html', '.png');
    const fileUrl = 'file://' + path.resolve(__dirname, filename);
    await page.goto(fileUrl, { waitUntil: 'networkidle' });
    // Give some time for fonts/images to settle
    await page.waitForTimeout(700);
    await page.screenshot({ path: outputName, fullPage: false });
    await browser.close();
    console.log(`Rendered ${outputName}`);
  } catch (err) {
    console.error('Render failed:', err);
    process.exit(1);
  }
})();
