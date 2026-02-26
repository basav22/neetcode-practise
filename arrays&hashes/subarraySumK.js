
// this works when only positive numbers
function subarraySum(nums, k) {
    let l = 0, r=0;
    let cur_sum = 0, res = 0;
    while(r<nums.length) {
        cur_sum+=nums[r];
        
        while(cur_sum>k) { 
            cur_sum
            r
            cur_sum-=nums[l];
            l+=1;
        }
        if(l<=r &&cur_sum == k) {
            l
            r
            res += 1;
        }
        r+=1;
    }
    return res;
}



// Using prefix sum - considering -ve numbers
function subarraySum(nums, k) {
    let prefixSum = new Map();
    prefixSum.set(0, 1);

    let cursum = 0, res = 0;
    for(let i =0; i< nums.length; i++) {
        cursum += nums[i];
        let diff = cursum-k;
        res += (prefixSum.get(diff) || 0);

        prefixSum.set(cursum, 1+(prefixSum.get(cursum) ||0));
    }
    return res;
}

nums = [1,2,3], k=3
// nums = [1], k=0
res = subarraySum2(nums,k);
res;