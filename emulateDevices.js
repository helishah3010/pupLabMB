const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:true});
  const page = await browser.newPage();
  
  //await page.emulate(device['iPad Mini']);
  page.on('pageerror', error =>{
    console.log('Console Error:',error.message);
  })
  const result = await page.evaluate(() => {
    return implementationSwitchIsEnabled('FEE_BetterConsumerSearch');
  });
  console.log('Switch state: ', result);
  await page.goto('https://clients.mindbodyonline.com/LoginLaunch?studioid=-4803');
  await browser.close();
})();