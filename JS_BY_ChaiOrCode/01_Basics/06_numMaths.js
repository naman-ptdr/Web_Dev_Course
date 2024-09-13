const score = 400

const balance = new Number(100)

console.log(score)
console.log(balance)


console.log(balance.toString().length)
console.log(balance.toFixed(1))


const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3))

// const otherNumber1 = 123.8966
// console.log(otherNumber1.toPrecision(3))

// const otherNumber2 = 1123.8966
// console.log(otherNumber2.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

const maxV = Number.MAX_VALUE
const minV = Number.MIN_VALUE
// const maxSafe = MAX_SAFE_INTEGER

console.log(`Number max value is ${maxV}`);
console.log(`Number min value is ${minV}`);
// console.log(`Number max Safe value is ${maxSafe}`);





// -------------------------------MATHS-----------------------------

console.log(Math) // MATH LIBRARY IS AN OBJECT CONTAINS VARIOUS PROPERTY

// console.log(Math.abs(-4))
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)) // ->  5 
// console.log(Math.floor(4.9))  // -> 4

// sqrt , power

// console.log(Math.min(4, 6, 2, 9))
// console.log(Math.max(6, 3, 9, 1))

console.log(Math.random())  // [0, 1]
// min value will be 1 at below case
console.log((Math.random()*10) + 1)     // If 0.0__  then + 1
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min)

//  if we want random number in between a-4 and b-6
const ran = Math.random()
console.log(ran)
console.log(Math.floor(ran * (6-4 + 1)) + 4)
