const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodoverride = require("method-override");

app.use(methodoverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Namuu",
});



let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
]
};

// let data = [];
// for(let i=1; i<100; i++){
//     data.push(getRandomUser());       // 100 fake users
// }

// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [
//     ["124", "124_newuser", "abcd@gmail.com", "abcd"],
//     ["125", "125_newuser", "abce@gmail.com", "abce"],
// ];

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// Home route

app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", {count});
        });
    }catch(err){
        console.log(err);
        res.send("Some error in DB");
    }
    console.log("Welcome to Home page");
});

// show route
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try{
        connection.query(q, (err, users) => {
            if(err) throw err;
            // res.send(result);
            res.render("showusers.ejs", { users });
        })
    }catch(err){
        console.log(err);
        res.send("Some error in DB");
    }
});

// Edit Rout
app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs",{ user });
        })
    }catch(err){
        console.log(err);
        res.send("Some error in DB");
    }
})

// Update Route
app.patch("/user/:id", (req, res) =>{
    let {id} = req.params;
    let {password: formpass, username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;

    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            if(formpass != user.password){
                res.send("Wrong Password");
            }
            else {
                let q2 = `UPDATE user SET username = '${newUsername}' WHERE id='${id}'`
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                }) 
            }
        })
    }catch(err){
        console.log(err);
        res.send("Some error in DB");
    }
})

app.listen("8080", ()=>{
    console.log("server is listening to port 8080");
});