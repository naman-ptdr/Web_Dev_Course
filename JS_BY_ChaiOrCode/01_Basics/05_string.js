const name = "naman"
const repoCount = 50

// console.log(name + repoCount + "Value");

// using backticks
console.log(`Hello my name is ${name} ans my repo count is ${repoCount} ${"Value"}`)

//  object of string
const gameName = new String('Naman-Patidar')  //contructor

console.log(typeof(name))       // string
console.log(typeof(gameName))   // object 

console.log(gameName[0])
console.log(gameName.__proto__)     // in browser check prototype by inspect

console.log(gameName.length)
console.log(gameName.toUpperCase())     // not chenged original value
console.log(String(gameName));

console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0,4)    // excluding 4 th index
console.log(newString)
const anotherString = gameName.slice(-8,7) // end sai 8th index and front sai 7th
console.log(anotherString)


const newStringOne = "     naman patidar"
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://naman.com/patidar%20tejra"  // if someone enter -"https://naman.com/patidar tejra"   ---- 
// browser space ko %20 mai replace kar deta hai and we want to change space by -
console.log(url.replace('%20', '-'))

console.log(url.includes('hay'))

const str = new String("The quick brown fox jumps over the lazy dog.")
// console.log(str.split(' '));
const words = str.split(' ');
console.log(words[3])

const chars = str.split('');
console.log(chars[8])

