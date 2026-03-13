class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        localMax = [1] * len(prices)
        for i in range(len(prices)-1, -1, -1):
            if i == len(prices)-1:
                localMax[i] = prices[i]
            else:
                localMax[i] = max(prices[i], localMax[i+1])
        
        maxp = 0
        for i in range(len(prices)):
            maxp = max(maxp, localMax[i]- prices[i])
        return maxp
