function prifix(arr){
   for(let i = 0; i < arr.length;i++){
      if(arr[i] > arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
      }
   }
   let res = ""
let start = arr[0]
let end = arr[arr.length -1]
 
for(let i = 0; i < start.length; i++){
    if(start[i] === end[i]){
        res += start[i] 
    } else {
            break; 
        }
}
return res
}

let arr = ['aman','amul','amar','ambala']
console.log(prifix(arr))