function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2            
// declaire to function kia hai but .acces toh object
//  kai saath lagta hai that means function is also 
// an object

// We can be able to change behaivior of anything(e.g. array , string, function) like objects
console.log(multiplyBy5(10));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


// By new keyword

// step1 - new object is created
// step2 - constructor function is called by new keyword
// step3 - all arguments are injecting into this keyword


function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
    
}
const chai = new createUser("Chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/