const test = require('tape');
const runDbBuild = require('../database/db_build.js');
const queries = require('../controllers/queries');

test('Queries: getUser query should return user object', (t) => {
  runDbBuild((err, res) => {
    queries.getUser('mike@gmail.com').then((res) => {
      t.equals(res.id, 1, 'getUser should return user object with an ID of 1');
      t.end();
    });
  });
});

test('Queries: getUserById query should return user object', (t) => {
  runDbBuild((err, res) => {
    queries.getUserById(1).then((res) => {
      t.equals(res.id, 1, 'getUserById should return user object with an ID of 1');
      t.end();
    });
  });
});

test('Queries: addUser query should return user object', (t) => {
  const user = {name: "Tim", email: "tim@gmail.com", password: "password123"}
  runDbBuild((err, res) => {
    queries.addUser(user.name, user.email, user.password).then((res) => {
      t.equals(res.id, 3, 'addUser should return user object with an ID of 3');
      t.end();
    });
  });
});

test('Queries: getRecipes query should return recipe object', (t) => {
  runDbBuild((err, res) => {
    queries.getRecipes(2).then((res) => {
      t.equals(res[0].id, 1, 'for user2, getRecipes should return recipe object with an ID of 1');
      t.end();
    });
  });
});

test('Queries: getSingleRecipe query should return recipe object', (t) => {
  runDbBuild((err, res) => {
    queries.getSingleRecipe(1).then((res) => {
      t.equals(res.id, 1, 'getSingleRecipe should return recipe object with an ID of 1');
      t.end();
    });
  });
});