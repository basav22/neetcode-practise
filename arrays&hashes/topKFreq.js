
// bucket sort usage
// k max occurances in given array

function topKFrequent(nums, k) {
    let counts = new Map();
    for(let n of nums) {
        counts.set(n, (counts.get(n) || 0) + 1 );
    }

    let freq = Array.from({length: nums.length + 1}, () => []);
    // let freq = Array(nums.length + 1).fill([]);

    freq
    counts
    counts.forEach((val, key) => {
        key
        val
        freq[val].push(key);
    });

    freq
    let res = [];
    // iterate freq in rev order
    for(let i=freq.length-1; i>=0; i--) {
        res.push(...freq[i]);
        if(res.length == k)
            return res;
    }
}

nums = [1,2,2,3,3,3], k = 2

re = topKFrequent(nums,k);
re