function checkPrime(val) {
    if (val <= 1) return false;
    if (val === 2) return true;
    for (let i = 2; i * i <= val; i++) {
        if (val % i === 0) {
            return true
        }
    }
    return false
}
function isPrime(arr, checkPrime) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (checkPrime(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}

console.log(isPrime([2, 9, 5, 11, 12, 15, 13], checkPrime))