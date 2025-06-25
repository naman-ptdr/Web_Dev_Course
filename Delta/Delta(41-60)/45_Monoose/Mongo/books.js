const mongoose = require('mongoose');

// require    and  then connection with database

main()
    .then( (res) => {
        console.log("Connection successfully");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


// Rules that are assign to schema like maxLength, required etc are not work at time of updation they work only for insertion
// At update time if we want to check validators then use run Validatore
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,                           // NOT NULL 
        maxLength: 20,                      // for error maxLength: [20, "To long string"]
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: 1,
    },
    Discount: {
        type: Number,
        default: 0,
    },
    genre: [String],
    category: {
        type: String,
        enum: ["Spritual","fiction", "Non-fiction, Comics"],    // for category only this three value possible
    },
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "Mathematics XII",
//     author: "RD Sharma",
//     price: 1200
// });


// let book1 = new Book({
//     title: "How To Kill A MokingBird",
//     author: "Harper Lee",
//     price: 1500
// });

// let book1 = new Book({
//     title: "Bhagavad Gita",
//     author: "Veda vyas",
//     price: 100
// });

let book1 = new Book({
    title: "Marvel Comics",
    author: "MCU",
    price: 900,
    genre: ["Comics", "SuperHeros", "fiction"]
});


book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
        console.log(err);
})


