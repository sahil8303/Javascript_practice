let url="https://catfact.ninja/fact"

// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data 1",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("Data 2",data2.fact);
    
// })
// .catch((error)=>{
//     console.log("Error is",error);
    
// })
// async function getfacts(){
//     try{
//        let res=await fetch(url);
//        let data=await res.json();
//        console.log(data.fact); 

//        let res2=await fetch(url);
//        let data2=await res2.json();
//        console.log(data2.fact); 
//     }
//     catch(e){
//         console.log("error ",e);
        
//     }
    
    
    
// }

// We make the callback async because we want to use await.
// And we use await because getFacts() returns a Promise.

let h1=document.querySelector("h1")
let btn=document.querySelector("button")
btn.addEventListener("click",async ()=>{
    let fact=await getFacts();
    h1.innerText=fact;
})
async function getFacts(){
    try{
        let res=await axios.get(url);
        let ans=res.data.fact;
        return ans;
        
    }
    catch(e){
         return e;
        
   }
}
