const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.use(express.urlencoded({extended : true}));
app.use(express.json()); // to get the data from  the body

app.set("view engine" , "ejs");


const port = 8080;

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'app',
    password : 'pratik'
});

app.get("/" , (req , res) =>{
    
let q = "SELECT COUNT(*) FROM SAMPLE";

    try{
    connection.query(q ,(err , result) =>{
        if(err) throw err;
        res.render("home.ejs" , { count : result[0]["COUNT(*)"]});
    });
    }catch(err){
         console.log(err);
    }
});


app.get("/users" , (req , res) =>{

    let q = "SELECT * FROM SAMPLE";

    try{
    connection.query(q ,(err , users) =>{
        if(err) throw err;
        res.render("user.ejs" , {users});
    });
    }catch(err){
         console.log(err);
    }

})

// Edit the user

app.get("/user/:id/edit" , (req ,res) =>{
    let { id } = req.params;
    let q = `SELECT * from sample where id ='${id}'`;
    
    try{
        connection.query(q , (err , user) =>{
            if(err) throw err;
            res.render("edit.ejs" ,  { user });
        });
    }catch(err){
        console.log(err);
    }
});

// Edit in the DB

app.patch("/user/:id" , (req , res) =>{
    let { id } = req.params;
    let { name , email} = req.body;
    let q = `UPDATE sample SET name="${name}" , email= "${email}" where id ='${id}'`;

    try{
        connection.query(q , (err , result) =>{
            if(err) throw err;
            res.redirect("/users");
        });
    }catch(err){
        console.log(err);
    }
});


// Delete the user 

app.delete("/user/:id/delete" , (req, res) =>{
    let { id } = req.params; 
    let q = `DELETE FROM sample where id = '${id}'`;
    
    try{
        connection.query(q , (err , result) =>{
            if(err) throw err;
            console.log(result);
            res.redirect("/users");
        });
    }catch (err){
        console.log(err);
    }
})


// to add the ne data 

app.get("/user/add" , (req , res) =>{
    let id = faker.string.uuid();
    res.render("add.ejs" , {id});
})


app.post("/user/addnew" , (req , res) =>{

    let { id , name , email} = req.body;

    let q = "INSERT INTO sample(id , name , email) VALUES(?)";
    let data = [id , name , email];

    connection.query(q , [data] , (err , result) =>{
        res.redirect("/users"); 
    });
});

app.listen(port , () =>{
    console.log("server is satted");
});


//    let createRandomUser  = () => {
//         return [
//             faker.string.uuid(),
//             faker.internet.username(),
//             faker.internet.email()
//         ];
//     };



