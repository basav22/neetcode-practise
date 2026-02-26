
// AAA B AB
// k=1
var characterReplacement = function(s, k) {
    let i = 0, j = 0;
    let memo = new Map();
    let len = 0;
    s
    while(j<s.length) {
        memo
        memo.set(s[j], memo.has(s[j]) ? memo.get(s[j]) + 1 : 1);
        memo
        // given a window - window size - max(values in map) <=k
        while(j-i+1 - Math.max(...Array.from(memo.values())) > k) {
            memo.set(s[i], memo.get(s[i])-1);
            // memo.get(s[i]) -= 1;
            i = i+1;
            j
        } 
        len = Math.max(len, j-i+1);
        j=j+1;
    }
    return len;
};
 s = "ABAB", k = 2;
 s = "AABA", k = 1
 aa=characterReplacement(s,k);
 aa