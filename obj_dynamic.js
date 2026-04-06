let obj={
    name:'aayush', 
    age:20,
    height:150
}; 
console.log(obj);
obj.color='red'; 
console.log(obj ); // we can add any feature during runtime 
/*
-------------OBJECT CLONING------------------
if a={age:10};
let b=a -> NOT CLONING B ALSO REFERS TO THE SAME A 
*/
// WAYS TO CLONE 
// 1.SPREAD OPERATOR
let src={age:12}; 
let dst={...src};  // using 3 dots we have cloned the object 
dst.age=20; 
console.log(dst); 
console.log(src);

//2. Assign Method
let dest2=Object.assign({},src) ; 
console.log(dest2); 
// 3.iteration -> iteratively add new features using for loop

