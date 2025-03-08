class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }
// iss method ka eccess har uss object ko nahi dena chate jo iss class instantiate hua hai
    static createId(){
        return `123`;
    }
}

const naman = new User("Naman")
// console.log(naman.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email;
    }
}

const iphone = new Teacher("iphone", "i@gmail.com")
iphone.logMe()

// iphone.createId()