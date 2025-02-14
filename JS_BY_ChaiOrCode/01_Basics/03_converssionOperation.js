let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

console.log(score);


let valueInNumber = Number(score)  // it converts string to numbers
console.log(typeof(valueInNumber));   // 33abc is string after convert it into number it provides NaN   - not a number

console.log(valueInNumber);

let a = null
console.log(typeof(a))
console.log(a);

let b = Number(a)
console.log(typeof(b))
console.log(b);




// "33" => 33
// "33abc" => NaN -> Not a number
// true => 1 : false => 0


let isLoggedIn = 1
let booleanIsLogedIn = Boolean(isLoggedIn)

console.log(typeof(booleanIsLogedIn))
console.log(booleanIsLogedIn);


// 1 => true
// 0 => false
// "" => false
// "Naman" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber))

// *********************************Operation *********************************

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);        => 2 ^ 2
// console.log(2/3);
// console.log(2%3);

//Concatination of strings

// let str1 = "Hello "
// let str2 = "Naman"

// str3 = str1+str2
// console.log(str3);

// console.log("1"+2)
// console.log(1+"2");
// console.log("1"+2+3);
// console.log(1+2+"3");


// console.log(+true); = 1  => bad habit

// let num1, num2, num3;
// num1 = num2 = num3 = 2+2

let gamecounter = 100;

// ++gamecounter;  => pre increament
console.log(++gamecounter)
// gamecounter++;    => post increament
console.log(gamecounter++)


let x = 3;
const y = x++;
console.log(`x : ${x} , y : ${y}`);

let i = 3;
const j = ++i;
console.log(`i : ${i} , j : ${j}`);