const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const queries = require('../controllers/queries');
const { comparePassword } = require('./bcrypt');

const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  queries
  .getUser(email)
  .then(user => {
    if (!user) {return done(null, false)}
    return comparePassword(password, user)
  })
  .then(({ isMatch, user }) => {
    if (!isMatch) { return done(null, false) }
    return done(null, user)
  })
  .catch(done)
})

passport.use(localLogin);