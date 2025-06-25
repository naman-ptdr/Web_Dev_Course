const mongoose = require("mongoose");
const Chat = require("./Models/chat.js"); // Make sure the path is correct

main().then(() => {
    console.log("Connection Successful");
    return Chat.insertMany(allChats);
}).then(() => {
    console.log("Chats inserted successfully");
    mongoose.connection.close(); // Close DB connection after insert
}).catch(err => {
    console.error("Error:", err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

let allChats = [
    {
        from: "Tony",
        to: "Peter",
        message: "Love You 3000",
        created_at: new Date(),
    },
    {
        from: "Jay",
        to: "Yesh",
        message: "Are you coming or not?",
        created_at: new Date(),
    },
    {
        from: "Yesh",
        to: "Jay",
        message: "No I have some work today.",
        created_at: new Date(),
    },
    {
        from: "Neha",
        to: "Priya",
        message: "Did you complete the assignment?",
        created_at: new Date(),
    },
    {
        from: "Priya",
        to: "Neha",
        message: "Yes, I'll send it in 10 mins.",
        created_at: new Date(),
    },
    {
        from: "Amit",
        to: "Rohit",
        message: "Game night at 9?",
        created_at: new Date(),
    },
    {
        from: "Rohit",
        to: "Amit",
        message: "Let's do it! I'll bring snacks.",
        created_at: new Date(),
    },
    {
        from: "Simran",
        to: "Karan",
        message: "Call me when you're free.",
        created_at: new Date(),
    },
    {
        from: "Karan",
        to: "Simran",
        message: "Sure, give me 20 mins.",
        created_at: new Date(),
    },
    {
        from: "Sara",
        to: "Anjali",
        message: "Movie plan today?",
        created_at: new Date(),
    },
    {
        from: "Anjali",
        to: "Sara",
        message: "Yes! Which one do you want to watch?",
        created_at: new Date(),
    },
    {
        from: "Ravi",
        to: "Sunil",
        message: "Your parcel has arrived.",
        created_at: new Date(),
    },
    {
        from: "Sunil",
        to: "Ravi",
        message: "Thanks bro! Will pick it up soon.",
        created_at: new Date(),
    },
    {
        from: "Tina",
        to: "Megha",
        message: "Don't forget our lunch tomorrow.",
        created_at: new Date(),
    },
    {
        from: "Megha",
        to: "Tina",
        message: "How could I? Looking forward!",
        created_at: new Date(),
    },
    {
        from: "Arjun",
        to: "Kabir",
        message: "Team meeting is at 11 AM sharp.",
        created_at: new Date(),
    },
    {
        from: "Kabir",
        to: "Arjun",
        message: "Got it! I’ll be there on time.",
        created_at: new Date(),
    },
    {
        from: "Pooja",
        to: "Manav",
        message: "Happy Birthday 🎉",
        created_at: new Date(),
    },
    {
        from: "Manav",
        to: "Pooja",
        message: "Thank you so much 😊",
        created_at: new Date(),
    },
    {
        from: "Dev",
        to: "Nisha",
        message: "Let's catch up this weekend?",
        created_at: new Date(),
    }
];
