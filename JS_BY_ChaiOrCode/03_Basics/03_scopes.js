
// globle scope

let a = 100
const b = 200
var c = 300

if(true){
    // block scope 
    let a = 10
    const b = 20
    // var not end in block it also be globle 
    var c = 30
    console.log(`Inner a : ${a}`);
    console.log(`Inner b : ${b}`);
    console.log(`Inner c : ${c}`);
    
}
console.log(`Outer a : ${a}`);
console.log(`Outer b : ${b}`);
console.log(`Outer c : ${c}`);


// Nested scopes

// Closure ----  child function can access perent function variables
function one(){
    const username = "Naman"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()

if(true){
    const username = "Naman"
    if(username==="Naman"){
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


//---------------------Interesting Question ------------------------
//HOSTING IN JS


// We can call function before its deffination 
console.log(addOne(5));

function addOne(num){   // this is called as function 
    return num+1
}

// addOne(5)

//  But can not call expression before function deffination . 
// This is called ***Hosting*** that how to declare functions , how they store , what their execussion context 

// console.log(addTwo(5));

const addTwo = function(num){     // this is also a function but it can be called as expression.  This variables can hold functions , JSON values
    return num+2
}

console.log(addTwo(5));
