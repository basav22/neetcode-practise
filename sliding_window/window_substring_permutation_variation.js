
function checkInclusion(s, t) {
    // s ='abc' 
    // t= 'xyzbca'

    let counts = new Map();
    let window = new Map();
    for(let ch of s) {
        counts.set(ch, 1 + (counts.get(ch) || 0));
    }
    let want = counts.size;

    
    let have = 0, l=0, r=0;
    for(r=0;r < t.length;r++) {
        let ch = t[r];
        window.set(ch, 1 + (window.get(ch) || 0));
        if(counts.get(ch) == window.get(ch))
            have +=1;
        if(r<s.length-1)
            continue;

        window
        counts
        have
        l
        r
        if(have == want){
            l
            r
            return true;
        }
        
        if(window.get(t[l]) == counts.get(t[l]))
            have -=1;
        // reduce window map
        window.set(t[l], window.get(t[l]) - 1);
        
        l+=1;

    }
    return false;
}

a=checkInclusion('abc', 'xapabccv');
a