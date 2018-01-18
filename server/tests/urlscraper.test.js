const test = require('tape');
const request = require('supertest');
const app = require('../app');
const dbBuild = require('../database/db_build');

const urlScraper = () => {
  test('test for urlScraper route', t => {

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlhdCI6MTUxNjI2OTY3NzgzMn0.zuVeFStyNFLJDo-Qw4g3YRTwqR6xhlipfQCMRdL1BJE";

    const goodurl = {
      "url":
      "https://www.jamieoliver.com/recipes/pork-recipes/pork-meatballs/"
    }
    const nonpartnersite = {
      "url":
      "https://www.google.com"
    }

    const badpartnerurl = {
      "url":
      "https://www.jamieoliver.com/recipes/fkjldkfslf"
    }

    dbBuild(() => {
      request(app)
        .post('/urlscraper')
        .set('authorization', token)
        .send(goodurl)
        .end((err, res) => {
          t.error(err);
          t.equal(res.status, 200, 'request with valid url should generate 200 response');
        });

      request(app)
        .post('/urlscraper')
        .set('authorization', token)
        .send(nonpartnersite)
        .end((err, res) => {
          t.error(err);
          t.equal(res.body.error, 'We can\'t find recipes from this website. Please try one of our partner sites', 'request from a non partner site should return error message "We can\'t find recipes from this website"');
        });

      request(app)
        .post('/urlscraper')
        .set('authorization', token)
        .send(badpartnerurl)
        .end((err, res) => {
          t.error(err);
          t.equal(res.body.error, 'Something went wrong. Please make sure the url is complete', 'bad url from a partner site should return error message "Something went wrong. Please make sure the url is complete"');
          t.end();
        });  
    });
  })
}

module.exports = urlScraper;
