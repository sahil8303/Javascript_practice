// Immediately Invoked Function Expressions (IIFE)


function chai(){
    console.log("DB CONNECTED");
    
}

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')
// ⚡ Concept: Immediately Invoked Function Expression (IIFE)
// 1️⃣ What is an IIFE?

// IIFE (Immediately Invoked Function Expression) is a function that is defined and executed immediately after it is created.

// Its main purpose is to run code instantly and avoid polluting the global scope.

// ✅ Basic Syntax:

// (function() {
//    // code here
// })();


// The first pair of parentheses (function() { ... }) makes the function an expression (not a declaration).

// The second pair `() at the end immediately invokes (calls) it.

// 2️⃣ Example 1: Named IIFE
// (function chai() {
//     console.log("DB CONNECTED");
// })();


// This is a named IIFE because the function has a name (chai).

// It runs immediately once the JS engine reaches it.

// It doesn’t need to be called separately.

// ✅ Output:

// DB CONNECTED