console.log(a);

let p = 20;
console.log(p);

let a = 10;
console.log(a);

/*
We are using variable a before it is declared.

Variables with let are hoisted but not usable before declaration.
This time is called Temporal Dead Zone.

Because of this, an error occurs at console.log(a)
and the code stops there.
*/