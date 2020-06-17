const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://mindbodyonline.com/business');
  
  const metrics = await page.metrics();
  console.info(metrics);

  await browser.close();
})();