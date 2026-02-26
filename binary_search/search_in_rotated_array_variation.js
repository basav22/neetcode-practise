
function search(nums, target) {
    let l = 0, r = nums.length - 1;
    while(l<=r) {
        let mid = l + parseInt((r-l)/2);
        l
        r
        mid
        if(nums[mid] == target)
            return mid;

        if(nums[mid] > nums[l]) { // part of left subarray
            if(nums[l]<=target && target <nums[mid] ) 
                r = mid - 1;
            else
                l = mid+1;
        } else if(nums[mid] < nums[l]) {
            // part of right subarray
            if(nums[mid] < target && target <= nums[r]) 
                l = mid+1;
            else
                r = mid - 1;
        } else // nums[l] == nums[mid] -- we cannot determine- just reduce left
            l+=1;
    }
    return -1;
}

nums=[1,0,1,1,1],target=0
// nums=[1,1,3,1],target=3

r = search(nums, target);
r