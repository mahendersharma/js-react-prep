function febbonaci(num){
  let result = [0,1]
  for(let i = 2; i < num; i++){
     if(result[i-1]+result[i-2]){
        result.push(result[i-2]+result[i-1])
     }
  }
  return result
}
console.log(febbonaci(6))