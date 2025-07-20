function fectorial(num){
  if(num ==1){
      return num
  } 
   
   return fectorial(num -1) * num
}
console.log(fectorial(5))
