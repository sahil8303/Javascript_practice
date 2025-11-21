function savetoDB(data){
    return new Promise((resolve,reject)=> {
        let interntspeed=Math.floor(Math.random()*10)+1;
        if(interntspeed>4){
            resolve("Sucess:data was saved")
        }
        else{
            reject("Failure:weak Connection")
        }

    });
}
savetoDB("apna college")
.then((result)=>{

  console.log("promise was resolved");
  console.log(result);
  
  return savetoDB("Hello World");
  
})
.then((result)=>{
    console.log("data 2 saved");
    console.log(result);
    
    
})
.catch((error)=>{
    console.log("promise was rejected");
    console.log(error);
    console.log(request);
    
})