const player = require('../modules/player');
const playerinfo = require('../modules/playerInfo');

exports.getInfo = async(req,res,next)=>{
    try{
        const getPlayerName = req.query.name;
        const getInfo = await playerinfo.findByPk(getPlayerName)
        res.json(getInfo);
    }catch(err){
        console.log(err)
    }
    
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

exports.editInfo = async(req,res,next)=>{
    const got = req.body.info;
   
    try{
        const player = await playerinfo.findByPk(got.name);
        player.birthdate=got.birthdate;
        player.photoUrl=got.photoUrl;
        player.birthplace=got.birthplace;
        player.career=got.career
        player.numOfMatch=got.numOfMatch
        player.score=got.score
        player.fifties=got.fifties
        player.centuries=got.centuries
        player.wickets=got.wickets
        player.average=got.average
        const saved = await player.save()
        res.json(saved);
    }catch(err){
        console.log(err)
    }
}