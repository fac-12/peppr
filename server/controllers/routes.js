const router = require('express').Router();
const passport = require('passport');
const passportService = require('../services/passport');

const { signIn } = require('./auth');

const requireSignin = passport.authenticate('local', { session: false })

router.post('/signin', requireSignin, signIn);

module.exports = router;
