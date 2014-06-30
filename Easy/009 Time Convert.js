function TimeConvert(num) { 

  var min = num % 60;
  var hr = ((num - min) / 60);
  
  
  return hr + ":" + min; 
         
}
   
// keep this function call here 
TimeConvert(readline());           
