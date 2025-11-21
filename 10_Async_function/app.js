async function greet(){
    throw "Error was returned" //used for throwing error in async function
    return"hello!"; //return a promise
}

greet()
.then((result)=>{
    console.log(result);
    
})
.catch((error)=>{
    console.log(error);
    
})

//Arroe function can also be returned as async function
let demo=async()=>{
    return 5;
}