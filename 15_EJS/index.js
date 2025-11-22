const express=require("express");
const app=express();
const port=8080;
//const path=require("path");
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
})

//to set ejs
app.set("view engine","ejs");
//app.set("views",path.join(__dirname,"/view"));

app.get("/rolldice",(req,res)=>{
    
    let dicevalue=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num:dicevalue})
})
app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/ig/:username",(req,res)=>{

    const followers=["bob","martin","justin","virat"];
    let {username}=req.params;
    res.render("instagram.ejs",{username,followers});
})