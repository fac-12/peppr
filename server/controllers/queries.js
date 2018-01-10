const db = require('../database/db_connections');

const getUser = email => {
  return db.query('SELECT * FROM users WHERE email = $1', [email])
  .then(user => user[0])
}

module.exports = {
  getUser
}