const makePDF = require('./makepdf.js');
const takeScreenshot = require('./takescreenshot.js');
const scrape = require('./scrape.js');

const url = 'https://google.com';
const fileName = 'google';

makePDF(url, fileName);
takeScreenshot(url, fileName);
scrape(url);
