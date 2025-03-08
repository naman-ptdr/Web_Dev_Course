class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}


const chai = new Teacher("chai", "chai@gmail.com", "1234");

chai.addCourse();
// console.log(chai);
const masalaChai = new User("masalaChai");
masalaChai.logMe();
console.log(chai===masalaChai);   //false
console.log(chai === Teacher);        //false
console.log(chai instanceof Teacher);    //true
console.log(chai instanceof User);        //true
console.log(masalaChai instanceof Teacher);     //false
console.log(Teacher instanceof User);        //false
console.log(User instanceof Teacher);          //false

