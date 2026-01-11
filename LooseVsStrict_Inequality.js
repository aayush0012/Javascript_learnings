/*
========================================
 Loose Equality (==) vs Strict Equality (===)
========================================
*/

/*
  LOOSE EQUALITY (==)
  --------------------------------------
  - Compares ONLY the values
  - Automatically converts data types (type coercion)
  - Can give unexpected results
*/

console.log('5' == 5);   // true  → string converted to number
console.log(5.0 == 5);   // true  → both represent same value
console.log(true == 1);  // true  → true is coerced to 1


/*
  STRICT EQUALITY (===)
  --------------------------------------
  - Compares BOTH value AND data type
  - No type conversion
  - Safer and recommended
*/

console.log('5' === 5);  // false → string !== number
console.log(5.0 === 5);  // true  → both are number type
console.log(true === 1); // false → boolean !== number


/*
  QUICK RULE TO REMEMBER
  --------------------------------------
  ==  → "Value same?"
  === → "Value AND type same?"
*/
