var num = 16;

// find if this is power of 2 or not
// if num is power of 2 -> all 0's and singel 1 in rightmost place
// and (num-1) has all 1's 
// take xor of num-1 and num --> result is 0 if its power of 2
// else its not
// a ^ a = 0
// a ^ 0 = a

function isPowerOf2(num) {
    return ((num-1) & num) == 0 //0111 
           // 1000 

           // 1111
}

a=isPowerOf2(16);
a


///////////////////////////
// find missing number in array
// given array [1,2,3,5]
/////////////////////////////

function missingNumber(arr) {
    res = 0;
    for(n of arr) {
        res ^= n;
    }

    for(i=1;i<=arr.length+1;i++) {
        res ^= i;
    }

    return res;
}

b = missingNumber([1,2,3,5]);
b


// find a duplicate in 