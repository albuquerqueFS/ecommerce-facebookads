let express = require('express')
let app = express();
let bodyParser = require('body-parser');

var dbConnection = require('../services/database.service');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World with Express'));

module.exports = app;