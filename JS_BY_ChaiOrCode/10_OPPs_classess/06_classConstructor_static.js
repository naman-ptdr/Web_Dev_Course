// ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changedUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new  User("Chai", "chai@gmail.com", "1234");
console.log(chai.encryptPassword());
console.log(chai.changedUsername());



// behind the scene
// function User(username, email, password){
//     this.username=username;
//     this.email=email;
//     this.password=password;

// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.changeduserName = function(){
//     return `${this.username.toUpperCase()}`
// }
// const tea = new  User("Chai", "chai@gmail.com", "1234")
// console.log(tea.encryptPassword());
// console.log(tea.changeduserName());
