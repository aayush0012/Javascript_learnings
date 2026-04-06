class Human{
    age ; 
    name='Aayush'; 
    #id ;  //  # is used to call private members and can be accessed using only this keyword
    constructor(id,age){
        this.#id=id; 
        this.age=age; 
    }
     greet(){ //  These are methods and not just functions javascript treats them func so dont expilictly need to write Function
        console.log("hey there "); 
    }   
    get getter(){
        return this.#id; 
    }
    set setter(another_id){
        this.#id=another_id; 
    }
} 
const obj1  =new Human(23,12);
obj1.greet(); 
console.log(obj1.getter); 
let another_id=24; 
obj1.setter=another_id; 
console.log(obj1.getter); 
