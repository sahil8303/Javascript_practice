let url="http://universities.hipolabs.com/search?name=india";


let btn=document.querySelector("button")
btn.addEventListener("click",async ()=>{
    let state=document.querySelector("input").value;
    console.log(state);
    
    let arrCollege=await getColleges();
    showColleges(arrCollege,state);
    
    
    
});
function showColleges(arrCollege,state){
   
    let list=document.querySelector("#result");
    list.innerText=""
    for(col of arrCollege){
        if(col["state-province"]==state){
        let li=document.createElement("li");
       
        li.innerText=col.name;
        list.appendChild(li);
        }
        
        
    }

}
async function getColleges() {
    try{
        let res=await axios.get(url);
        return res.data
        
    }
    catch(e){
        return `error is: ${e}`;
        
    }
    
}