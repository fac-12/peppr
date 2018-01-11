const request = require('request');
const cheerio = require('cheerio');

const jamieoliver = (url, req, res) => {

  request(url, (error, response, body) => {

    // NEED TO DO ERROR HANDLING

    const $ = cheerio.load(body);

    const title = $('h1.hidden-xs').text();
    let ingredients = '';
    let method = '';

    $('.ingred-list').children().each((index, element) => {
      const regex = /\S+/gi;
      ingredients += $(element).text().match(regex).join(' ') + '\n';
    });

    $('.recipeSteps').children().each((index, element) => method += $(element).text().trim() + '\n\n');

    const imageUrl = `http:${$('picture > source')['0'].attribs.srcset}`;
    const tags = '';

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

module.exports = jamieoliver;
