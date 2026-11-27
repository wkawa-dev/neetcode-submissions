class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        for (let i = 0; i<prices.length; i++) {
            let IdxL=0;
            let IdxR=1;
            let highestProfit = 0;
            while(IdxR<prices.length) {
                // if for a profitable trade 
                if(prices[IdxL] < prices[IdxR]) {
                    // calculate
                    let profit = prices[IdxR] - prices[IdxL];
                    highestProfit = profit > highestProfit ? profit : highestProfit
                }
                else {
                    IdxL = IdxR
                }
                IdxR++
            }
            return highestProfit
        }
    }
}
