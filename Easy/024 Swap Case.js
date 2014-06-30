function SwapCase(str) { 

   var result = [];
    str.split("");
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result.push(str[i].toLowerCase());
        } else if (str[i] === str[i].toLowerCase()) {
            result.push(str[i].toUpperCase());
        } else {
            result.push(str[i]);
        }
    }    
   return (result.join(""));
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());           
