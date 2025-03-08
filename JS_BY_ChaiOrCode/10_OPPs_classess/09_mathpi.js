
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")            // property of object

console.log(descriptor);
// in implementation of js in engine we cant override 
// this (PI) prorerty because it is hardcoded false to 
// writable and checks are also there not enumrable 
// and not configurable

// we can gives hardcoded value to any property and 
// give some checks that it cant be override or writable

const chai = {
    name : 'ginger chai',
    price : 250,
    isAvaible : true,

    orderChai : function(){
        console.log("Chai nahi bani !");
        
    }
}

console.log(chai);
//  descriptor properties of this chai obj is also available and we can set that properties

// console.log(Object.getOwnPropertyDescriptor(chai, "price"));

// Object.defineProperty(chai, 'price',{
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "price"));


Object.defineProperty(chai, 'name', {
    enumerable: false                 // it is prevente to iterate
})
for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }    
}

