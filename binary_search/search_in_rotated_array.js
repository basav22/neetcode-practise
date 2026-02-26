

// Search in rotated array

var search = function(nums, target) {
    let l = 0, r=nums.length-1;

    while(l<=r) {
        let mid = l + parseInt((r-l)/2);
        mid
        l
        r

        // check if we met target
        if(nums[mid] == target) {
            break;
        }
        // if already sorted
        if(nums[l]<=nums[r]) {
            l
            r
            if(target > nums[mid]) 
                l = mid+1;
            else
                r=mid-1;
        }
        // is part of first subarray
        else if(nums[mid] >= nums[l] ) {
            l
            r
            mid
            if(target >= nums[mid] || target <nums[l])
                l=mid+1
            else
                r  = mid-1;
        } else {
            l
            r
            if(target <= nums[mid] || target > nums[r])
                r=mid-1
            else
                l = mid+1;
        }
    }
    return l>r ? - 1 : l + parseInt((r-l)/2);
};
let nums = [4,5,6,7,0,1,2], target = 2
// nums=[5,1,3], target=5
res = search(nums, target);
res