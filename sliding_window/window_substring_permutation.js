
// minimum window substring permutation

function minWindow(s, t) {
    let window = new Map();
    let counts = new Map();
    for(let ch of t) {
        counts.set(ch, 1+ (counts.get(ch) || 0))
    }
    let need = counts.size, have=0;
    need
    counts
    let l = 0, r=0;
    let res = Infinity;
    let [minl, minr] = [-1,-1];
    while(r<s.length) {
        // add to window map
        // if(counts.has(s[r])){
        window.set(s[r],1 + (window.get(s[r]) || 0));
        window
            
        // }
        if(counts.has(s[r]) && counts.get(s[r]) == window.get(s[r])){
            // cx=s[r];
            
            have += 1;

        }
        have
        need
        while(have == need) {
            // update result
            if(r-l+1 < res) {
                minl = l;
                minr = r;
                res = r-l+1
            }
            // plan moving left and shrink window
            window.set(s[l], window.get(s[l]) - 1);

            if(counts.has(s[l]) && window.get(s[l]) + 1 == counts.get(s[l])) 
                have -=1;
            
            l+=1;

        }
        r+=1;
    }
    res
    if(res == Infinity)
        return "";
    return  s.substring(minl,minr+1);
}

s = "OUZODYXAZV", t = "XYZ"
r = minWindow(s,t);
r


