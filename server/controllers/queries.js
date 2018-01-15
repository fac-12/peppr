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

const addRecipe = (userId, title, ingredients, method, imageUrl, tags) => {
  return db.query(`INSERT INTO recipes (userId, title, imageurl, ingredients, method, tags) VALUES ($1, $2, $3, $4, $5, $6)`, [userId, title, imageUrl, ingredients, method, tags])
}

const getRecipes = (userId) => {
  return db.query('SELECT * FROM recipes WHERE userId = $1', [userId]);
}

const getSingleRecipe = (recipeId) => {
  return db.query('SELECT * FROM recipes WHERE id = $1', [recipeId])
  .then(recipe => recipe[0]);
}

const deleteRecipe = (recipeId) => {
  return db.query('DELETE FROM recipes WHERE id = $1', [recipeId]);
}

module.exports = {
  getUser,
  addUser,
  getUserById,
  addRecipe,
  getRecipes,
  getSingleRecipe,
  deleteRecipe
}
