function secondLargest(arr){ 
    let largest = 0
    let secondLarge = 0
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLarge = largest
            largest = arr[i]
        }else if(arr[i] < largest && secondLarge < arr[i]){
           secondLarge =arr[i]
        }
    }
    return secondLarge
}
console.log(secondLargest([22,11,33,44,34,55]))