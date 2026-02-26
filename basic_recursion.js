/////////////////////
/////// BASIC RECURSION Problems////////
//////////////////

function print1ToN(n,i) {
    if(n<i) return;
    console.log(i);
    print1ToN(n, i+1);
}

// print1ToN(7,1)

function sumArray(arr,i,j) {

    if(i>j) return 0;
    sum = arr[i] + sumArray(arr,i+1,j);
    return sum
}

res= sumArray([2,4],0,1);
res

// Reverse a string
function reverseStr(str,i,j) {
    // arr = 'basav'.split('');
    // arr[0]='v';
    // return arr.join('');

    // str = 'basavaraj';
    if(i>=j) {
        return str;
    }

    // swap i, j char
    temp = str[i]; 
    
    strArr = str.split('');
    i
    j
    strArr[i] = str[j];
    
    
    strArr[j] = temp;
    strArr
    str = strArr.join('');
    str

return reverseStr(str, i+1, j-1);
}

var reverseString = function(s) {
    return reverseStr(s,0,s.length-1);
};

str1 = 'hello';
op = reverseString(str1);
op

