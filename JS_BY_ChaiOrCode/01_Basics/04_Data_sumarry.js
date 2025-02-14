//  kis type se data ko memorry mai rakha jata hai or acces kiya jata hai
//  therefor data devided into two catagories

// 1. Primitive 
// call by value inki copy banti hai

// 7 types : String , Number, Boolean, null , undefined, Symbol
// BigInt 
const name = "Naman"
const number = 100
const cgpa = 9.9
const isPass = true
const temprature = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const bigNumber = 34988736555577564n
console.log(typeof bigNumber);
console.log(typeof temprature);
userEmail = "namuu";
console.log(userEmail);
// temprature = 30;               // not possible
console.log(temprature);


// Non primitive (Reference)
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


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "namanpatidary.com"
let anothername = myYoutubename
anothername = "namuusGamingy.com"

console.log(myYoutubename);
console.log(anothername);




let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "naman@gmail.com"

console.log(userOne);
console.log(userTwo);




// -------------------IMPORTANT ---------------------------------


// JavaScript is dynamically typed. This means that variable types are determined 
// at runtime rather than compile-time. In JavaScript, you do not have to declare 
// the data type of a variable when defining it. You can assign different types of 
// values to the same variable at different times, as shown below:

let x = 5;      // x is a number
x = "Hello";    // Now x is a string

// Type Inference at Runtime: The data type of a variable is inferred based 
// on the value it holds at runtime, not at the time of writing the code.

// No Type Declarations: You don't explicitly declare the type of variables 
// (like int, string, etc.). JavaScript determines the type as the program runs.

// Type Flexibility: A single variable can hold values of different types 
// throughout the execution of the program. This flexibility makes 
// JavaScript a dynamically typed language.