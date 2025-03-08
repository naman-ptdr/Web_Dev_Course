// let myName = "Naman"
// console.log(myName.length);    ---- 5 Output

// let myName = "Naman     "
// console.log(myName.length);    -----10 Output name+spaces

// but if we want a property truelength which provides true length of name without spaces

// this is achived by property myName.trim().length 
// but wwe want to create a specific method of this like truelength method


let myHeros = ["Thor", "Spiderman"]
let heroPower = {
    Thor : "Hammer",
    Spiderman : "sling",
    getSpiderPower : function(){
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

// prototype inject in object
Object.prototype.naman = function(){
    console.log(`Naman is present in all objects`);
}
heroPower.naman();
myHeros.naman();


//Prototype inject in array
Array.prototype.haynaman = function(){
    console.log(`Naman says hello`);
}
myHeros.haynaman();
// heroPower.haynaman();       // object has no access of this prototype because it declaires in array



// Inheritance 
const User = {
    name : "Chai",
    email : "google@gmail.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : `JS assignment`,
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User;

// modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)





let anotherUsername = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);      // provide name
    // console.log(`${this.name}`);    // provide undefined
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength();
"Naman   ".trueLength();
"       Ankit".trueLength();
