const test = require('tape');
const request = require('supertest');
const app = require('../app');
const dbBuild = require('../database/db_build');

const signInTest = () => {
  test('tape is working', (t)=>{
    const num = 2;
    t.equal(num, 2, 'should return 2');
    t.end();
  });

  test('test for signin route', t => {
    const invalidLogin = {email: 'qwerty', password:'asdfg'};
    const invalidPassword = {email: 'jim@gmail.com', password:'zxcvb'};
    const validLogin = {email:'jim@gmail.com', password:'password'};
    dbBuild(() => {
      request(app)
        .post('/signin')
        .send(invalidLogin)
        .end((err, res) => {
          t.equal(res.status, 401, 'invalid login should return a 401 response');
        });

      request(app)
        .post('/signin')
        .send(invalidPassword)
        .end((err, res) => {
          t.equal(res.status, 401, 'invalid password should return a 401 response');
        });

      request(app)
        .post('/signin')
        .send(validLogin)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          t.equal(res.body.hasOwnProperty('token'), true, 'response object should have a property "token"');
          t.end();
        });

    })
  });
}

module.exports = signInTest;
