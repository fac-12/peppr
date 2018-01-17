const test = require('tape');
const request = require('supertest');
const app = require('../app');
const dbBuild = require('../database/db_build');

const signUpTest = () => {

  test('test for signup route', t => {
    const alreadyExists = {name:'Jim', email: 'jim@gmail.com', password: 'password'};
    const invalidSignUp = {name:'', email: '', password:'zxcvb'};
    const validSignUp = {name:'Tunde', email:'tunde@gmail.com', password:'password'};
    dbBuild(() => {
      request(app)
        .post('/signup')
        .send(alreadyExists)
        .end((err, res) => {
          t.equal(res.status, 422, 'Email in use should return 422 status');
          t.equal(res.body.error, 'Email is in use. Please login', 'Should return error message saying email is in use');
        });

      request(app)
        .post('/signup')
        .send(invalidSignUp)
        .end((err, res) => {
          t.equal(res.status, 422, 'invalid signup details should return` 422 status');
          t.equal(res.body.error, 'You must provide a name, email and password', 'user details missing should return an error message');
        });

      request(app)
        .post('/signup')
        .send(validSignUp)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          t.equal(res.body.hasOwnProperty('token'), true, 'response object should have a property "token"');
          t.end();
        });

    })
  });
}

module.exports = signUpTest;
