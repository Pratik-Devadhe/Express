const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Chat = require('./models/chat.js');
const methodOverride = require("method-override");

app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , 'ejs');
app.use(express.urlencoded({ extendes : true}));
app.use(express.json());
app.use(methodOverride("_method"));
const port = 8080;

main().then((res) =>{
    console.log("connection succcessful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

// const chat1 = new Chat({
//     from : "Pratik" ,
//     to : "vedant" , 
//     msg : "can you give me your notes",
//     createdAt : new Date()
// })


// get total no. of count 

app.get("/count" ,  async (req , res) =>{

    let count = await Chat.countDocuments();

    res.render("count.ejs" , { count } );

})

// create the chats

app.get("/chat/new" , (req, res) =>{

    res.render("create.ejs");

})

app.post("/chat/newchat" , async (req , res) =>{

    let { from , to , msg} = req.body;

    let createdAt = new Date();

    let chat = new Chat({from : from , to : to , msg : msg , createdAt : createdAt });

    await chat.save();                                                      

    res.redirect("/chats");

});

// display the chats

app.get("/chats" , async (req , res) =>{

    let result = await Chat.find();
    
    res.render("index.ejs" , { result });

})

// edit the message 

app.get("/chats/:id/edit" , async (req ,res) =>{

    let {id} = req.params;

    let chat = await Chat.findById(id);

    res.render("edit.ejs" , { chat } );


});


app.put("/chat/edit" , async (req ,res) =>{

        let { id , msg } = req.body;

       let chat = await Chat.findByIdAndUpdate(id , {msg : msg});

       res.redirect("/chats");
});

// delete the chats

app.delete("/chat/:id/delete" , async (req ,res) =>{

    let { id } = req.params; 

    let result = await Chat.findByIdAndDelete(id);

    res.redirect("/chats");
})

app.listen(port , (req , res) => {
    console.log("port is listening");
})