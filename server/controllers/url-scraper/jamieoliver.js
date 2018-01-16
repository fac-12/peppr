const request = require('request');
const cheerio = require('cheerio');

const jamieoliver = (url, req, res) => {

  request(url, (err, response, body) => {

    if(err) return res.status(500).send({ error: "There was a  network issue. Please make sure you are connected to the internet"});

    const $ = cheerio.load(body);
    const title = $('h1.hidden-xs').text();
    let ingredients = '';
    let method = '';

    if (!title){
      return res.status(422).send({ error: 'Something went wrong. Please make sure the url is complete'})
    }

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
