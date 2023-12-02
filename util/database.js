const Sequelize = require('sequelize');

const sequelize = new Sequelize('cricketinfo-database','root','Yash1234',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;