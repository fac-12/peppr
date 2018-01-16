const request = require('request');
const cheerio = require('cheerio');

const delicious = (url, req, res) => {

  request(url, (err, response, body) => {

    if(err) return res.status(500).send({ error: "There was a  network issue. Please make sure you are connected to the internet"});

    const $ = cheerio.load(body);
    const title = $('h1.post-title').text();
    let ingredients = '';
    let method = '';

    if (!title){
      return res.status(422).send({ error: 'Something went wrong. Please make sure the url is complete'})
    }

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
