class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        for (let i = 0; i<prices.length; i++) {
            let l = 0
            let r = 1

            let highestProfit = 0;
            while(l<prices.length) {
                if(
                    prices[l] < prices[r]
                ) {
                    highestProfit = 
                    prices[r]-prices[l] > highestProfit ? prices[r]-prices[l] : highestProfit
                }
                else {
                    l=r
                }
                r++
            }
        return highestProfit;

        }
    }
}
