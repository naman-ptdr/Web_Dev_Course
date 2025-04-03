const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=>{
    res.render("home.ejs");
});

app.get("/hello", (req, res)=>{
    res.send("hello");
});

app.get("/rolldice", (req, res)=>{
    let diceValue = Math.floor(Math.random()*6)+1 ;
    res.render("rolldice.ejs", {num: diceValue});
});

app.get("/ig/:username", (req, res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    res.render("insta.ejs", {data});
});


app.listen(port, ()=>{
    console.log(`Listeninig on port ${port}`);
});