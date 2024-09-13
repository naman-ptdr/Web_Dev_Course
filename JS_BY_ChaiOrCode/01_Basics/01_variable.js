const accountId = 144553    // cant be changed it becomes fixed
let accountEmail = "namuupatidar@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;     // output is undefined

// accountId = 344421      not allowed

accountEmail = "naman@gmail.com"
accountPassword = "534nfk"
accountCity = "Mumbai"


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not use var
because of issue in block scope and functional scope
*/