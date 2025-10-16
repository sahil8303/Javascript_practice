 //REDUCE METHOD

 const myNums=[1,2,3,4]

//  const myTotal=myNums.reduce(function (acc,currval){
//     return acc+currval
//  },0)

const myTotal=myNums.reduce( (acc,curr) => acc+curr, 0)

 console.log(myTotal);


 const shoppingCart= [

    {
        itemName:"Js course",
        price:2999 

    },
    {
        itemName:"Py course",
        price:999
    },
    {
        itemName:"Mobile Development",
        price : 12999
    },

]

const priceToPay=shoppingCart.reduce( (acc,item)  =>acc + item.price,0)
console.log(priceToPay);

 