
function maxProduct(nums) {
    let [maxProduct, minProduct] = [1,1];

    let res =-Infinity;
    for(let i = 0; i< nums.length; i++) {
        let tmp = maxProduct * nums[i];
        maxProduct = Math.max(maxProduct * nums[i],  minProduct* nums[i], nums[i]); 
        minProduct = Math.min(tmp, minProduct * nums[i], nums[i]);

        res = Math.max(res,maxProduct); // [-2,4]

    }
    return res;
}

nums = [1,2,-3,4]
nums = [-2,-1]
nums=[2,3,-2,4]

r = maxProduct(nums);
r