// The promise object represnts the evantual completion for failure of an asynchronous operation and its resulting values.

const promisOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()          //--- For connecting resolve and .then
    }, 1000)
})

promisOne.then(function(){              // .then is directly connected to resolve
    console.log("Promise consumed");
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    } , 1000)
}).then(function(){
    console.log("Async task 2 resolve");
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName : "Naman", email : "namuu@gmail.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})





const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName : "Naman", password : "12345"})
        }else{
            reject('ERROR : somthing went wrong')
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.userName;      // this .then return to its chained .then
}).then((userName)=>{
    console.log(userName);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The Promise is either Resolve or Reject.");
    
})





const promisFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "javascript", password: "1234"})
        }else{
            reject('ERROR : JS went wrong')
        }
    },1000)
})


async function consumePromiseFive(){
    // const response = await consumePromiseFive;
    // console.log(response);
    try{
        const response = await promisFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive();


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})