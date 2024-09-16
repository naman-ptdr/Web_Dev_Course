
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

