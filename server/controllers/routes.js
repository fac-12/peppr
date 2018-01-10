const router = require('express').Router();
const urlScraper = require('./url-scraper/urlScraper');
const passport = require('passport');
const passportService = require('../services/passport');
const { signIn, signUp } = require('./auth');

const requireSignin = passport.authenticate('local')

router.post('/signin', requireSignin, signIn);
router.post('/signup', signUp);

router.post('/urlscraper', urlScraper);

module.exports = router ;
