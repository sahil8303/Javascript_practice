// h1=document.querySelector('h1')

// function changeColor(color,delay,nextColoeChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColoeChange)nextColoeChange();
//     },delay)
// }

// //CALL BACK HELL
// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("orange",1000,()=>{
//             changeColor("pink",1000);
//         });
//     })
// })

h1=document.querySelector('h1')

function changeColor(color,delay){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        h1.style.color=color;
        resolve("color chnaged!");
    },delay)
    })
    
}
//fulfiled,rejected,pending state
changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
    
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue color was completed");
   
})
//CALL BACK HELL

