//index.js is the file which will acquire all the data from the file which we want to export
const apple=require("./apple")
const banana=require("./banana")
const orange=require("./orange")

let fruits=[apple,banana,orange];

module.exports=fruits;