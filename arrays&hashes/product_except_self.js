
// product of array except self
// prefix and suffix of element and then multiply

function productExceptSelf(nums) {
    res = Array(nums.length).fill(1);
    prefix = 1;
    for(let i in nums) {
        res[i] = prefix;
        prefix *= nums[i];
    }
    res

    suffix = 1;
    for(let i = nums.length-1; i >=0; i--) {
        res[i]*= suffix;
        suffix *= nums[i];
    }
    return res;
}

let nums = [1,2,3,4];
res = productExceptSelf(nums);
res