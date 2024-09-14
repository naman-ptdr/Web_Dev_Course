// singleton when we declair object by constructor it made by singleton

// Object.create



// object literals

const mysym = Symbol("key1")  // USE This Symbol as a key of Objects

const JsUser = {
    name : "Naman",    // keys and value
    "full name" : "Naman Patidar",    // we cant access full name by JsUser.fullname
    [mysym] : "myKey1",
    age : 21,
    email : "naman@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Saturday", "Sunday"]
}


console.log(JsUser.email);
console.log(JsUser["email"]);
 
// console.log(JsUser.full name);   // NOT Posible
console.log(JsUser["full name"]);

// Symbol as a key
console.log(JsUser[mysym]);

JsUser.email = "namanpatidar@gmail.com" // for chainging email

// Object.freeze(JsUser)  // after freeze we cant change anything

JsUser.name = "Namuu"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User !");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Buddy ! ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

