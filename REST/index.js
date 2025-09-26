const express = require("express");
const app = express(); //returns a promise

const path = require("path");
const methodOverride = require("method-override");

const port = 8080;

app.use(methodOverride("_method"));

app.set("view engine" , "ejs");     // set view engine to ejs 

app.set("views" , path.join(__dirname , "views"));      // extended path if we run server from another directoery

app.use(express.static(path.join(__dirname , "public")));   // public folder path and the to join the static files. like css

app.use(express.urlencoded({extended : true})); // for the data recive from the sever using post request;
app.use(express.json());

const { v4: uuidv4 } = require("uuid");
 //  uuidv4(); ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' to create a unique Id

let posts = [
    {
        id : uuidv4(),
        username : "pratik",
        content : "That's one small step for a man, a giant leap for mankind."
    },
    {   
        id : uuidv4(),
        username : "vedant",
        content : "The love of money is the root of all evil."
    },
    {   
        id : uuidv4(),
        username : "yash",
        content : "nobody claps until everybody claps"
    },  
    {   
        id : uuidv4(),
        username : "omkar",
        content : "The only thing we have to fear is fear itself."
    }
]

app.get("/posts" , (req,res) =>{

    res.render("index.ejs" , {posts});
})

app.get("/posts/new" , (req,res) =>{
    res.render("new.ejs");
})

app.post("/posts" , (req,res) =>{
    let id = uuidv4();
    let {username , content} = req.body;
    posts.push({id , username , content});

    res.redirect("/posts");     // to redirect on the index.ejs page that's main page
})

app.get("/posts/:id" , (req, res)=> {
    let {id} = req.params;
    let post = posts.find((p) => id == p.id);
    res.render("show.ejs" , {post});
})

app.get("/posts/:id/edit" , (req ,res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id == p.id);

    res.render("edit.ejs" , {post});
});

app.patch("/posts/:id" , (req , res) =>{
    let {id} = req.params;
    let newcontent = req.body.content;
    let post = posts.find((p) => id == p.id);
    post.content = newcontent;
    res.redirect("/posts");
});


app.delete("/posts/:id" , (req,res) =>{
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);

    res.redirect("/posts");
})

app.listen(port , ()=> {
    console.log("server is started");
})