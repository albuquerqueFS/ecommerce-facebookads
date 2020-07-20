let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');
let morgan = require('morgan');

var dbConnection = require('../services/database.service');

var usersRoute = require('../routes/user.route.js');
var addressRoute = require('../routes/address.route');

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', usersRoute);
app.use('/address', addressRoute);

module.exports = app;