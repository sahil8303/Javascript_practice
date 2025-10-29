//task 1 generate random color

const randomColor=function(){
     let color='#';
     const hex='0123456789ABCDEF'
     for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
     }
     return color;
}
console.log(randomColor());
 let interval;
document.querySelector('#start').addEventListener('click',function(){

    if(!interval){//agar interval id notnull raha tabhi setInterval pe jao
       interval=setInterval(colorChange,1000);
    }
    
    function colorChange(){
    
        document.body.style.backgroundColor=randomColor();

    }

    
})
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(interval);
    interval=null; //interval ko null karo usko overwrite kardo
})

