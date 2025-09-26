const mongoose = require('mongoose');

main().then((res) =>{
    console.log("connection successfull");
}).catch((err) =>{
    console.log(err);
})

async function main(params) {
    mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// define used schema 

const userSchema = new mongoose.Schema({
    name : {
        type : String , 
        
    },
    email : String,
    age : Number,
});


// define the model for creating the collection

const User = mongoose.model("User" , userSchema);

//const user1 = new User({name : "pratik" , email : "eomga" , age : 20});

//user1.save();

// User.find().then((res)=> {
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// })   


User.insertMany([
    {name : "john" , email:"john@gmail.com" , age: 25},
    {name : "sumit" , email: "sumit@gamil.com" , age : 30},
    
]).then((res) =>{
    console.log(res);
})

// User.find({}).then((res) =>{
//     console.log(res);
// })


// insert many 

// User.insertMany([
//         {name : "vedant" , email : "vedant@gmail.com" , age : 20},
//         {name : "yash" , email : "gagare@gmail.com" , age : 21},
//         {name : "omkar" , email : "omkar@gmail.com" , age : 23},
// ]).then((res) =>{
//     console.log(res);
// })


// const user1 = new User({name : "pratik" , email : "pratikdevadhe180263@gmail.com" , age : 19});

// user1.save();