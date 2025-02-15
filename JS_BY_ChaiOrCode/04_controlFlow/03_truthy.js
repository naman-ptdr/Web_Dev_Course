const userEmail = "n@naman.ai"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have user email");  
}


//  falsy value

// false, 0, -0, BigInt 0n, "", null , undefined, NaN

// Truthy value

// [], "0", 'flse', ' ', " ", {}, function(){}

// const arr = []
// if(arr.length === 0) console.log("Array is empty");

// ----- For check object is empty or not we have to create array of object keys and if this array of keys is empty that means object is empty

// const emptyObj = {}

//// array of keys in object ---   Object.keys(emptyObj)
// if(Object.keys(emptyObj).length === 0) console.log("Object is empty");


// Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);


// Terniary operator
//  condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less then 80"): console.log("more then 80");
;
