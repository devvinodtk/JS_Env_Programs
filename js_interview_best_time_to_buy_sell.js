// Q.5 Best time to Buy and Sell Stocks
// You are given an array of prices where prices[i] is the price of given stock
// on the ith day
// You want to maximize your profit by choosing a single day to buy one stock
// and choose different day in the future to sell that stock
// Return the maximum profit, If you cant achieve any profit, return 0.

//Input: prices = [7,1,5,3,6,4] --------->>>>>  Output: 5
//Input: prices = [7,6,4,3,1] --------->>>>>  Output: 0

//burteforce method

// function maxProfit(prices) {
//     let gProfit = 0
//     for(i=0;i<prices.length - 1; i++) {
//         for(j=i+1;j<prices.length; j++) {
//             let tempProfit = prices[j] - prices[i];
//             if(tempProfit > gProfit) gProfit = tempProfit
//         }
//     }
//     return gProfit;
// }


//greedy algorithm

const maxProfit = function(prices) {
    let minStockPrice = prices[0]
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if(minStockPrice > prices[i]) minStockPrice = prices[i];
        profit = Math.max(profit, prices[i] - minStockPrice)
    }
    return profit;
}

let profit = maxProfit([7,1,5,3,6,4])
console.log(profit)