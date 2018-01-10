const express = require('express');
const app = express();
const path = require('path');

//middleware
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

app.set('port', process.env.PORT || 3001);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'producution') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')))
}

module.exports = app;
