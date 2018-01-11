const db = require('../database/db_connections');

const getUser = email => {
  return db.query('SELECT * FROM users WHERE email = $1', [email])
  .then(user => user[0])
}

const getUserById = id => {
  return db.query('SELECT * FROM users WHERE id = $1', [id])
  .then(user => user[0])
}

const addUser = (name, email, password) => {
  return db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING NAME, ID`, [name, email, password])
  .then(user => user[0])
}

const addRecipe = (title, ingredients, method, imageUrl, tags, userId)=> {
  return db.query(`INSERT INTO recipes(userId, title, imgUrl, ingredients, method, tags) VALUES ($1, $2, $3, $4, $5, $6)`,[userId, title, imageUrl, ingredients, methods, tags])
}


module.exports = {
  getUser,
  addUser,
  getUserById,
  addRecipe
}
