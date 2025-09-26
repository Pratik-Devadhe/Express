const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/register" , (req ,res) => {
    let {user ,   password} = req.query;
    //console.log(req.query);
    res.send(`GET request recived from ${user}`);
})

app.post("/register" , (req ,res) => {
    let {user ,  password} = req.body;
    //console.log(req.body);
    res.send(`POST request recived from ${user}`);
})

app.listen( port , () =>{
    console.log("server is started");
});