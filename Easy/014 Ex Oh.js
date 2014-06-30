function ExOh(str) { 
  var xCount = 0;
  var yCount = 0;
  
  for(var i =0; i< str.length; i++){
    if(str[i] == 'x')
      xCount++;
    else if(str[i] == 'o')
      yCount++;      
  }
  
  if(xCount == yCount)
    return true;
  else
    return false;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());           
