const name = "naman"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name.toUpperCase} ans my repo count is ${repoCount}`)

//  object of string
const gameName = new String('Naman-Patidar')

console.log(typeof(name))
console.log(typeof(gameName))

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(-8,4)
console.log(anotherString)


const newStringOne = "     naman patidar"
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://naman.com/patidar%20tejra"
console.log(url.replace('%20', '-'))

console.log(url.includes('hay'))
