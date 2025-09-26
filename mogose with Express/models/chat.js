const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    from : {
        type : String,
        maxLength : 30,
    },

    to : {
        type : String,
        maxLength : 30,
    }, 

    msg : {
        type : String,
        
    }, 

    createdAt : {
        type : Date 

    }
})

const Chat = mongoose.model("Chat" , chatSchema);

module.exports = Chat;