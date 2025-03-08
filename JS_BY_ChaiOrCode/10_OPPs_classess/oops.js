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


