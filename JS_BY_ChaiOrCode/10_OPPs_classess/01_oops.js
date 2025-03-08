// Object literals     -- collection of properties and methods

const user = {
    userName : "Naman",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log("Got user details from database");
        console.log(`UserName : ${this.userName}`);
        console.log(this);       // this refers current context
        
    }
}

console.log(user.userName);
console.log(user.getUserDetails());


// Constructor function      -- it provides a new instance every time

// const promisOne = new Promise()         // new is constructor function
// const date = new Date()           // we can make multiple literals from one objet using constructor functions


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne = User("hitesh", 12, true)
const userTwo = User("naman", 22, true)

console.log(userOne);
console.log(userTwo);


// By new keyword

// step1 - new object is created
// step2 - constructor function is called by new keyword
// step3 - all arguments are injecting into this keyword
