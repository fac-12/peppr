const request = require('request');
const cheerio = require('cheerio');

const jamieoliver = (url, req, res) => {

  request(url, (error, response, body) => {

    // NEED TO DO ERROR HANDLING

    const $ = cheerio.load(body);
    const ingredients = [];
    const method = [];

    $('.ingred-list').children().each((index, element) => {
      const regex = /\S+/gi;
      ingredients[index] = $(element).text().match(regex).join(' ');
    });

    $('.recipeSteps').children().each((index, element) => method[index] = $(element).text().trim());

    const imageUrl = `http:${$('picture > source')['0'].attribs.srcset}`;

    const scrapedRecipe = {
      imageUrl,
      ingredients,
      method
    }

    res.status(200).send(scrapedRecipe);
  });
}

module.exports = jamieoliver;
