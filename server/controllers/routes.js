const router = require('express').Router();
const urlScraper = require('./url-scraper/urlScraper');
const passport = require('passport');
const passportService = require('../services/passport');
const { signIn, signUp, getUser } = require('./auth');

const requireSignin = passport.authenticate('local', { session: false })
const requireAuth = passport.authenticate('jwt', { session: false });

router.post('/signin', requireSignin, signIn);
router.post('/signup', signUp);
router.get('/getuser', requireAuth, getUser);

router.post('/urlscraper', urlScraper);

module.exports = router ;
