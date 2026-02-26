
// function rob(nums, i) {
//     if(i>= nums.length)
//         return 0;
    
//     return Math.max(rob(nums, i+1), nums[i]+ rob(nums, i+2));
// }

function rob(nums) {
    if(nums.length == 1)
        return nums[0];

    let dp = Array(nums.length+1);
    dp[nums.length] = 0;

    dp[nums.length-1] = nums[nums.length-1];

    for(let i=nums.length-2; i>=0; i--) {
        dp[i] = Math.max(dp[i+1], nums[i]+dp[i+2]);
    }

    return dp[0];
}

nums = [5,1,2]
nums = [2,9,8,3,6]

r = rob(nums)
r
