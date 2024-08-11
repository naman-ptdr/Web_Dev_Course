let fruits = ["Mango", "Apple", "Litchi"]
fruits[2] = "Banana"  // Because array are mutable
fruits[0][1] = "N"  // Because string is immutable

console.log(fruits, fruits.length)

fruits[10] = "Papaya"
console.log(fruits, fruits.length)