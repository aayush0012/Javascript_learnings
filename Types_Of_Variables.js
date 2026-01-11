/*
========================================
 JavaScript Variable Declarations
========================================
*/

/*
  VAR
  --------------------------------------
  - Function scoped (not block scoped)
  - Can be redeclared and reassigned
  - Causes unexpected bugs due to hoisting
  - Generally NOT recommended
*/

// var x = 10;
// var x = 20; // Redeclaration allowed (problematic)


/*
  LET
  --------------------------------------
  - Block scoped
  - Cannot be redeclared in the same scope
  - Can be reassigned
  - Can store any data type
*/

let a = 10;
a = [20]; // reassignment allowed

console.log(a);


/*
  CONST
  --------------------------------------
  - Block scoped
  - Cannot be redeclared or reassigned
  - Must be initialized at declaration
*/

const b = 20;
console.log(b);
