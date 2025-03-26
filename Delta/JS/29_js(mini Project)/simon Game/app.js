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

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}


function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;
    
    let randInd = Math.floor(Math.random()*3);
    let randColor = btns[randInd];
    let randbtn = document.querySelector(`.${randColor}`);
    console.log(randbtn);
    btnFlash(randbtn);
}