
/*
 So here if some paramter is not passed through function call we assume a default value 

*/
function print(ans="hello"){
    console.log("printing The name -> ",ans); 
}
print(undefined); 
print("yoyo"); 
function getAge(){
    return 40; 
}
function utility(name="Aayush", age = getAge()){
    console.log(name , " ", age) ;
}
utility(); 