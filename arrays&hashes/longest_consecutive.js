
function longestConsecutive(nums) {
    if(nums.length == 0) return 0;
    let map = new Map();
    for(let num of nums) {
        map.set(num,1);
    }
    map
    // iterate map
    let max = 0;
    for(let num of nums) {
        if(!map.has(num-1)){
            let len = 0;
            while(map.has(num+len)){
                len+=1;
                max = Math.max(max, len);
            }
        }
    }

    return max;
}

nums = [2,20,4,10,3,4,5];
nums = [0,3,2,5,4,6,1,1];

r = longestConsecutive(nums);
r

