const express=require("express");
const app=express();
const path=require("path");
const Chat=require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}));
// getting-started.js
const mongoose = require('mongoose');
const { error } = require("console");

main().then(()=>{
    console.log("Connection succesfull");
    
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1=new Chat({
    from:"Neha",
    to:"Priya",
    msg:"Send me your exam sheet",
    created_at: new Date()
});

// chat1.save().then((res)=>{//utc
//     console.log(res);
    
// })

app.get("/",(req,res)=>{
    res.send("root is working");
})

app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();//Chat.find()-->async function (promise return karega)
    console.log(chats);
    res.render("index.ejs",{chats});
    
})

//NEW ROUTE
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/chats",(req,res)=>{
    let {from ,to ,msg}=req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    })
    newChat.save().then((res)=>{
        console.log("chat was saved")
       
      })
      .catch((err)=>{
         console.log(error);
        })
   
 res.redirect("/chats");
});

app.listen(8080,()=>{
    console.log("server is listening at port 8080");
    
})
