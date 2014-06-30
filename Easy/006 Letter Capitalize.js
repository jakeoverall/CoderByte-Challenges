function LetterCapitalize(str) { 

  // code goes here  
  return str.replace(/\w\S*/g, function(txt){
	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
     });
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());           
