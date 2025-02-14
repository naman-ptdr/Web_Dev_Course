let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleString())


console.log(typeof myDate)


// let myCreatedDate = new Date(2023, 0, 28)   // 2023 year 23 - date 0 - month
// let myCreatedDate = new Date(2023, 0, 28, 5, 3)
// let myCreatedDate = new Date("2023-01-28") // -- > yy-mm-dd
let myCreatedDate = new Date("01-28-2023") // -- > mm-dd-yy

console.log(myCreatedDate.toLocaleString())

// time stamps
 let myTimeStamp = Date.now()
 console.log(myTimeStamp)  // milisecands  1st jan 1970 to now

 console.log(myCreatedDate.getTime()) // date to milisecands

//  mili second to seconds
console.log(Math.round(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1) // start from 0
console.log(newDate.getDay())  // monday = 1
console.log(newDate.getFullYear())


//    ---------------- Important method ----------------------
newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone: ''
})