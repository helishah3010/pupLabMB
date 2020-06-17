const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({headless:false, args: ['--start-fullscreen']});
  const page = await browser.newPage();
  await page.setViewport({width:1920, height:1080});

  await page.setRequestInterception(true);
  page.on('request', request => {
    if (request.resourceType() === 'image')
      request.abort();
    else
      request.continue();
  });

  await page.goto('https://mindbody.io/beauty/search/locations/hair-salon?location=San+Luis+Obispo%2C+CA%2C+US');
  await browser.close();
  })();