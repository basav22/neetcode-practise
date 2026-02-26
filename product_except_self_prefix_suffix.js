

// 238. Product of Array Except Self
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]


var productExceptSelf = function(nums) {
    var prefix = [1];
nums
    for(i=1;i<nums.length;i++) {
        // console.log(nums[i]);
        prefix[i] = prefix[i-1] * nums[i-1];
    }
    prefix

    var suffix=[];
    suffix[nums.length-1]=1;

    for(i=nums.length-2;i>=0;i--) {
        suffix[i] = suffix[i+1] * nums[i+1];
    }

    suffix


    res=[];
    for(i=0;i<nums.length;i++) {
        res[i] = suffix[i] * prefix[i];
    }
    res
    return res;
};

productExceptSelf( [1,2,3,4]);