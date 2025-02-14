const tinderUser = new Object()         //  singleton object
// const tinderUser = {}     both are same         literals


tinderUser.id = "123abc"
tinderUser.name = "Naman"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "naman@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Naman",
            lastname : "Patidar"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);


// combine two objects 


const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

// const obj3 = {obj1, obj2}  // in this obj3 contains obj 1 and 2 not mearge them

//target and source
// const obj3 = Object.assign({}, obj1, obj2)     // {} - target  and other are source and in this empty object obj1 and 2 are added  
const obj3 = {...obj1, ...obj2}  //  same as above one


// const obj3 = Object.assign(obj1, obj2)    //in this in obj 1 obj2 is added
console.log(obj1);


console.log(obj3);


const users = [
    {
        id : 1,
        email : "n@gmail.com"
    },
    {
        id : 2,
        email : "p@gmail.com"
    },
    {
        id : 3,
        email : "a@gmail.com"
    }
]

console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


