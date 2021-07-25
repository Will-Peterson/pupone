const puppeteer = require('puppeteer');

async function takeScreenshot(url, fileName) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'networkidle0'});
  await page.screenshot({path: `img/${fileName}.png`});
  await browser.close();
}

module.exports = takeScreenshot;