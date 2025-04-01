const express = require("express");
const app = express();
// console.dir(app);


let port = 8080;
app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res)=>{
//     // console.log(req);
//     // res.send("This is a basic Response");
//     console.log("Request received");
//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>"
//     res.send(code);
// });

app.get("/", (req, res) => {
    res.send("Hello, i am root");
});

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    res.send(`Wlcome to the page of @${username}`);
});


app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("Search result");
})