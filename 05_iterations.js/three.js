         /////////MAP

const myNum=[1,2,3,4,5,6,7,8,9,10];

// const newnum=myNum.map( (num) => {return num+10})

const newnum=myNum
                .map( (num) => num*10)
                .map( (num) => num+1)
                .filter((num) => num>=40) //yaha true and wala game he


console.log(newnum);


// myNum.forEach()