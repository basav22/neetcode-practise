
function minSubstingLen(str1, str2) {
    let [A, B] = [str1, str2];
    
    /**
     * No Swap needed
     */

    // if(A.length < B.length)
    //     [A, B] = [B, A];

    
    let counts = {};
    let l = 0, r= 0;

    let wantMap = {};
    for(let i of B) {
        wantMap[i] = 1+(wantMap[i] || 0)
    }
    // wantMap
    let want= Object.keys(wantMap).length;
    want
    let res = Infinity;

    let minl, minr;
    
    // calc have iterative
    let have = 0;

    while(r<A.length){
        // set in counts
        let cur = A[r];
        counts[cur] = 1 + (counts[cur] || 0);
        
        /**
         * No need to calc have iterating all wants for loop
         * Just do it incrementally
         */
        if(wantMap[cur] && counts[cur] == wantMap[cur])
            have += 1;
        while(have == want) {
            if(res > r-l+1) {
                res = r-l+1;
                [minl, minr] = [l,r];
            }
            // when left slides - have changes & counts changes
            let lkey = A[l];
            
            counts[lkey] -= 1;
            if(wantMap[A[l]] && wantMap[A[l]] == 1+ counts[lkey])
                have -=1;

            l+=1;
        }
        r+=1;
    }
    return res != Infinity ? A.slice(minl, minr+1) : '';
}

str1 = 'ODYXAZV'
str2 ='XYZ'
str1 = 'a'
str2 ='aa'
// r = minSubstingLen(str1, str2);
r