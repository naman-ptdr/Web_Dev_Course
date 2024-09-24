// if

// if(true){  //2==2
//     //  scope
// }

// const isUserloggedIn = true
// if(isUserloggedIn){

// }

// <,>, <=, >=, ==, != , 
// === it also check type of variable   , !==

const temperature = 40
if(temperature<50){
    console.log("Temperature is less then 50");
}else{
    console.log("Temperature is greater then 50");
}


// const score = 200
// if(score>100){
//     const power = "fly"  //let also
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);  it gives error

// const score = 200
// if(score>100){
//     var power = "fly" 
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`); it not give an error


const balance = 1000
// if(balance>500) console.log("test")

// if(balance < 500){
//     console.log("less then 500")
// }else if(balance < 750){
//     console.log("less then 750")
// }else if(balance < 1200){
//     console.log("less then 1200")
// }


const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}

