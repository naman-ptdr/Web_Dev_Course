function setUserName(userName){ 
    // complex DB calls
    this.userName = userName
    console.log("called");
    
}

function createUser(userName, email, password){
    setUserName.call(this, userName);     

    // Calls a method of an object, substituting another object for the current object.
    this.email = email;
    this.password = password;
}

const chai = new createUser("Chai", "chai@gmail.com", "123");
console.log(chai);
