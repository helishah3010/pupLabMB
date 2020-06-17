const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setDefaultTimeout(50000);
    await page.goto('https://mindbodyonline.com/business'); 
    
    await page.waitForSelector('#block-mindbody-content > article > div > div > div > div > article > section.home__boldBanner.ctnr-main > a');
    page.click('#block-mindbody-content > article > div > div > div > div > article > section.home__boldBanner.ctnr-main > a');
    await page.waitForNavigation();
    
    const title = await page.title();
    console.log(title);
    await browser.close();
})();
