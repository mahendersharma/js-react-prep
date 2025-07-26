function subString(str){
if(!str){
    return ""
}
let start = 0
let end = 0
let maxLen = 0
let maxSubSting =""
let sub = new Set()
while(end < str.length){
    if(!sub.has(str[end])){
        sub.add(str[end])
        if(sub.size > maxLen){
            maxLen = sub.size
            maxSubSting = str.slice(start,end+1)
        }
        end++
    }else{
        sub.delete(str[start])
        start++
    }
}
return maxSubSting
}
console.log(subString('pwwkew'))