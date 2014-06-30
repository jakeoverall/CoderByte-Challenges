function LongestWord(sen) { 

  return sen.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ").reduce(function (a, b) { 
    if(a.length == b.length){
      return a;
    }
    return a.length > b.length ? a : b; 
  }); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());           
