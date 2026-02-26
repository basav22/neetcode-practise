
// House Robber
var rob = function(nums) {
    let dp = Array(nums.length).fill(0);
    if(nums.length == 1) {
        return nums[0];
    }
    else if(nums.length <=2) {
        return Math.max(nums[0],nums[1]);
    }
    dp[0] = nums[0];
    dp[1] = Math.max(nums[1], nums[0]);

    for(let i=2;i<nums.length;i++) {
        dp[i]= Math.max(nums[i]+dp[i-2], dp[i-1]);
    }
    return dp[nums.length-1];
};

c=rob([2,1,1,2])
c