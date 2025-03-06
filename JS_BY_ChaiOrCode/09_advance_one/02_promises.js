const promisOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promisOne.then(function(){
    console.log("Promise consumed");
})


new promisOne(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Naman", email: "namuu@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "naman", password: "1234"})
        }else{
            reject('ERROR : Somthing went wrong')
        }
        
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or reject"))


const promisFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "1234"})
        }else{
            reject('ERROR : Somthing went wrong')
        }
    },1000)
})

async function consumePromisefive() {
    const response = await promisefive;
    console.log(response);
}