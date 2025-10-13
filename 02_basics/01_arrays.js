
// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
// 🗂️ JavaScript Arrays — Quick Notes
// 🔹 Basics

// Written in brackets [ ]

// Data type: object

// Can contain different data types — string, number, boolean, array, etc.

// Zero-based indexing — starts from 0

// Reference type — modifying array changes original value

// 🔹 Common Array Methods
// Method	Action
// push(value)	Add at end
// pop()	Remove last
// unshift(value)	Add at start
// shift()	Remove first
// includes(value)	Check if exists → true/false
// indexOf(value)	Get index of value
// join(separator)	Convert array → string
// slice(start, end)	Returns new array, original unchanged
// splice(start, deleteCount, ...items)	Returns deleted elements, original array modified
// 🔹 Key Points for Interviews

// slice() → non-destructive, extract portion without changing original

// splice() → destructive, used to add/remove/replace elements

// Arrays are reference type, changes affect original