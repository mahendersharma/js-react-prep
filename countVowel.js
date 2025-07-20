function countVowel(str){
    let vowel = ['a','e','i','o','u']
    let res = ''
    for(let i = 0; i < str.length; i++){
        // if(vowel.includes(str[i])){
        //     res += str[i]
        // }
        let j = 0
        while(j < vowel.length){
            if(str[i] == vowel[j]){
               res +=str[i] 
            }
            j++
        }
    }
    return res
}
console.log(countVowel('hello World'))