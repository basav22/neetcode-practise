

// coins array [1,2,5] and sum=11 -- find minimum coins needed
// coinsCount[i] = for 0->j coinsCount(j) -  -> stores count of coins upto i such that sum possible
// track min

function minCoins(nums, totalSum) {

    let len = nums.length;
    let dp = new Map();
    
    function countOfCoins(curSum) {
        if(curSum == 0) { // reached dest
            return 0;
        }
        if(curSum < 0) {
            return Infinity;
        }
        if(dp.has(totalSum-curSum)) {
            return dp.get(totalSum-curSum);
        }
        
        let minCount = Infinity;

        for(let k=0;k<len;k++) {
            // k
            minCount = Math.min(minCount, 1+ countOfCoins(curSum-nums[k]));
            
            // k
            // minCount
        }
        dp.set(totalSum-curSum, minCount);
        // len
        // minCount
        
        // dp[len-1] = minCount;
        return minCount;
    }
    dp

    let res = countOfCoins(totalSum);
    return res==Infinity ? -1 : res;

}

c=minCoins([1,2,5], 11);
c
