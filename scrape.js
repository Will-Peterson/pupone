const puppeteer = require('puppeteer');

async function scrape(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const title = await page.title();

  console.log(title);
  await browser.close();
}

module.exports = scrape;