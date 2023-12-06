const submit = document.getElementById('submit');
const search = document.getElementById('search');
const edit = document.getElementById('edit');

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

let isEditing = false;

submit.addEventListener('click',async(e)=>{
    e.preventDefault();
    const info ={'name':name.value ,'birthdate':birthdate.value ,'photoUrl':photoUrl.value ,'birthplace':birthplace.value ,'career':career.value ,'numOfMatch':numOfMatch.value ,'score':score.value ,'fifties':fifties.value ,'centuries':centuries.value ,'wickets':wickets.value ,'average':average.value};
    
    try{
        if(!isEditing){
            const getPostInfo = await axios.post('http://localhost:3000/postInfo',{info});
            showInfoPage(getPostInfo.data)
        }else{
            const getPostInfo = await axios.put('http://localhost:3000/editInfo',{info});
            isEditing = false;
            showInfoPage(getPostInfo.data)
        }
        clearFields();
        
    }catch(err){
        console.log(err);
    }  
})

search.addEventListener('click',async()=>{
    const player = document.getElementById('searchPlayer');
    const plName = player.value;
    try{
        const getPlayer = await axios.get(`http://localhost:3000/getInfo?name=${plName}`)
        if(getPlayer.data){
            showInfoPage(getPlayer.data);
        }else{
            const error = document.getElementById('errorMsg');
            error.style.color='red'
            error.innerText = 'player not found'
            setTimeout(()=>{
                error.innerText ="";
            },2000)
        }
        
        player.value="";
        centerInfo();
    }catch(err){
        console.log(err)
    }
})

edit.addEventListener('click',async()=>{
    const plname = document.getElementById('plName');
    try{
        const getEdit = await axios.get(`http://localhost:3000/getInfo?name=${plname.innerText}`);
        fillToEdit(getEdit.data);
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

    const image = document.getElementById('plImg');
    const plName = document.getElementById('plName');
    const birthdate = document.getElementById('plBirthdate');
    const age =  new Date().getFullYear() - parseInt(date)
    console.log(age)
    
    image.src=url;
    plName.innerText=playerName;
    birthdate.innerText=`${date}( age : ${age} )`;
}

function personalInfo(M,R,F,C,A,W,cR){
   
    const matches = document.getElementById('plMatch');
    const runs = document.getElementById('plRuns');
    const fifties = document.getElementById('plFifties');
    const centuries = document.getElementById('plCenturies');
    const average = document.getElementById('plAverage');
    const wickets = document.getElementById('plWickets');
    const career = document.getElementById('plCareer');

    matches.innerText=`matches :${M}`;
    runs.innerText=`runs :${R}`;
    fifties.innerText=`fifties :${F}`;
    centuries.innerText=`centuries :${C}`;
    average.innerText=`average :${A}`;
    wickets.innerText=`wickets :${W}`;
    career.innerText =cR;

}

function fillToEdit(data){
    isEditing = true;

    name.value=data.name;
    birthdate.value=data.birthdate;
    photoUrl.value=data.photoUrl;
    birthplace.value=data.birthplace;
    career.value=data.career;
    numOfMatch.value=data.numOfMatch;
    score.value=data.score;
    fifties.value=data.fifties;
    centuries.value=data.centuries;
    wickets.value=data.wickets;
    average.value=data.average;
}

function clearFields(){

    name.value='';
    birthdate.value='';
    photoUrl.value='';
    birthplace.value='';
    career.value='';
    numOfMatch.value='';
    score.value='';
    fifties.value='';
    centuries.value='';
    wickets.value='';
    average.value='';
}

function centerElement() {
    const main = document.getElementById('main');
    var scrollAmount = main.offsetTop - window.innerHeight / 2 + main.clientHeight / 2;

    window.scrollTo({
      top: scrollAmount,
      behavior: "smooth" 
    });
}

function centerInfo(){
    const showInfo = document.getElementById('showInfo');
    var scrollAmount = showInfo.offsetTop + showInfo.clientHeight / 2;

    window.scrollTo({
      top: scrollAmount,
      behavior: "smooth" 
    });
}
