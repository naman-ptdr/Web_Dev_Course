// Array

const myArr = [0, 1, 2, 3, 4, 5]    // myArr = [0, 1, 2, 3, 4, "naman", true] is possible in js
const myHeros = ["BhagatSingh", "ChandraShekharAazad", "Sadguru", "Sukhdev", "ShivajiRaje"]
const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(myArr[2]);


// SHALLOW COPY - a shallow copy of an object is a copy whose properties share the same references (point to same underlying values) as those of the source object from which the copy was made.
// As a result when you change either the source of the copy , you may also cause the other object to change too


// DEEOP COPY - A deep copy of an object is a copy whose properties do not share the same references as thode of the source object from which the copy was made. 
// As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too


// Array Methods

myArr.push(6)
myArr.push(8)

myArr.pop()

myArr.unshift(9)  // time consuming operation // it shift all values of array and insert 9 at begining
myArr.shift() // remove first element and shift

console.log(myArr.includes(11));
console.log(myArr.indexOf(3));     //indexOf(11) -- -1;

console.log(myArr);
const newArr = myArr.join()
console.log(newArr);
console.log(typeof(myArr));
console.log(typeof(newArr));


//  slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)        // it print index[1, 2] excluding three
console.log(myn1)
console.log("B", myArr);


const myn2 = myArr.splice(1, 3)            // it iclude 3 also print index[1, 3]
console.log(myn2);
console.log("C", myArr);

// In splice original array will be manipulate and splice elements are extrecting from this .