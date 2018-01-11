const request = require('request');
const cheerio = require('cheerio');

const bbcgf = (url, req, res) => {

  request(url, (error, response, body) => {

    // NEED TO DO ERROR HANDLING

    const $ = cheerio.load(body);
    const ingredients = [];
    const method = [];

    $('.ingredients-list__item').each((index, element) => {
        if ($(element).children().first().hasClass('ingredients-list__glossary-link')) {
          const prev = $(element).children().first()['0'].prev ? $(element).children().first()['0'].prev.data : '';
          const middle = $(element).children().html()
          const next = $(element).children().first()['0'].next.type === 'text' ? $(element).children().first()['0'].next.data : '';

          ingredients[index] = prev + middle + next;
        }
        else ingredients[index] = $(element).html();
    });

    $('.method__item').each((index, element) => {
      method[index] = $(element).children().first().text();
    })

    const imageUrl = `http:${$('.img-container').children().first().attr('src')}`;

    const scrapedRecipe = {
      imageUrl,
      ingredients,
      method
    }

    res.status(200).send(scrapedRecipe);
  });
}

module.exports = bbcgf;
