const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const port = 8080;
const path = require("path");
const methodOverride = require('method-override')

 
// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "apnacollege",
    content: "I love coding",
  },
  {
    id: uuidv4(),
    username: "Sahil kawadse",
    content: "Hard work is important to achieve success",
  },
  {
    id: uuidv4(),
    username: "RahulKumar",
    content: "I got selected for my 1st internship",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id=uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id",(req,res)=>{
    let { id } = req.params;
    let newcontent=req.body.content;
    
    let post = posts.find((p) => p.id === id);
    post.content=newcontent;
    console.log(post);
    
    res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  console.log(post);
  
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;

   posts = posts.filter((p) => p.id != id);
  res.redirect("/posts");
})

app.listen(port, () => {
  console.log("listening to port : 8080");
});
