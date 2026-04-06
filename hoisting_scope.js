/*
    In JavaScript we have:
    1. Global Scope
    2. Function Scope (Local Scope)
    3. Block Scope

    ----------------------------------------
    var:
    - Function scoped (NOT block scoped)
    - Accessible outside {} blocks
    - Hoisted and initialized with undefined

    let and const:
    - Block scoped
    - Accessible only inside the block {}
    - Hoisted but NOT initialized (Temporal Dead Zone)

    ----------------------------------------
    BLOCK SCOPE EXAMPLES
*/

{
    var a = 10;
}
console.log(a); //  prints 10 (var is not block scoped)

{
    let b = 10;
}
console.log(b); //  ReferenceError: b is not defined
/*
    ----------------------------------------
    HOISTING

    Hoisting means variables and functions are moved
    to the top of their scope before execution.

    var:
    - Hoisted
    - Initialized with undefined
    basically variable is generated but the value is not assigned
*/
console.log(x); // undefined
var x = 5;
/*
    let and const:
    - Hoisted but NOT initialized
    - Stay in Temporal Dead Zone (TDZ)
*/

console.log(y); //  ReferenceError
let y = 5;

console.log(z); //  ReferenceError
const z = 10;


/*
    FUNCTION HOISTING
*/

// Function Declaration → fully hoisted
greet(); // works

function greet() {
    console.log("Hello");
}


// Function Expression → NOT fully hoisted
sayHi(); // ❌ TypeError (undefined is not a function)

const sayHi = function () {
    console.log("Hi");
};


/*
    ----------------------------------------
    SUMMARY

    - var → function scoped, hoisted with undefined
    - let/const → block scoped, hoisted but in TDZ
    - Function declarations → fully hoisted
    - Function expressions → not hoisted like functions
*/