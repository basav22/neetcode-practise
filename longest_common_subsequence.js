// LCS on string

var longestCommonSubsequence = function(text1, text2) {
    let dp = Array.from({length: text1.length+1}, () => Array(text2.length+1).fill(0));

    let m=text1.length, n=text2.length;
    for(let i=1; i< text1.length+1; i++) {
        for(let j=1; j<text2.length+1; j++) {
            a=text1[i-1]
a
            if(text1[i-1] == text2[j-1]) {
                dp[i][j]= 1+dp[i-1][j-1];
            } else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    dp
    return dp[m][n];
};

a=longestCommonSubsequence("abcde", 'ace');
a

