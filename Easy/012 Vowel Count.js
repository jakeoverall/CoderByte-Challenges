function VowelCount(str) { 

    return str.replace(/([bcdfghjklmnpqrstvwxyz0123456789])/g, '').length;
         
}
   
// keep this function call here 
VowelCount(readline());           
