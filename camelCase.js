function camelCase(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (i == 0) {
            result += str[i].toUpperCase()
        } else if (str[i] == str[i].toUpperCase()) {
            result += "_" + str[i]
        } else {
            result += str[i]
        }
    }
    return result
}
console.log(camelCase("mahenderSharma"))