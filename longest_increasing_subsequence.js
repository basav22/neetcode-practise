// longest_increasing_subsequence

var lengthOfLIS = function(nums) {
    const dp = Array(nums.length).fill(1);
    for(let i=0;i<nums.length;i++) {
        for(let j=0;j<i;j++) {
            if(nums[j] < nums[i]) 
                dp[i] = Math.max(dp[i], 1+dp[j]);
        }
    }
    return Math.max(...dp);
};

c = lengthOfLIS([4,10,4,3,8,9]);
c











function newIter(nums) {
    const dp = Array(nums.length+1).fill(0);
    for(let i=1;i<nums.length+1;i++) {
        if(i==1) {
            dp[i]=1;
            continue;
        }
        if(nums[i-1] > nums[i-2]) {
            dp[i] = 1+dp[i-1]
        } else {
            dp[i] = dp[i-1];
        }
    }
    return dp[nums.length];
}

f = newIter([10,9,2,5,3,7,101,18]);
f