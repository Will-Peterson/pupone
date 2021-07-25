const puppeteer = require('puppeteer');
const url = 'https://google.com';
const imgFileName = 'google';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'networkidle2'});
  await page.screenshot({ path: `img/${imgFileName}.png` });

  await browser.close();
})();