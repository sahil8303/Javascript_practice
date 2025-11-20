let btn=document.querySelector("button")

btn.addEventListener("click",function(){
let h1=document.querySelector("h1")
let random=random_color();
h1.innerText=random;    

document.querySelector("div").style.backgroundColor=random;
console.log("color updated");

    
});

function random_color(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
     return color;
    
}