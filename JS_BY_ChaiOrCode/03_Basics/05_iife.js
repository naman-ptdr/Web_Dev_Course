//  Immediately Invoked Function Expression (IIFE)
// function ko likhte hi turant execute karvane kai liye iife use karte hai
//  When we write a file which connect database only and we want that jaise hi file start ho hamare database ka connection start ho jaye

//  Normal function 
// function chai(){
//     console.log(`DB Connected`);
// }
// chai();

//  But things which are poluted from our globle scope then 
 
(function chai(){  // named iife
    console.log(`DB Connected`);
})();  // --> ; - is needed to end function context

// () --> function Defination , ()--> Execution call

// Globel scope kai polution sai problem hoti hai kai baar 
// too us globle scope kai polution or vatriable ko 
// hatane kai liye IIFE ko use karte hai 

( (name)=> {   // without named iife
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Naman");