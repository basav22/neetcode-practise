var lengthOfLongestSubstring = function(s) {
    let i=0, j=0;
    let memo = new Map();
    let len = 0;
    while(j<s.length) {
        memo
        if(memo.has(s[j])) {
            i=Math.max(i,memo.get(s[j])+1);
            memo.delete(s[j]);
        }
        i
        j
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
s="dvdf"
s = "abcabcbb"
// s = "pwwkew"
s='abba'
a = lengthOfLongestSubstring(s);
a