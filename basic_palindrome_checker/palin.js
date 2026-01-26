const s= document.getElementById("input"); 
 function check(){
    const value =s.value; 
    let i=0; 
    let j =value.length-1;  
    while(i<=j){
        if(value[i]!=value[j]){
            alert("False")
            return 
        }
        i++; 
        j--; 
    }
    alert("True")
input.value=""; 
 }  