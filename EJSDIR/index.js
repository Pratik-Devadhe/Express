const express = require("express");

const path = require("path");
const data = require("./data.json");
const app = express();      // returns a promise 

app.set("views" , path.join(__dirname , "views"));

app.use(express.static("public"));

app.set("view engine" , "ejs");

const port = 8080;


// app.get("/home", (req, res) =>{

//     res.render("home.ejs" , {num : 1+2});
// });


app.get( "/ig/:username",(req , res) => {
    
    let {username} = req.params;

    if(data[username]){
    res.render("instagram", {data : data[username]});
    }else{
        res.send("soething went wrong");
    }
});


// app.get("/:username" , (req , res) => {
//     let { username } = req.params;

//     res.send("welcome to the server " + username);
// })




app.get("/home" , (req , res) => {
    res.send("Welcome to Home");
})

app.listen( port , () => {
    console.log("server is started");
});


