const express = require("express");
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.set("view engine" , "view");

const port = 8080;

app.listen(port , () => {
    console.log("server is strted");
})

app.get("/" , (req , res)=>{
    res.send("hello");
})


app.get("/register" , (req , res) =>{

    let {user , password} = req.query;

    res.send(`request recived from ${user}`)
})

app.post("/register" , (req , res)=>{
      let {user , password} = req.body;
    res.send(`request recived from ${user}`)
})