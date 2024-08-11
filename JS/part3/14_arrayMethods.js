
let cars = [ "Porsche", "Audi", "BMW", "XUV"]
console.log(cars)

cars.push("Ferarri", "Lambo")
console.log(cars)

console.log(cars.pop())
console.log(cars)

cars.unshift("Alto")
console.log(cars)

console.log(cars.shift())
console.log(cars)


let followers = ["a", "b", "c", "d", "e"]
let blocked = []

blocked[0] = followers.shift()
console.log(followers)
console.log(blocked)

blocked[1] = followers.pop()
console.log(followers)
console.log(blocked)

