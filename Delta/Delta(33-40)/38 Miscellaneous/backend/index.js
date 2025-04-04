const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json);
app.get("/register",(req, res)=>{
    let {user, pass} = req.query;
    res.send(`standard Get response Welcome ${user}!`);
});


app.post("/register",(req, res)=>{
    let {user, pass} = req.body;
    res.send(`standard Post response Welcome ${user}!`);
});


app.listen(port, ()=>{
    console.log(`listining to port ${port}`);
})