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

