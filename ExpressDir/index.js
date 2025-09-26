import express from 'express'
const app = express();

 const port =3000;

app.listen(3000 , () => {       // Start thr server
        console.log(`app is listenning on port ${port}`);
});

app.get("/apple" , (req , res) => {
    res.send("you searched apple path");
});

app.get("/orange" , (req , res) => {
    res.send("you contacted orange PATH");
});

app.get("/help" , (req , res) => {
    res.send("you contacted help path");
});

app.post("/one" , (req , res) => {
    res.send("you sent a post request");
});


// app.get("/:Username/:id" , (req , res) => {

//     let {Username, id} = req.params;


//     res.send(`you searched for ${Username}`);
// });

app.get("/search" , (req , res) => {
    const {q} = req.query;
    console.log(req.query);

    res.send(`you searched for the ${q}`);

});