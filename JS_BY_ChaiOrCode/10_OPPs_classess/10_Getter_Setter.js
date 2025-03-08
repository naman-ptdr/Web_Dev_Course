class User{
    constructor(email, password){
        this.email=email;
        this.password=password;    //max call stack size exceeded
    }
    
    set password(value){
        this._password=value.toUpperCase();
    }
    get password(){
        return this._password;
    }



    get email(){
        return this._email.toLowerCase();
    }
    set email(value){
        this._email = value.toUpperCase();
    }
}

const naman = new User("naman@naman.ai", "namuu")
console.log(naman.password);
console.log(naman.email);
