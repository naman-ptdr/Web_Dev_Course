// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

// console.log(randomColor());
// console.log(Math.floor(Math.random() * 16));          // values from 0-16

let intervalId;
const startChangingColor = function(){
    function changeBGColor(){
        document.body.style.backgroundColor = randomColor();
    }
    if(!intervalId){
    intervalId = setInterval(changeBGColor, 1000);
    }
};
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
};
document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);
