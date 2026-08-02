class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    /**
 * @param {number[]} prices
 * @return {number}
 */
    maxProfit(prices) {
        let left = 0
        let right = 0
        let profit = 0
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < prices[left]) {
                left = i
                right = i
            }
            if (prices[i] > prices[right]) {
                right = i
            }
            if ((prices[right] - prices[left]) > profit) {
                profit = prices[right] - prices[left]
            }
        }

        return profit
    };
}
