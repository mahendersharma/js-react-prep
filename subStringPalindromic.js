function subStringPalindromic(str,checkPalindromic){
let res = []
for(let i = 0; i < str.length; i++){
    for(let j = i + 1; j < str.length; j++){
        let sub = str.slice(i,j)
        if(checkPalindromic(sub)){
          res.push(sub)  
        }
    }
}
return res
}

function checkPalindromic(sub){
let start = 0
let end = sub.length - 1
 while(start < end){
    if(sub[start] != sub[end]){
        return false
    }
    start++
    end--
 }
 return true
}

console.log(subStringPalindromic('abbaeae',checkPalindromic))