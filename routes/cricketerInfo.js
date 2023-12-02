const express = require('express');

const route = express.Router();

const controller = require('../controller/cricketerInfo')

route.get('/getInfo',controller.getInfo);

route.post('/postInfo',controller.postInfo);

module.exports = route;