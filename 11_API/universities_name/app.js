let url="http://universities.hipolabs.com/search?name=";


let btn=document.querySelector("button")
btn.addEventListener("click",async ()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    
    let arrCollege=await getColleges(country);
    showColleges(arrCollege);
    
    
    
});
function showColleges(arrCollege){
   
    let list=document.querySelector("#result");
    list.innerText=""
    for(col of arrCollege){
        let li=document.createElement("li");
       
        li.innerText=col.name;
        list.appendChild(li);
        
    }

}
async function getColleges(country) {
    try{
        let res=await axios.get(url+country);
        return res.data
        
    }
    catch(e){
        return `error is: ${e}`;
        
    }
    
}