const express = require('express');

const route = express.Router();

const error = require('../controller/error');

route.use('/',error.getError);

module.exports = route;