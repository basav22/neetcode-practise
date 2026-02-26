

function minCostClimbingStairs(cost) {
    let dp = Array(cost.length + 1);

     if(cost.length == 1)
        return Math.min(cost[0]);
    
    if(cost.length == 2)
        return Math.min(cost[0], cost[1]);
    
    dp[cost.length-1] = 0, dp[cost.length]=0;
    
    for(let i = cost.length-2; i>=0; i--) {
        dp[i] = Math.min(cost[i] + dp[i+1], cost[i+1] + dp[i+2]);
    }

    return dp[0];
}

cost = [1,2,1,2,1,1,1]
r = minCostClimbingStairs(cost)
r