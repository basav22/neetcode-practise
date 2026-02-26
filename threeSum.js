// 3 sum 
// Given an integer array nums, 
// return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, 
// and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

var threeSum = function(nums) {
    res=[];
    // sort nums
    nums.sort((a,b) => a-b);
    
    for(i=0;i<nums.length;i++) {
        if(i>0 && nums[i-1] == nums[i]) {
            continue;
        }

        j=i+1;
        k= nums.length-1;
        while (j<k) {
            var tripletsum = nums[i]+nums[j]+nums[k];
            
            if(tripletsum > 0) {
                k--;
            } else if(tripletsum <0) {
                j++;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                while(nums[j-1] == nums[j] && j<k){
                    j++;
                }
            }
        }
    }
    return res
    
};

res = threeSum([0,0,0,0]);
res
