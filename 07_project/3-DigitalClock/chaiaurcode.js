const clock=document.getElementById('clock')
//document.querySelector('#clock')



setInterval(function(){ //thsi event function live update the time
    let date = new Date()
    // console.log(date.toLocaleTimeString());//it shows time in console

    clock.innerHTML =date.toLocaleTimeString();
},1000)