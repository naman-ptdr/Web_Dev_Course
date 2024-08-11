let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)


// let myCreatedDate = new Date(2023, 0, 28)   // 2023 year 23 - date 0 - month
// let myCreatedDate = new Date(2023, 0, 28, 5, 3)
// let myCreatedDate = new Date("2023-01-28") // -- > yy-mm-dd
let myCreatedDate = new Date("01-28-2023") // -- > mm-dd-yy

console.log(myCreatedDate.toLocaleString())