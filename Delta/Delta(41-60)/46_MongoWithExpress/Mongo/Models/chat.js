// This file contains model which is required by index.js file

const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        maxLength: 50,
    },
    created_at:{
        type: Date,
        required: true,
    },
})
// creating model
const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;