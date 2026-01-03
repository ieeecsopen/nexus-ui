const path = require('path');
(async () => {
  try {
    const { chromium } = require('playwright');
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
    const fileUrl = 'file://' + path.resolve(__dirname, 'flyer.html');
    await page.goto(fileUrl, { waitUntil: 'networkidle' });
    // Give some time for fonts/images to settle
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'flyer.png', fullPage: false });
    await browser.close();
    console.log('Rendered flyer.png');
  } catch (err) {
    console.error('Render failed:', err);
    process.exit(1);
  }
})();
