function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           let num=Math.floor(Math.random()*10)+1;
           console.log(num);
           resolve();//promise is resolved
           
        },1000)
    })
}

//await keyword can only be used with async function
//If we want that getNum() function to be generated multiple times but not all a singlke time but with delay of 1sec(setTimeout) we will use await for 1st function to wait for 
async function demo(){
    await getNum();
    await getNum();
    getNum();
}