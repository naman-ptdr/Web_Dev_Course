const mongoose = require('mongoose');


main()
    .then( (res) => {
        console.log("Connection successfully");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});

const User = mongoose.model("User", userSchema);   //creating collection

// const User is Model name and another User is for collection name and in mongo Db it becomes Users

// const user1 = new User({
//     name: "Adam",
//     email: "adam@gmail.com",
//     age: 48,
// });

// user1.save();

// const user2 = new User({
//     name: "rupesh",
//     email: "rup@gmail.com",
//     age: 30,
// });

// user2.save().then((res) => {
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// });

// User.insertMany([
//     {name: "abc", email: "abc@gmail.com", age: 20},
//     {name: "bcd", email: "bcd@gmail.com", age: 30},
//     {name: "cde", email: "cde@gmail.com", age: 40},
// ]).then((res) => {
//     console.log(res);
// });

// find in mongoose

// User.find({age : {$gt : 40}})
//      .then((res) => {
//         console.log(res);
//      })
//      .catch((err) =>{
//         console.log(err);
//      });


     
// update 
// User.updateOne({name: "Adam"}, {name: "Naman"})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
        
//     })


// findOneAndUpdate()
// findByIdAndUpdate()


// // update 
// User.findOneAndUpdate({name: "rupesh"}, {age: 24}, {new: true})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
        
//     })


// delete

// User.deleteMany({age:18}).then((res)=>{
//     console.log(res);
// })

// User.deleteOne({});

// findeByIdAndDelete()
// findOneAndDelete()

// findeByIdAndDelete()

User.findByIdAndDelete('683d9bed8a59fc3dff5e79ea')
     .then((res)=>{
        console.log(res); 
     }).catch((err)=>{
        console.log(err);
     })


