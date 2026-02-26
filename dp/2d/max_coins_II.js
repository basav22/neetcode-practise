// 2D DP solution
function dpsolution(coins, target) {
    let n = coins.length;
    let dp = Array.from({length: n+1}, ()=> Array(target+1).fill(0));
    // dp[]
    
    for(let i = 0; i<=n; i++) {
        dp[i][0] = 1; 
    }
    dp

    for(let i =n-1; i>=0; i--) { // 
        for(let a = 1; a<=target; a++) {
            dp[i][a] = dp[i+1][a];
            if(a-coins[i] >=0)
                dp[i][a] += dp[i][a-coins[i]]
        }
    }
    return dp[0][target];
}

function maxcoins2(coins, target) {
    let n = coins.length;
    let dp = Array.from({length: n+1}, () => Array(target + 1).fill(0));

    // set 0 col with 1
    for(let row of Array(n+1).keys())
        dp[row][0] = 1;
    // dp

    for(let row = n-1; row>=0; row--) {
        for(let col = 1; col<=target; col++) {
            dp[row][col] = dp[row+1][col]; // leave current 

            if(col-coins[row]>=0)
                dp[row][col] += dp[row][col-coins[row]];  // take it
        }
    }
    dp
    return dp[0][target];

}

function fastcoins(coins, target) {
    let n = coins.length;
    let dp = Array.from({length: n+1}, () => Array(target + 1).fill(0));

    // base fills
    for(let i= 0; i<=n;i++) {
        dp[i][0] = 1;
    }

    for(let i = n-1; i>=0; i--) { // i-> coins
        for(let j=1; j<=target; j++) {
            // i
            // j
            dp[i][j] = dp[i+1][j]; // skip cur
            dp[i][j] += (j-coins[i] >=0 ? dp[i][j-coins[i]] : 0);
        }
    }
    return dp[0][target];
}

let coins = [1,2,3], target = 4;
r = maxcoins2(coins, target);
res = dpsolution(coins,target);
resfast = fastcoins(coins, target);
r
res
resfast;
// // target = 7, coins = [2,4]
// // target=5 ,coins=[1,2,5]
// // res = dfs(coins, 0, target, new Map());
// res
// res