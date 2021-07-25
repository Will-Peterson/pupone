const makePDF = require('./makepdf.js');
const takeScreenshot = require('./takescreenshot.js');

const url = 'https://google.com';
const fileName = 'google';

makePDF(url, fileName);
takeScreenshot(url, fileName);
