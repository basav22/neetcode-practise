
function isPalindrome(s) {
    let i=0, j=s.length-1;
    // if()
    while(i<j) {
        while( i<j && s[i].match(/[a-zA-z0-9]/)==null) {
            i++;
            continue;
        }
        while(i<j && s[j].match(/[a-zA-z0-9]/)==null) {
            j--;
            continue;
        }
        if( s[i].toLowerCase() != s[j].toLowerCase()){
            return false;
        }
        i+=1;
        j-=1;
    }
    return true;
}
s = "Was it a car or a cat I saw?"
// s = "tab a cat"
s=".,"
res = isPalindrome(s);
res

