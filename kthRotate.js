function kthRotate(arr,start,end){
while(start < end){
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
}
}
let arr =[5,4,3,2,1]
let k = 3
kthRotate(arr,0,arr.length-1)
kthRotate(arr,0,k-1)
kthRotate(arr,k,arr.length-1)

console.log(arr)