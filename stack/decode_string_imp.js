

// 394. Decode String

// Example 1:

// Input: 

// Output: "aaabcbc"
var decodeString = function(s) {
    // push all chars and number to stack 
    // once we get `]` and we start pop and append chars
    // till we get `[` and pop again to get  number
    s
    let stack = [], cur='',k='';

    for(let i=0;i<s.length;i++) {
        if(s[i] != ']') {
            c = s[i]
            c
            stack.push(s[i]);
        } else {
            cur = '';
            while(stack[stack.length-1] != '[') {
                cur = stack.pop()+cur;
            }
            // cur

            // pop [
            stack.pop();

            // need to find k
            k='';
            while(stack.length>0 &&stack[stack.length-1] >='0' && stack[stack.length-1] <= '9') {
                k = stack.pop() + k;
            }
            k
            stack.push(cur.repeat(Number(k)));

            

        }
        stack
    }
    return stack.join('');
};
let s = "3[a]2[bc]"

// s = "2[abc]3[cd]ef"
// s = "3[a2[c]]"
// s = "abc3[cd]xyz"
// s="10[le]"
s="3[z]2[2[y]pq4[2[jk]e1[f]]]ef"
// s = 'abc'


res = decodeString(s);
res



