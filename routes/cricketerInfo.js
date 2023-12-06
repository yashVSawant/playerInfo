const express = require('express');

const route = express.Router();

const controller = require('../controller/cricketerInfo')

route.get('/getInfo',controller.getInfo);

route.post('/postInfo',controller.postInfo);

route.put('/editInfo',controller.editInfo);

module.exports = route;