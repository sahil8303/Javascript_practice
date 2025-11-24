const { faker } = require('@faker-js/faker');
const mysql=require('mysql2');

const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const { log } = require('console');
const methodoverride=require("method-override");
const { connect } = require('http2');

app.use(methodoverride("_method"));
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

let createRandomUser = () => {
  return [
    faker.datatype.uuid(),          // ✅ correct for v7.6.0
    faker.internet.userName(),    // ✅ userName(), not username()
    faker.internet.email(),
    faker.internet.password(),
    
  ];
};


const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'delta_app',
    password:'root1234'
});

//fetch and show total number of users on our app
//Home page ROut
app.get("/",(req,res)=>{
  let q=`SELECT count(*) from user`;
  try{
connection.query(q,(err,result)=>{
    if(err)throw err;
    let count=result[0]["count(*)"];
    res.render("home.ejs",{count});
})
}
catch(err){
    console.log(err);
    res.send("Some Error in DB")
    

}

});

//Show user route
app.get("/user",(req,res)=>{
  let q=`SELECT * FROM user;`
  try{
connection.query(q,(err,result)=>{
    if(err)throw err;
    console.log(result);
    
    res.render("showuser.ejs",{result});
})
}
catch(err){
    console.log(err);
    res.send("Some Error in DB")
}


})

//EIDT USER ROUTE
app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`SELECT * FROM user WHERE id='${id}'`

   try{
connection.query(q,(err,result)=>{
    if(err)throw err;
    let user=result[0]
   
    
    res.render("edit.ejs",{user});
})
}
catch(err){
    console.log(err);
    res.send("Some Error in DB")
    

}
  
})

//UPDATE DB ROUTE
app.patch("/user/:id",(req,res)=>{
   let {id}=req.params;
   let {password:formPass,username:NewUsername}=req.body;
  let q=`SELECT * FROM user WHERE id='${id}'`

   try{
connection.query(q,(err,result)=>{
    if(err)throw err;
    let user=result[0];
    if(formPass!=user.password){
       res.send("Password incorrect");
    }
    else{
      let q2=`UPDATE user SET username='${NewUsername}' WHERE id='${id}'`
      connection.query(q2,(err,result)=>{
        if(err)throw err;
        res.redirect("/user");
      });
    }
   })
}
catch(err){
    console.log(err);
    res.send("Some Error in DB")
    

}
  
})

app.listen(port,()=>{
    console.log("Server is listening to port 8080");
    
})





// //Inserting New data
// let q="INSERT INTO user(id,username,email,password)VALUES ?";

// let data=[];
// for(let i=1;i<=100;i++){
//     data.push(createRandomUser());//100 fake users ka data
    
// }

// try{
// connection.query(q,[data],(err,result)=>{
//     if(err)throw err;
//     console.log(result);
    
// })
// }
// catch(err){
//     console.log(err);
    

// }
// connection.end();