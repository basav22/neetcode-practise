

// Permutation in String

function checkInclusion(s1, s2) {
    // keep hashmap chars and count for s1 and s2 seperate
    let count1 = Array(26).fill(0);
    let count2 = Array(26).fill(0);

    // iterate s1
    for(let i in s1) {
        let a = s1[i];
        count1[a.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        count2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }

    // compare count1 and count2
    let matches = 0;
    for(let i=0; i<26;i++) {
        if(count1[i] == count2[i])
            matches += 1;
    }
    matches

    // iterate s2 in sliding window fashion
    let l = 0, r = s1.length;
    r
    while(r<s2.length) {
        if(matches == 26) return true;

        // new char s2[r]
        let index = s2[r].charCodeAt(0) - 'a'.charCodeAt(0);
        index
        count2[index] +=1;
        if(count1[index] == count2[index]) 
            matches+=1;
        else if (count2[index] -1 == count1[index])
            matches -=1;

        // removed old char s[l]
        index = s2[l].charCodeAt(0) - 'a'.charCodeAt(0);
        count2[index] -=1;
        if(count1[index] == count2[index]) 
            matches+=1;
        else if (count2[index] +1 == count1[index])
            matches -=1;

        l+=1;
        r+=1;
    }
    matches
    return matches==26;

}
s1 = "abc", s2 = "lecabee"
 s1 = "abc", s2 = "lecaabee"
res = checkInclusion(s1,s2)
res