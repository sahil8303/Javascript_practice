const mongoose = require('mongoose');
const Chat=require("./models/chat.js");

main().then(()=>{
    console.log("Connection succesfull");
    
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats =[
    {
    from:"SAHIL",
    to:"NEHA",
    msg:"Send me your exam sheet",
    created_at: new Date()
    },
    {
    from:"ADAM",
    to:"eve",
    msg:"teach me",
    created_at: new Date()
    },
    {
    from:"hello",
    to:"world",
    msg:"how are you!",
    created_at: new Date()
    },
    {
    from:"pk",
    to:"sk",
    msg:"pls send me notes",
    created_at: new Date()
    },
    {
    from:"amsh",
    to:"tavish",
    msg:"hellow world!!",
    created_at: new Date()
    }
]
Chat.insertMany(allchats);

