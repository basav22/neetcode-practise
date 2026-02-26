// Palindromic Substrings

// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.



// c= countSubstrings("aaa");
// c



var countSubstrings = function(s)  {
    
    // abcd
    let count = 0;
    // p
    // q

    // 2D array
    
    memo = Array.from({length: s.length}, () => Array(s.length).fill(undefined));
    function isPalindrome(p,q) {
        if(p>q) {
            return true;
        }
        if(memo[p][q] != undefined) {
            return memo[p][q];
        }
        res= s[p]==s[q] && isPalindrome(p+1, q-1)
        
        memo[p][q]= res;
        return res;

    }

    for(let i=0;i<s.length;i++) {
        for(let j=i; j<s.length; j++) {
            i
            j
            if(s[i] == s[j]) {
                if( isPalindrome(i+1,j-1 ) == true)
                    count++;
                count
            }

        }
    }
    count
    return count;
}
s='abc';
d = countSubstrings(s,);
d

