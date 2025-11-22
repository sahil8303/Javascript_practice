//index.js will act as server
//express helkp me lsitening of api request
//port are logical endpoints of the network connection that is used to exchange information between a web server and web client
const express = require("express");
const app=express();

console.dir(app);
let port=8080; //8080

//server side code
//CRTL +C -->TO STOP THE SERVER
app.listen(port,()=>{
    console.log(`app is litening on port ${port}`);
    
});
//res.send() is used to send request to server
//express conert text based into object express parse the https based request
// app.use((req,res)=>{
//     // console.log(req);
//     console.log("requets receiver");
//     res.send({
//         name:"apple",
//         color:"red"
//         })
    
    
// })


app.get("/",(req,res)=>{
    res.send("you contacted root ")
});
//this are routes 
app.get("/apple",(req,res)=>{
    res.send("you contacted apple path")
});

app.post("/",(req,res)=>{
    res.send("You send the post reuqets to root");
})

//path parameter
// app.get("/:username",(req,res)=>{
//     let {username}=req.params;
//     res.send(`Welcome to the Page of @${username}`)
//     console.log(req.params);
    
// })

app.get("/search",(req,res)=>{
    let {q}=req.query;
    res.send(`<h1>search result for query ${q}</h1>`)
})