// if we didn't know about how many arrguments are there 

// rest or spread operator in js  -->  ...
function calcCartPrice1(...num){
    return num
}

console.log(calcCartPrice1(200, 400, 500));
console.log(calcCartPrice1(200, 400, 500, 600, 700));
console.log(calcCartPrice1(200, 400, 900));

function calcCartPrice2(val1, val2, ...num1){
    return num1
}
// val1 = 100 and val2 = 200
console.log(calcCartPrice2(100, 200, 300, 400, 500, 600, 700));

const user = {
    username : "Naman",
    product : "Iwatch",
    price : 40000
}

function handleObjects(anyObject){
    console.log(`User Name is ${anyObject.username} and item name ${anyObject.product} price is ${anyObject.price}`);
}

handleObjects(user)
handleObjects({
    username : "Rupesh", 
    product : "Iphone",
    price : 150000
})

const myNewArray = [200, 400, 600, 800]
function returnThirdValue(getArray){   // getArray is just parameter name we can write anything
    return getArray[2]
}

console.log(returnThirdValue(myNewArray));

