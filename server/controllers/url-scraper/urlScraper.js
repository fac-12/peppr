const bbcgf = require('./bbcgf');

const urlScraper = (req, res) => {

  const { url } = req.body;

  if(url.includes('bbcgoodfood')) bbcgf(url, req, res);

};

module.exports = urlScraper;
