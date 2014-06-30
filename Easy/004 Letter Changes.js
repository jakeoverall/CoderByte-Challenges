function LetterChanges(str) { 

   return str.replace(/[a-zA-Z]/g, function(c){
    return String.fromCharCode(c.charCodeAt(0)+1);
    }).replace(/[aeiou]/g, function(c){
        return c.toUpperCase();
    });  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());           
