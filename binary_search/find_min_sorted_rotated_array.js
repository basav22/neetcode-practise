

// Find Minimum in Rotated Sorted Array

var findMin = function(nums) {
    let l = 0, r= nums.length-1;
    nums
    let min = nums[0];
    while(l<=r) {
        let mid = l + parseInt((r-l)/2);
        l
        r
        mid
        
        // check edges.
        if(nums[l] <= nums[mid] && nums[mid] <= nums[r]) {
            // sorted
            l
            r
            a = nums[l]
            a

            return Math.min(min,nums[l]);
        } else if (nums[l] <= nums[mid]) {//issue in right side
             // follow smaller side
             min = Math.min(min, nums[mid])
            l = mid+ 1;
            l
            min
        } else { // issue in left side
            l
            r
            min = Math.min(min, nums[mid])

            r=mid-1;
            r
        }
    }
};

let nums = [3,4,5,1,2];
nums = [4,5,6,7,0,1,2]
// nums = [11,13,15,17]
// nums = [3,1,2]
// nums = [5,1,2,3,4]
nums=[2,1]
a = findMin(nums);
a
