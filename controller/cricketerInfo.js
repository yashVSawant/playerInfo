const playerinfo = require('../modules/playerInfo');

exports.getInfo = async(req,res,next)=>{
    const getPlayerName = req.query.name;
    const getInfo = await playerinfo.findByPk(getPlayerName)
    res.json(getInfo);
}

exports.postInfo = async(req,res,next)=>{
    const got =  req.body;
    try{
    const posted = await playerinfo.create(got.info);
    res.json(posted);

    }catch(err){
        console.log(err)
    }
    
    
}