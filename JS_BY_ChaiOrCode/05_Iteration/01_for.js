// for

// for(let i=0; i<=10; i++){
//     const element = index;
//     if(element==5) console.log("5 is best number");
    
//     console.log(element);
// }

for(let i=1; i<=10; i++){
    console.log(`Table of ${i}`);
    for(let j=1; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

let arr = ["flash", "batman", "superman"]
for(let i=0; i<arr.length; i++){
    const movieHeros = arr[i];
    console.log(movieHeros);
}

// break and continue 

for(let i=1; i<=20; i++){
    if(i==5) break;
    console.log(`Value of i is ${i}`);
}
for(let i=1; i<=10; i++){
    if(i==5) continue;
    console.log(`Value of i is ${i}`);
}
