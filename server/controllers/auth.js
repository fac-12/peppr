const queries = require('./queries');
const { hashPassword } = require('../services/bcrypt');
const jwt = require('jwt-simple');

const userToken = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.SECRET);
}


exports.signIn = (req, res) => {
  res.json({ token: userToken(req.user)});
}


exports.signUp = (req, res) => {
  const { name, email, password } = req.body;

  // validate
  if (!name || !email || !password){
    return res.status(422).send({ error: 'You must provide a name, email and password'})
  }

  queries
  .getUser(email)
  .then(user => {
    return new Promise((resolve, reject) => {
      if(user){
        res.status(422).send({ error: 'Email is in use'});
        reject('Email is in use');
      } else resolve(hashPassword(password));
    })
  })
  .then(hash => {
    console.log('hash', hash);
    return queries.addUser(name, email, hash)
  })
  .then (user => {
    res.json({ token: userToken(user)});
  })
  .catch(console.log)
}

exports.getUser = (req, res) => {
  res.send(req.user);
}
