//  kis type se data ko memorry mai rakha jata hai or acces kiya jata hai
//  therefor data devided into two catagories
// Primitive 
// call by value inki copy banti hai

// 7 types : String , Number, Boolean, null , undefined, Symbol
// BigInt 
const name = "Naman"
const number = 100
const cgpa = 9.9
const isPass = true
const nickName = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const bigNumber = 34988736555577564n
console.log(typeof bigNumber);
console.log(typeof nickName);


// Non primitive
// call by referances

// Arrays,  Objects, Functions    => objects are important

const heros = ["Shaktiman", "Naagraj", "doga"]

let myObj = {
    name: "Naman",
    age: 22,
    lastName: "Patidar",
}

const myFunction = function(){
    console.log("Hello World!");
    
}



// javascript is which type of language

// JavaScript is a multi-paradigm, ( dynamic language )
// with types and operators, standard built-in objects, and methods.