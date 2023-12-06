const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Playerinfo = sequelize.define('Playerinfo',{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        primaryKey:true
    },
    photoUrl:Sequelize.STRING,
    birthdate:Sequelize.DATEONLY,
    birthplace:Sequelize.STRING,
    career:Sequelize.TEXT,
    numOfMatch:Sequelize.INTEGER,
    score:Sequelize.INTEGER,
    fifties:Sequelize.INTEGER,
    centuries:Sequelize.INTEGER,
    wickets:Sequelize.INTEGER,
    average:Sequelize.INTEGER
});

module.exports = Playerinfo;