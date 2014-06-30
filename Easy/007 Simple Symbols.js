function SimpleSymbols(str) { 

  var string = str.split("");
  var validChars = 'abcdefghijklmnopqrstuvwxyz';
  
  for(var i =0; i<string.length; i++){
    if(validChars.indexOf(string[i]) != -1 && (string[i-1] != "+" || string[i+1] != "+")){
      return false;
    }
  }  
  return true; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());           
