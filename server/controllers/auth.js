const queries = require('./queries');
const { hashPassword } = require('../services/bcrypt');

exports.signIn = (req, res) => {
  res.send("success")
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
    if(user){
      return res.status(422).send({ error: 'Email is in use, please sign in'})
    }
    return hashPassword(password)
  })
  .then(hash => {
    return queries.addUser(name, email, hash)
  })
  .then (user => {
    res.send(user)
  })
  .catch(console.log)
}