let score = "33abc"

console.log(typeof score);
console.log(typeof(score));



let valueInNumber = Number(score)
console.log(typeof(valueInNumber));

console.log(valueInNumber);




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


// let str1 = "Hello "
// let str2 = "Naman"

// str3 = str1+str2
// console.log(str3);

// console.log("1"+2)
// console.log(1+"2");
// console.log("1"+2+3);
// console.log(1+2+"3");


// console.log(+true);  => bad habit

// let num1, num2, num3;
// num1 = num2 = num3 = 2+2

let gamecounter = 100;

// ++gamecounter;  => pre increament
console.log(++gamecounter)
// gamecounter++;    => post increament
console.log(gamecounter++)