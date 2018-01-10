const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const queries = require('../controllers/queries');
const { comparePassword } = require('./bcrypt');

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  queries
  .getUser(email)
  .then(user => {
    done(null, user);
  })
});

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