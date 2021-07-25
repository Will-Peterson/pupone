const puppeteer = require('puppeteer');

async function makePDF(url, fileName) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'networkidle0'});
  await page.pdf({path: `pdf/${fileName}.pdf`, format: 'a4'});
  await browser.close();
};

module.exports = makePDF;