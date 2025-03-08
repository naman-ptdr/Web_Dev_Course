function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2            
// declaire to function kia hai but .acces toh object
//  kai saath lagta hai that means function is also 
// an object

// We can be able to change behaivior of anything(e.g. array , string, function) like objects
console.log(multiplyBy5(10));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


