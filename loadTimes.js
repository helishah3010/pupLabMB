const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://mindbody.io');
  
  const metrics = await page.evaluate(() => JSON.stringify(window.performance));
  const performanceTiming = JSON.parse(metrics);
  const pageLoad = performanceTiming.timing.loadEventEnd - performanceTiming.timing.navigationStart;

  console.info(performanceTiming);
  console.log('Page completed loading in ' +pageLoad / 1000+ ' seconds')
  await browser.close();
})();