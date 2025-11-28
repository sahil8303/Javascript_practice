const mongoose = require('mongoose');


main()
   .then((res)=>{
    console.log("connection successful");
    
})
   .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User=mongoose.model("User",userSchema);
const Employee=mongoose.model("Employee",userSchema);

User.findByIdAndUpdate({_id:"6928919c6cb41cdc4d1ce5d8"},{age:105},{new:true}).then((res)=>{
    console.log(res);
    
});

// User.find({age:{$gt:47}})
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })

// User.findById("6928919c6cb41cdc4d1ce5d8")
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })
// const user1=new User({
//     name:"Adam",
//     email:"adam@yahoo.in",
//     age:45
// });

// const user2=new User({
//     name:"Aloo",
//     email:"aloo@yahoo.in",
//     age:39
// });


// //how to save this document in mongodb database
// //.save returns promise
// user2.save();

// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:50},
//     {name:"Peter",email:"peter@gmail.com",age:65}
// ]).then((res)=>{
//     console.log(res);
    
// });




