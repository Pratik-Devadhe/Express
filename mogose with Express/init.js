const mongoose = require('mongoose');
const Chat = require('./models/chat.js');
main().then((res) =>{
    console.log("connection succcessful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats = [
    {
        from: "Pratik",
        to: "Vedant",
        msg: "Send me your notes",
        createdAt: new Date()
    },
    {
        from: "Vedant",
        to: "Pratik",
        msg: "I’ll share them soon",
        createdAt: new Date()
    },
    {
        from: "Ananya",
        to: "Rohit",
        msg: "Meet at 5 PM?",
        createdAt: new Date()
    },
    {
        from: "Rohit",
        to: "Ananya",
        msg: "Yes, see you then",
        createdAt: new Date()
    },
    {
        from: "Sanya",
        to: "Karan",
        msg: "Done with assignment?",
        createdAt: new Date()
    },
    {
        from: "Karan",
        to: "Sanya",
        msg: "Almost, few edits left",
        createdAt: new Date()
    },
    {
        from: "Meera",
        to: "Aman",
        msg: "Happy Birthday!",
        createdAt: new Date()
    },
    {
        from: "Aman",
        to: "Meera",
        msg: "Thanks a lot!",
        createdAt: new Date()
    },
    {
        from: "Rahul",
        to: "Sneha",
        msg: "Watch movie tonight?",
        createdAt: new Date()
    },
    {
        from: "Sneha",
        to: "Rahul",
        msg: "Sure, I’m in",
        createdAt: new Date()
    }
];

Chat.insertMany(allChats);