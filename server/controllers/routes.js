const router = require('express').Router();
const passport = require('passport');
const passportService = require('../services/passport');
const { signIn, signUp } = require('./auth');

const requireSignin = passport.authenticate('local')

router.post('/signin', requireSignin, signIn);
router.post('/signup', signUp);

module.exports = router;
