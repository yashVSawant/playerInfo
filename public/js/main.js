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
        const getPlayer = await axios.get(`http://localhost:3000/getInfo?name=${name}`)
        console.log(getPlayer.data);
        showInfoPage(getPlayer.data);
    }catch(err){
        console.log(err)
    }
})

function showInfoPage(data){
 const showInfoDiv = document.getElementById('showInfo');
 showInfoDiv.style.display='inline'
 imageAndInfo(data.photoUrl,data.name,data.birthdate);
 personalInfo(data.numOfMatch,data.score,data.fifties,data.centuries,data.average,data.wickets,data.career)
}

function imageAndInfo(url,playerName,date){
    const getDiv = document.getElementById('imageAndInfo');
    const image = document.createElement('img');
    const name = document.createElement('h3');
    const birthdate = document.createElement('p');
    const age =  new Date().getFullYear();

    image.src=url;
    name.innerText=playerName;
    birthdate.innerText=date;

    getDiv.appendChild(image);
    getDiv.appendChild(name);
    getDiv.appendChild(birthdate);

}

function personalInfo(M,R,F,C,A,W,cR){
    const getDiv = document.getElementById('personalInfo');
    const careerDiv = document.getElementById('careerInfo');

    const matches = document.createElement('p');
    const runs = document.createElement('p');
    const fifties = document.createElement('p');
    const centuries = document.createElement('p');
    const average = document.createElement('p');
    const wickets = document.createElement('p');
    const career = document.createElement('p');
    matches.innerText=`matches :${M}`;
    runs.innerText=`runs :${R}`;
    fifties.innerText=`fifties :${F}`;
    centuries.innerText=`centuries :${C}`;
    average.innerText=`average :${A}`;
    wickets.innerText=`wickets :${W}`;
    career.innerText =cR

    getDiv.appendChild(matches);
    getDiv.appendChild(runs);
    getDiv.appendChild(fifties);
    getDiv.appendChild(centuries);
    getDiv.appendChild(average);
    getDiv.appendChild(wickets);

    careerDiv.appendChild(career);
}