let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let bgm = document.getElementById("bgmusic")


let punch1 = document.getElementById("punch1");
let punch2 = document.getElementById("punch2");
let kick = document.getElementById("kick");
let chop = document.getElementById("chop");
let auds = [punch1, punch2, kick, chop];

let rockimg1 = document.getElementById("rockimg1");
let paperimg1 = document.getElementById("paperimg1");
let scissorsimg1 = document.getElementById("scissorsimg1");
let rockimg2 = document.getElementById("rockimg2");
let paperimg2 = document.getElementById("paperimg2");
let scissorsimg2 = document.getElementById("scissorsimg2");

let cs=0;
let ps=0;
let cscore = document.getElementById("cscore");
let pscore = document.getElementById("pscore");

let boomimg = document.getElementById("boom");
let lostboom = document.getElementById("lostboom");
let wonboom = document.getElementById("wonboom");


let choices = ['r','p','s'];
let compch;
let plch;


function playgame(x){
    let audch = Math.floor(Math.random()*4);
    auds[audch].play()
    plch = x.slice(0,1)
    btnvisibility("none");
    let y = Math.floor(Math.random()*3);  
    compch = choices[y];        //computers choice
    setTimeout(() => {
        if(x=="rock"){
            rockimg1.style.display = "inline";
        }
        else if(x=="paper"){
            paperimg1.style.display = "inline";
        }
        else if(x=="scissors"){
            scissorsimg1.style.display = "inline";
        }
        
    }, 200);
    setTimeout(() => {
        audch = Math.floor(Math.random()*4);
        auds[audch].play()
    
        if(compch=='r'){
            rockimg2.style.display = "inline";
        }
        else if(compch=="p"){
            paperimg2.style.display = "inline";
        }
        else if(compch=="s"){
            scissorsimg2.style.display = "inline";
        }
        
    }, 1200);
    setTimeout(() => {
        scorecounter()
        imgvisibility("none")
        btnvisibility("inline-block")
        if(ps==3){
            bgm.muted = true;
            document.getElementById("winneraudio").play();
            wonboom.style.display = "flex";
            buttonss(true)
        }
        else if(cs==3){
            bgm.muted = true;
            lostboom.style.display = "flex";
            document.getElementById("loseraudio").play();
            buttonss(true)
        }
    }, 3000);
}


function btnvisibility(k){
    rock.style.display = k;
    paper.style.display = k;
    scissors.style.display = k;
}
function imgvisibility(m){
    rockimg1.style.display = m;
    paperimg1.style.display = m;
    scissorsimg1.style.display = m;
    rockimg2.style.display = m;
    paperimg2.style.display = m;
    scissorsimg2.style.display = m;
}


function scorecounter(){
    if(plch=='r'){
        if(compch=='r'){
        }
        else if(compch=='p'){
            cs+=1;
            cscore.innerHTML = cs.toString()
        }
        else if(compch=='s'){
            ps+=1;
            pscore.innerHTML = ps.toString()

        }
        else{

        }
    }
    if(plch=='p'){
        if(compch=='p'){
        }
        else if(compch=='s'){
            cs+=1;
            cscore.innerHTML = cs.toString()
        }
        else if(compch=='r'){
            ps+=1;
            pscore.innerHTML = ps.toString()

        }
        else{
            
        }
    }
    if(plch=='s'){
        if(compch=='s'){
        }
        else if(compch=='r'){
            cs+=1;
            cscore.innerHTML = cs.toString()
        }
        else if(compch=='p'){
            ps+=1;
            pscore.innerHTML = ps.toString()

        }
        else{
            
        }
    }
}

if(ps==7){
    bgm.muted = true;
    boomimg.display = "flex";
    wonboom.display = "flex";
    document.getElementById("winneraudio").play();
}
else if(cs==7){
    bgm.muted = true;
    boomimg.display = "flex";
    lostboom.display = "flex";
    document.getElementById("loseraudio").play();
}

function buttonss(a){
    rock.disabled = a;
    paper.disabled = a;
    scissors.disabled = a;
}