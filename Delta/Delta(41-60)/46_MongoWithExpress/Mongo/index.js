const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./Models/chat.js");

// View folder for all templates
// So we can create ejs templates in our views folder

app.set("Views", path.join(__dirname, "Views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))       //css js file kaha sai serve ho rahi hai
app.use(express.urlencoded({extended: true}));   // for parsing data which is come through form by req.body

main().then(()=>{
    console.log("Connection Successfull");
});
// make connection with mongoose
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

// index Rout to show all chats
app.get("/chats", async (req, res) =>{
    let chats = await Chat.find();              // async function which take data from database 
    // there for we use await keyword and await is always in async function  so over function must be assync
    // console.log(chats);
    res.render("index.ejs", {chats});
    
})
// for sending this data to user in form of template use view folder


// New Route -- for new chates
app.get("/chats/new", (req, res)=>{
    res.render("new.ejs")
})

// create new chats Route
app.post("/chats", (req, res)=>{
    let {from, to, message} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date(),
    });
    // Here we use then so further no need to write await because save is async function
    newChat.save().then((res)=>{                   
        console.log("Chat Saved successfully");
    }).catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats");
});

// edit rout
// use await because findById is async so you have to initialize function to be async 
// and also because we neither use .then 
app.get("/chats/:id/edit", async (req, res)=>{
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
});

// Update route

app.put


// Root Route
app.get("/", (req, res) =>{
    res.send("Root Is Working");
})


// Server setup
app.listen(8080, ()=>{
    console.log("Server Is Listining");
    
})



// Creating model 
// Chat will have

// GET /chats/new ---> from render (for adding new chats)
// Post /chats --> used to insert new chats


// update

// Get /chats/:id/edit --> edit form display --> msg edit
// PUT   /chats/:id 





// localhost:8080/chats
