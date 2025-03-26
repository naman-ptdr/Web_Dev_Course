let gameSeq=[];
let userSeq=[];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game Started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randInd = Math.floor(Math.random()*3);
    let randColor = btns[randInd];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerText = `Game Over ! Press any key To Start`
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(this);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}