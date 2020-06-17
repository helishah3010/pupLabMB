// Emulate Network Conditions - Slow Network and CPU throttle
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  const client = await page.target().createCDPSession();
  await client.send('Network.enable');
  await client.send('Network.emulateNetworkConditions', {
    offline: false,
    latency: 28, // ms
    downloadThroughput: 5 * 1024 *1024 / 8, // 5 mb/s
    uploadThroughput: 1024 * 1024 / 8, // 1 mb/s
  });
  await client.send('Emulation.setCPUThrottlingRate', { rate: 4 });

  await page.goto('https://mindbody.io', {timeout:0});
  
  const metrics = await page.evaluate(() => JSON.stringify(window.performance));
  const performanceTiming = JSON.parse(metrics);
  const pageLoad = performanceTiming.timing.loadEventEnd - performanceTiming.timing.navigationStart;

  //console.info(performanceTiming);
  console.log('Page completed loading in ' +pageLoad / 1000+ ' seconds')
  await browser.close();
})();