/*
----------ERROR HANDLING----------
error->unexpected event jis se code flow (execution disrupt hojaye)
TYPES OF ERROR
1.Compile time 
2.Run-Time 
*/
try{
// jaha error aa skta h 
console.log("hey"); 
console.log(x); // x is not defined so it will throw error right as soon as error comes it goes to catch block
}
catch(err){
// if try block me error hota h to ye block execute hota h 
    console.log("Error Found  , Type = ",err); 
}
finally{
  // this block is independent and it will execute after try and catch whether error is there or not
  console.log("Your error would be resolved withing few time ,Thanks for co-operating !"); 
}
// -----------Custom Error-------------
// let say if some code is considered invalid 
let code=100; 
if(code==100){
    throw new Error("This is invalid code" ); 
}
// This is the custom error using throw which we can use anytime according to our convienence
