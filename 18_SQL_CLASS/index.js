const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const path = require("path");
const methodoverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 8080;

app.use(methodoverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'root1234'
});

// SHOW ALL USERS
app.get("/user", (req, res) => {
  const q = "SELECT * FROM user";
  connection.query(q, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Some Error in DB");
    }
    res.render("showuser.ejs", { result });
  });
});

// EDIT FORM
app.get("/user/:id/edit", (req, res) => {
  const { id } = req.params;
  const q = "SELECT * FROM user WHERE id = ?";
  connection.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Some Error in DB");
    }
    const user = result[0];
    res.render("edit.ejs", { user });
  });
});

// UPDATE USER
app.patch("/user/:id", (req, res) => {
  const { id } = req.params;
  const { password: formPass, username: newUsername } = req.body;
 
  const q = "SELECT * FROM user WHERE id = ?";
  connection.query(q, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Some Error in DB");
    }
    const user = result[0];
    if (formPass !== user.password) {
      return res.send("Password incorrect");
    }

    const q2 = "UPDATE user SET username = ? WHERE id = ?";
    connection.query(q2, [newUsername, id], (err2) => {
      if (err2) {
        console.log(err2);
        return res.send("Some Error in DB");
      }
      res.redirect("/user");
    });
  });
});

// ADD USER FORM
app.get("/user/add", (req, res) => {
  res.render("add.ejs");
});

// ADD USER POST
app.post("/user/add", (req, res) => {
  const { username, email, password } = req.body;
  // console.log(req.body);
  const id = uuidv4();

  
  const q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
  connection.query(q, [id,username, email, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Some Error in DB");
    }
    //console.log(result);
    res.redirect("/user");
  });
});

//DELETE REQUETS
app.get("/user/:id/delete", (req, res) => {
  let {id}=req.params;
  const q = "SELECT * FROM user WHERE id = ?";
  connection.query(q,[id],(err,result)=>{
     if(err){
        return res.send("Error");
     }
     else{
     
       let user=result[0];
       console.log(user);
       
        return res.render("delete.ejs",{user});
     }
  })
 
});

app.delete("/user/:id/",(req,res)=>{
  const {password } = req.body;
  const {id}=req.params;
  let q=`SELECT password FROM user WHERE id = ? `
  connection.query(q,[id],(err,result)=>{
       if(result[0][password]==password){
           let q2=`DELETE FROM user WHERE id = ?`
           connection.query(q2,[id],(err,result)=>{
                  res.redirect("/user");
           })
       }
       else{
        console.log(err);
      return res.send("Some Error in DB");
       }
  })
  
  

})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
