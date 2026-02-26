
function sortColors(nums) {
    let buckets = Array(3).fill(0);
    for(let n of nums) {
        buckets[n] += 1;
    }
    let i = 0;
    for(let index in buckets) {
        let count = buckets[index];
        while(count>0){
            nums[i++]=parseInt(index);
            count-=1;
        }
    }
    nums
}

nums = [1,0,1,2];
nums = [2,0,2,1,1,0];
r = sortColors(nums);
nums


// [0,1,1,2]