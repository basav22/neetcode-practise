var lengthOfLongestSubstring = function(s) {
    let i=0, j=0;
    let memo = new Map();
    let len = 0;
    while(j<s.length) {
        memo
        while(memo.has(s[j])) {
            memo.delete(s[i]);
            i=i+1;
            
        }
        memo.set(s[j],j);
        len = Math.max(len,j-i+1);
        j++;
    }
    i
    j
    len
    return len;
};

s = "bbbbb";
// s="dvdf"
s = "abcabcbb"
// s = "pwwkew"
a = lengthOfLongestSubstring(s);
a