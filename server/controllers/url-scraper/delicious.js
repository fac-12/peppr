const request = require('request');
const cheerio = require('cheerio');

const delicious = (url, req, res) => {
  //error handling needed
  request(url, (error, response, body) => {

    const $ = cheerio.load(body);
    const title = $('h1.post-title').text();
    let ingredients = '';
    let method = '';

    $('.ingredient-box .content ul li').each((index, element) => {
      ingredients += $(element).text().trim() + '\n'
    });

    $('ol li').each((index, element) => {
      method += $(element).text().trim() + '\n\n'
    })

    const imageUrl = `${$('.attachment-recipes-featured').attr('src')}`;
    const tags ='';

    const scrapedRecipe = {
      title,
      ingredients,
      method,
      imageUrl,
      tags
    }

    res.status(200).send(scrapedRecipe);
  });
}

module.exports = delicious;
