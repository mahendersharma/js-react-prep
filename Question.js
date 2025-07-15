function interview(str){
let result =''
let start = 0
let end = str.length -1
let count = 0
while(start < end){
     result += str[end]
     end--
     result += str[start]
     start++
}
 
let finalResult =""
for(let i = 0; i < result.length; i++){
if(i%3 == 0){
     finalResult += result[i].toUpperCase()
    }else{
        finalResult += result[i]
    }
}
return finalResult
}
console.log(interview('mahender'))