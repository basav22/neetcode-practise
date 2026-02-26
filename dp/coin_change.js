
function coinChange(coins, amount) {
    let dp = {};
    let res = dfs(coins, amount,0, dp);
    return res == Infinity ? -1 : 0;
}

function dfs(coins, rem, dp) {
    if(rem < 0)
        return Infinity;
    if (rem == 0)
        return 0;
    if(dp[rem]){
        return dp[rem];
    }
    
    let res = Infinity;

    for(let coin of coins) {
        res = Math.min(res,1+dfs(coins, rem-coin,dp));
    }
    
    dp[rem] = res;
    return res;
}

coins = [1,2,5], amount = 11;
res = coinChange(coins, amount);
res

 