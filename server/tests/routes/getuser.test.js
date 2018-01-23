const test = require('tape');
const request = require('supertest');
const app = require('../../app');
const dbBuild = require('../../database/db_build');

const getUserTest = () => {
  test('Routes: test for getuser route', t => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjJ9.HMoOEdhfc2lPj11Y_Tu7_4BcvL4g263YLlhXMSYj7FA"
    dbBuild(() => {
      request(app)
        .get('/getuser')
        .set('authorization', token)
        .end((err, res) => {
          t.error(err);
          t.equal(res.status, 200, 'request with valid token should generate 200 response');

        request(app)
          .get('/getuser')
          .end((err, res) => {
            t.error(err);
            t.equal(res.status, 401, 'request without token should return a 401 response');
            t.end();
          });
        });
    })
  });
}

module.exports = getUserTest;
