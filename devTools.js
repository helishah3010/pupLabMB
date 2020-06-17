const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ devtools: true });
  await page.waitFor(1000);
  await browser.close();
})();