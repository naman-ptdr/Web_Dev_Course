// Reduce method in js

const myNums = [1, 2, 3]
// acc - accumlator , currval - currentValue
const myTotal = myNums.reduce(function(acc, currval){
    return acc + currval
}, 0)     // acc start from 0

console.log(myTotal);
