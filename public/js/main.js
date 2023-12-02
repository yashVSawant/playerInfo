const submit = document.getElementById('submit');
const search = document.getElementById('search');

submit.addEventListener('click',async()=>{
    const name = document.getElementById('name');
    const birthdate = document.getElementById('birthdate');
    const photoUrl = document.getElementById('photoUrl')
    const birthplace = document.getElementById('birthplace')
    const career = document.getElementById('career')
    const numOfMatch = document.getElementById('numOfMatch')
    const score = document.getElementById('score')
    const fifties = document.getElementById('fifties')
    const centuries = document.getElementById('centuries')
    const wickets = document.getElementById('wickets')
    const average = document.getElementById('average')
    const info ={'name':name.value ,'birthdate':birthdate.value ,'photoUrl':photoUrl.value ,'birthplace':birthplace.value ,'career':career.value ,'numOfMatch':numOfMatch.value ,'score':score.value ,'fifties':fifties.value ,'centuries':centuries.value ,'wickets':wickets.value ,'average':average.value};
    
    try{
        const getPostInfo = await axios.post('http://localhost:3000/postInfo',{info});
        console.log(getPostInfo);
    }catch(err){
        console.log(err);
    }  
})

search.addEventListener('click',async()=>{
    const player = document.getElementById('searchPlayer');
    const name = player.value;
    console.log(name);
    try{
        // const getPlayer = await axios.get(`http://localhost:3000/getInfo?name=${name}`)
        // console.log(getPlayer);
        showInfoPage();
    }catch(err){
        console.log(err)
    }
})

function showInfoPage(){
 const showInfoDiv = document.getElementById('showInfo');
 showInfoDiv.style.display='inline'
}