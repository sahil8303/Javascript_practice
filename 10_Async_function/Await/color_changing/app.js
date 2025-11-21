//we want Sahil kawadse to change different color in 1sec time interval
let h1=document.querySelector("h1");
function colorChange(color,delay){


  return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            if(num>3){
                reject("promise got rejected")
            }
            h1.style.color=color;
            resolve("Color chnaged")
         },delay)
  })
}
///////////////////////using Promise///////////////////////////
// colorChange("red",1000)
// .then((message)=>{
//     console.log("Color was chnaged to red",message);
//     return colorChange("orange",1000);
    
// })
// .then((message)=>{
//     console.log("Color was chnaged to Orange",message);
//     return colorChange("purple",1000);
// })
// .then((message)=>{
//     console.log("Color was chnaged to purple",message);
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })

/////////////////using await keyword//////////////////////
// async function demo() {
//     await colorChange("red",2000);
//     await colorChange("Orange",2000);
//     colorChange("Purple",2000);
    
// }
// demo();

//HANDLING REJECTION IN ASYNC FUCNTION
async function demo() {
    try{
    await colorChange("red",2000);
    await colorChange("Orange",2000);
    await colorChange("Purple",2000);
    }
    catch(error){
        console.log("Errror Caught");
        console.log(error);
        
        
    }
    //I wnat that this work should not be promise dependent
    //even if promise is rejected the work should be done
    let a=5;
    console.log(a);
    console.log("add is ",a+3);
    
}
demo();
