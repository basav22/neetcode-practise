



// Binary search
    var search = function(nums, target) {
        let len = nums.length;
        let l = 0, r=len-1
        // nums
        // iterate
        while( l<=r) {
            // find mid
            let mid = parseInt(l + (r-l)/2);
            mid
            if(target >nums[mid]) {
                // look into right
                l = mid+1;
            } else if(target < nums[mid]) {
                // look into left
                r = mid-1;
            } else {
                return mid;
            }
        }
        return -1
    };

let nums = [-1,0,3,5,9,12];
res = search(nums,1);
res
a = res > -1
a