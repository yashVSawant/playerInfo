const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const player = sequelize.define('Player',{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        primaryKey:true
    },
    imageUrl:Sequelize.TEXT
});

module.exports = player;