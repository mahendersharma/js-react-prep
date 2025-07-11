function firstNonRepeating(str){
   let obj ={}
   for(let val of str){
    obj[val] = (obj[val] || 0) + 1 
   }

   for(let val of str){
    if(obj[val] == 1){
        return val
    }
   }
   return -1
}
console.log(firstNonRepeating('javascript'))