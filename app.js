const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();


const sequelize = require('./util/database');
const userRoute = require('./routes/cricketerInfo');
const errorRoute = require('./routes/error');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));
app.use(cors());

app.get('/addInfo',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})
app.use(userRoute);
app.use(errorRoute);

sequelize.sync()
.then(res=>{
    app.listen(3000);
})
.catch(err=>console.log(err))

