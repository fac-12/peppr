const bbcgf = require('./bbcgf');
const jamieoliver = require('./jamieoliver');
const delicious = require('./delicious');

const urlScraper = (req, res) => {

  const { url } = req.body;

  if(url.includes('bbcgoodfood')) bbcgf(url, req, res);
  else if(url.includes('jamieoliver')) jamieoliver(url, req, res);
  else if(url.includes('deliciousmagazine')) delicious(url, req, res);

};

module.exports = urlScraper;
