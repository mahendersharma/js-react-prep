function buySellStock(stock){
    let minBuy = Infinity
    let maxSell = 0

    for(let i = 0; i < stock.length; i++){
if(stock[i] < minBuy){
    minBuy = stock[i]
}else if(stock[i] - minBuy > maxSell){
maxSell = stock[i] - minBuy
}
    }
    return maxSell
}
console.log(buySellStock([7,1,5,3,9,4]))