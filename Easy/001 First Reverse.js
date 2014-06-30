function FirstReverse(str) { 
  var length = str.length;
  var reversed = "";
  // code goes here  
  for(i = length -1; i >= 0; i--){
    reversed += str[i];
  }
  return reversed; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());    