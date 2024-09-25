// For of

// ["", "", ""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]
for(const i of arr){   // arr - object kis chijh par loop lagana hai
    console.log(i);
    
}

const greetings = "Hello World!"
for(const greet of greetings){
    console.log(greet);
    
}


//  Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
// for(const key of map){
//     console.log(key);
// }

for(const [key, value] of map){
    console.log(key, ':', value);
}


// Object

const myObj = {
    game1 : 'PUBG',
    game2 : 'BGMI',
    game3 : 'FREE FIRE',
    game4 : 'GTA-V',
}
//  object is not iterable
// for(const [key, value] of myObj){
//     console.log(key , ':', 'value');
    
// }