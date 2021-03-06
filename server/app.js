const express = require('express');
const app = express();
const path = require('path');
const routes = require('./controllers/routes');

const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3001);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  })
}

module.exports = app;
