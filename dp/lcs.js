
function longestCommonSubsequence(string1, string2) {
    // 2D dp array init with 0
    let m = string1.length, n = string2.length;

    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    
    for (let i = m-1; i >= 0; i--) {
        for(let j=n-1; j>=0 ; j--) {
            if(string1[i] == string2[j])
                dp[i][j] = 1 + dp[i+1][j+1];
            else
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j+1]);
        }
    }
    return dp[0][0];
}

s2='cat';
s1='rabt';

s1='hofubmnylkra'
s2='pqhgxgdofcvmr'
r = longestCommonSubsequence(s1, s2)
r