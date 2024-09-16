// Arrow function  &  This keyword in function.

const user = {
    username : "Naman",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Namuu"
// user.welcomeMessage()

// we are in node invironment and this reffers to globel context and their is no context in globle 
console.log(this);
//  if we run this in browser then it returns window object because in browser globle object is window

// function chai(){
//     let username = "Naman"
//     console.log(this);
// }
// chai()


// function chai(){
//     let username = "Namane"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "Namane"
//     console.log(this.username);
// }
// chai()


// function decleration using arrow functions

// const chai = () => {
//     let username = "Naman"
//     console.log(this);
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4));

// Implicite return arrow function 

// const addTwo = (num1, num2) => (num1 + num2)    // This technique is used in react

// for return objects by funtion 
const addTwo = () => ({username : "Naman"})
console.log(addTwo());


// const myArr = [2, 4, 6, 8]

// muArr.forEach(function(){})
// muArr.forEach(() => {})
