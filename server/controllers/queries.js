const db = require('../database/db_connections');

const getUser = email => {
  return db.query('SELECT * FROM users WHERE email = $1', [email])
  .then(user => user[0])
}

const addUser = (name, email, password) => {
  return db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING NAME, ID`, [name, email, password])
  .then(user => user[0])
}

module.exports = {
  getUser,
  addUser
}