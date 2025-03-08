const User = {
    _email: 'n@np.ai',
    _password: "namuu",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    }
}

const tea = Object.create(User)
console.log(tea.email);
