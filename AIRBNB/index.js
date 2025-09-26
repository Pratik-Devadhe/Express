const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./module/schema.js');   // model 
const methodOverride = require('method-override');
const path = require('path');
const ejs_mate = require('ejs-mate');
const ExpressError = require('./ExpressError.js');

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended : true}))
app.use(express.json());
app.use(express.static(path.join(__dirname , "/public")));
app.engine('ejs' , ejs_mate);
const port = 8080;

mongoose.connect('mongodb://127.0.0.1:27017/Listing')
  .then(() => console.log('Connected!'));


  // show total Listing count
app.get("/" , async (req , res) =>{

  let user = await Listing.countDocuments({});
    res.send(`Total Users are : ${user}`);
})


// delte the listings 

app.delete("/listings/delete/:id" , async (req,res , next)=>{

      try{
        let {id}  = req.params;

      await Listing.findByIdAndDelete(id);
  
      res.redirect("/listings");
      }
      catch(err){
        next(err);
      }
})



// Show Listings

app.get("/listings" , async(req, res) =>{

  const Listings = await Listing.find({});

  res.render("index.ejs" , {Listings});
});


// Add new Lsitings 

app.get("/listings/new-listing" , (req , res) =>{

  res.render("add.ejs");
});


app.post("/listings/new" , async (req , res)=>{

    let { title , description , image , price , location ,country } = req.body;

    let user = new Listing({title, description , image , price , location ,country });

    await user.save();

    res.redirect("/listings");

})



// show each listing

app.get("/listings/:id" ,  async (req, res , next) =>{
 try{
   let { id } = req.params;
  const list = await Listing.findById(id);

  if(!list) {
    next(new ExpressErrorError(500 , "mongoose error"));
  }

  res.render("show.ejs",{list});
  
 }catch(err){
   next(err);
 }

});




app.use((err , req, res , next) =>{
  let {status = 500 , message = "err has occured"} = err;
  
    res.status(status).send(message);

})

// render Edit form

app.get("/listings/:id/edit" , async (req ,res)=>{
  
  let { id } = req.params;
  const list = await Listing.findById(id);
  
  res.render("edit.ejs" , {list});

});

// make the change and redirect

app.put("/listings/:id" , async (req  , res) =>{
      
      let {id} = req.params;
      let { listing } = req.body;

     await Listing.findByIdAndUpdate(id , listing , {new : true});
      
      res.redirect(`/listings/${id}`);
});





app.listen( port , (req , res) =>{
    console.log("server is started");
})