const puppeteer = require('puppeteer');
//const device = require('puppeteer/DeviceDescriptors');

(async () => {
    const browser = await puppeteer.launch({headless:true, args: ['--start-fullscreen']});
    const page = await browser.newPage();
    page.setDefaultTimeout(50000);
    await page.setViewport({
        width: 1920,
        height: 1080
    });
    //await page.emulate(device['iPad Mini']);
    await page.on('pageerror', error=>{
        console.log(error.message);
    });
    await page.goto('https://clients.mindbodyonline.com');
    
    await browser.close();
})();
