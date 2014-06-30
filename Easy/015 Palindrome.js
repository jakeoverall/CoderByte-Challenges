function Palindrome(str) { 

  var reversed = str.split('').reverse().join('').replace(' ', '').split(' ').join('');
  var newStr = str.split(' ').join('');
  //return newStr + " " + reversed;
  if(reversed === newStr)
    return true;
  else
    return false;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());           
