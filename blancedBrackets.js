function blancedBrackets(str){

    let stack =[]
    let bracket ={
        '{':'}',
        '[':']',
        '(':')'
    }

    for(let char of str){
         if(bracket[char]){
            stack.push(char)
         }else if(Object.values(bracket).includes(char)){
            let last = stack.pop()
            if(bracket[last] !== char){
                return false
            }

         }
    }
return stack.length == 0
}
console.log(blancedBrackets('[{()}]'))
console.log(blancedBrackets('{()()}{}'))
console.log(blancedBrackets('([{]}))'))