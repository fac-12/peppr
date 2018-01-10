const request = require('request');
const cheerio = require('cheerio');


const delicious = (url, req, res) => {

  request(url, (error, response, body) => {

    const $ = cheerio.load(body);
    const ingredients = [];
    const method = [];

    $('.ingredient-box .content').each((index, element) => {
      ingredients[index] = $(element).children().text().trim().split('\n')
    });

    $('ol li').each((index, element) => {
      method[index] = $(element).text()
    })

    const imageUrl = `${$('.attachment-recipes-featured').attr('src')}`;

    const scrapedRecipe = {
      imageUrl,
      ingredients,
      method
    }

    res.status(200).send(scrapedRecipe);
  });
}

module.exports = delicious;