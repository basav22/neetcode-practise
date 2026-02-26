
function majorityElement(nums) {
    let wantFreq = parseInt(nums.length/2) + 1;
    wantFreq
    let counts = new Map();
    for(let n of nums) {
        n
        counts.set(n, 1+(counts.get(n) || 0));
        if(counts.has(n) && counts.get(n) == wantFreq)
            return n;
    }

}

let arr = [1,1,1,1].count(1);

arr.wantFreq

// Boyre-Moore Algo
function majorityElement2(nums) {
    let cnt =0, res = 0;
    for(let n of nums) {
        if(cnt == 0)
            res = n;
        // if(n == res)
        //     cnt+=1
        // else
        //     cnt -=1;
        cnt += n == res ? 1 : -1;
    }
    return parseInt(res);
}

let nums = [1,2,1];
res = majorityElement2(nums);
res
