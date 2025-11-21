let checkEven=new Promise((resolve,reject)=>{
    let number=Math.floor(Math.random()*10+1);
    console.log(number);
    
    if(number%2==0)resolve("The number is even number");
    else reject("The number is not even");
})
checkEven
.then((message)=>{
    console.log(message);
    
})
.catch((error)=>{
    console.log(error);
    
})