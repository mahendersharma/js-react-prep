function findSmallestPositive(arr){
    let filterPositive = arr.filter(val=>val > 0)
    let store = new Set(filterPositive)
    for(let i = 1; i <= arr.length + 1; i++){
       if(!store.has(i)){
           return i
       }
    }
}
console.log(findSmallestPositive([3, 4, -1, 1]))  
console.log(findSmallestPositive([1, 2, 0]))
console.log(findSmallestPositive([7, 8, 9]))