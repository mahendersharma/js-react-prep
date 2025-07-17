function anagram(arr){
let result ={}
for(let val of arr){
    
    let key = val.split('').sort().join('')
    if(result[key]){
        result[key].push(val)
    }else{
        result[key] = [val]
    }
}
return Object.values(result)
}
console.log(anagram(['bat','cat','eat','tea','act','tab']))