function maxSumSabArray(arr){
let currSum = 0
let maxSum = 0

for(let i =0 ; i < arr.length;i++){
    if(arr[i] > currSum + arr[i]){
      currSum =arr[i]
    }else{
     currSum += arr[i]
    }
    if(maxSum < currSum){
        maxSum = currSum
    }
}
return maxSum
}
console.log(maxSumSabArray([-2,1,-3,4,-1,2,1,-5,4]))