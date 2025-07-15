function arrayChunking(arr,n){
   let result =[]
   let i = 0
   while(i < arr.length){
    result.push(arr.slice(i,i+n))
    i += n
   }
   return result
}
console.log(arrayChunking([1,2,3,4,5,6,7,8,9],2))