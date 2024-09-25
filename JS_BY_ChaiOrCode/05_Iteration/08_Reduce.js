// Reduce method in js

const myNums = [1, 2, 3]

// acc - accumlator , currval - currentValue

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 3)     // acc start from 0

// console.log(myTotal);


const myTotal = myNums.reduce((acc, currval) => acc+currval, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "python Course",
        price: 5999
    },
    {
        itemName: "Mobile dev",
        price: 9999
    },
    {
        itemName: "Data science Course",
        price: 12999
    }
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
