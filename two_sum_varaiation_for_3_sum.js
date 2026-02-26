

// 2 sum with new style
// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

function twoSum(nums, k) {
    nums.sort((a,b) => a - b);

    nums

    i=0, j=nums.length-1;
    sum=0;

    while(i<j){
        sum = nums[i] + nums[j];
        if(sum > k) j--;
        else if(sum < k) i++;
        
        if(sum == k) {
            return [i, j];
        }

    }

}

res = twoSum([2,7,15,11], 9)
res