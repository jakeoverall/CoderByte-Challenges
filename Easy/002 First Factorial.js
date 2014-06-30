function FirstFactorial(num) { 

  var output = num;
  for(i = num -1; i > 0; i--){
    output *= i;
  }
  
  // code goes here  
  return output; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());  