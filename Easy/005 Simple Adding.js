function SimpleAdding(num) { 
  this.num = num;
    var counter=0;
    var result=0;
    while(counter <= num){
        result+=counter;
        counter++;
    }
    num = result;  
    return num;            
}

         

   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleAdding(readline());           
