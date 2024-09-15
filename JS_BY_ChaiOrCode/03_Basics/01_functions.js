
// function syntax
function sayMyName(){
    console.log("N");
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}
// sayMyName   ---> function refrence
// sayMyName() ---> function execution 
sayMyName
sayMyName()

// function defination with parameters  num1 and num2 are parameters
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
addTwoNumbers(3, 4)  //function execution with arguments

// const result = addTwoNumbers(8, 9) ---> it provides undefined because fuction doesn't return value it print only

function multiplyTwoNum(numa, numb){
    // return numa*numb;
    let result = numa*numb
    return result
}

const result = multiplyTwoNum(3, 4);
console.log(`Multiplication of two numbers is ${result}`);


function loginUerMessage(username){
    if(username === undefined){      // if(!username) :: undefined = false
        console.log("Plese Enter the user name");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUerMessage(""))
console.log(loginUerMessage("Naman"))
console.log(loginUerMessage())