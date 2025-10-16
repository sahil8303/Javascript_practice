
//FOR EACH LOOP
const coding=["js","ruby","java","python","cpp"]
coding.forEach((item) => {
    // console.log(item);
    
})

//FILTER

/*  const myNums=[1,2,3,4,5,6,7,8,9,10]
//this returns the value foreach return nahi karta

const newNums=myNums.filter((num)=>{
   return  num>4
    
})  
        OR
const newNums=myNums.filter((num)=>num >4 ) 
 console.log(newNums);

*/



/*
// **************************************************************************
//SAME FILTER THINGS IN FOREACH LOOP

const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=[]
myNums.forEach( (num)=> {
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);

*/

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//we can use filter in both ways
let userBooks=books.filter((bk) =>bk.genre ==='History')

//most important mistake------------------------------------------------
//yaha par hamne scope open kar liya tha scope matlab->{} so haame value return karni padegi in filter
//but in previous hamne ek line wale method se likha(no scope-->{}) so no need to return

//wrong way
// userBooks=books.filter((bk) =>{
//     bk.edition >=2000
// })


//CORRECT WAY
userBooks=books.filter((bk) =>{
    return bk.edition >=2000
})
console.log(userBooks);
  
