const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const sequelize = require('./util/database');
const userRoute = require('./routes/cricketerInfo');
const player = require('./modules/player');
const playerInfo = require('./modules/playerInfo');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

player.hasOne(playerInfo);
playerInfo.belongsTo(player);

app.use(userRoute);
app.use((req,res,next)=>{
    res.status(404).send('Error : 404');
});

sequelize
.sync()
.then(res=>{
    app.listen(3000);
})
.catch(err=>console.log(err))

