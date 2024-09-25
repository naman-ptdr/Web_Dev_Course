const myObj = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by apple'
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}


const arr = [20, 28, 32, 40, 15, 96,17]
// for (const key in arr) {
//     console.log(key);
// }

for (const key in arr) {
    console.log(arr[key]);
}

// map is not iterable
const map = new Map()
map.set("roll1", "Naman")
map.set("roll2", "Rupesh")
map.set("roll3", "Payal")

// for (const key in map) {
//     console.log(map[key]);
// }