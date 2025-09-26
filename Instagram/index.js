const express = require("express");
let ejs = require('ejs');
const app = express();

app.set("view engine" , "ejs");
app.use(express.static("public"));

let posts = [
    {
        img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
        name: "Aarav Mehta",
        p: "112",
        follwers: "1.2k",
        following: "300",
        content: "Exploring the streets of Mumbai 🚶‍♂️📸 #UrbanLife #Photography"
    },
    {
        img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
        name: "Riya Sharma",
        pospts: "98",
        follwers: "980",
        following: "410",
        content: "Sunset vibes at Marine Drive 🌅✨ #SunsetLover #MumbaiDiaries"
    },
    {
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        name: "Karan Verma",
        p: "67",
        follwers: "3.4k",
        following: "289",
        content: "Hiking through the Himalayas 🏔️⛺ #AdventureTime #NatureLover"
    },
    {
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        name: "Sneha Patel",
        p: "120",
        follwers: "2.8k",
        following: "510",
        content: "Coffee and coding kind of morning ☕💻 #DeveloperLife #CaffeineBoost"
    },
    {
        img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
        name: "Vikram Desai",
        p: "150",
        follwers: "4.1k",
        following: "620",
        content: "Captured this serene moment in Kerala 🌴🛶 #Wanderlust #TravelGram"
    }
];


const port = 8080;

app.listen(port , ()=>{
    console.log("Server is sarted");
})

app.get("/posts" , (req , res) =>{
    res.render("index" ,{posts});
});

