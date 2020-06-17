const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setDefaultTimeout(5000);
  
  //emitted when uncaught exception happens within the page
  page.on('pageerror', error => {
    console.log(error.message);
   }); 
   
  
  await page.goto('https://clients.mindbodyonline.com/launch');
  await browser.close();
})();
