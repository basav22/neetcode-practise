

function numDecodings(s) {
    let dp = Array(s.length+1).fill(0);
    dp[s.length] = 1;

    for(let i=s.length-1; i>=0; i--) {
        let one = s[i] != '0' ? dp[i+1] : 0;
        one
        
        // 2 cut
        let twoDigit = s.substring(i, i+2)
        let two = 0

        if (i + 1 < s.length && twoDigit >= "10" && twoDigit <= "26") {
            two = dp[i+2]
        }

        dp[i] = one  + two;
    }

    return dp[0];
}

s="2101"
r = numDecodings(s);
r

t =  "27"<"26"
t