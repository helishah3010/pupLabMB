const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch({headless:false, args: ['--start-fullscreen']})
const page = await browser.newPage()
await page.setViewport({
    width: 1920,
    height: 1080
}); 
await page.goto('https://mindbodyonlne.com/business');

await page.screenshot({
    path: 'home.png'
})

await browser.close();
})();