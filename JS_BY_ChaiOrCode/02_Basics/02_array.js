const marvel_char = ["Thor", "Ironman", "Hulk", "Captain", "Spiderman"]
const dc_char = ["Superman", "Flash", "Batman", "Deadpool"]

// marvel_char.push(dc_char) // by this array marvel add array dc as an 6th element  that mean dc array as an element


// const all_char = marvel_char.concat(dc_char)

const all_char = [...marvel_char, ...dc_char]
console.log(all_char);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const useable_another_arr = another_arr.flat(Infinity)
console.log(useable_another_arr);


console.log(Array.isArray("Naman"));
console.log(Array.from("Naman"));
console.log(Array.from({name : "naman"}));    // intresting case either keys to array or values to array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
