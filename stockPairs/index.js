// example: stockPairs = [13,3,5,9,3,9,45,1,11,25]
// target =12
// in this case, function have to return 2
function stockPairs(stocksProfit, target) {
    let cnt = 0;
    let prev = -1;
    stocksProfit.sort((a, b) =>  a - b);
    while(stocksProfit.length > 0) {
        const n = stocksProfit.shift();
        if ( n === prev) continue;
        const i = stocksProfit.indexOf(target - n)
        if (i >-1) {
            stocksProfit.splice(i);
            cnt++
        }
        prev = n;
    }
    return cnt;
}

console.log(stockPairs([13,3,5,9,3,9,45,1,11,25, 5,7], 12))