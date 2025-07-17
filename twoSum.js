function twoSum(arr,target){
    let result =[]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] + arr[i+1] === target){
            result.push(arr[i],arr[i+1])
        }
    }
    return result
}
console.log(twoSum([2,3,7,5],10))