let url="https://dog.ceo/api/breeds/image/random";
let h1=document.querySelector("h1")
let btn=document.querySelector("button")
btn.addEventListener("click",async ()=>{
    let link=await getFacts();
    console.log(link);
    let img=document.querySelector("img")
    img.setAttribute("src",link)
    
    
})
async function getFacts(){
    try{
        let res=await axios.get(url);
        let ans=res.data.message;
        return ans;
        
    }
    catch(e){
         return e;
        
   }
}