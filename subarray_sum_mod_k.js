

// Continuous Subarray Sum

// Given an integer array nums and an integer k, 
// return true if nums has a good subarray 
// or false otherwise.


// A good subarray is a subarray where:

// its length is at least two, and
// the sum of the elements of the subarray is a multiple of k.

var checkSubarraySum = function(nums, k) {
    res = false;
    nums
    k
    return checkSubarraySum1(nums,k);
    // for(let i=0;i<nums.length;i++){
    //     res = backtrack(nums,k,0,0,i);
    //     if(res == true) return true;

    // }
    // return false;
};

var nums1 = [23,2,4,6,7], k1 = 6;
nums1 = [23,2,6,4,7], k1 = 13
nums1=[0,0], k1=1;
// nums1=[23,6,9], k1=6
a =checkSubarraySum(nums1,k1);
a1= subArraySum(nums1,k1)
a
a1


// make prefixsum
// if prefix%k matches previosly
// true
function subArraySum(nums, k) {
    nums
    k
    let prefix=0;
    let memo={0:-1};

    for(let i=0; i<nums.length; i++) {
        prefix += nums[i];
        prefix
        
        key= k === 0 ? prefix :prefix%k;
        if(memo[key] != null ) {
            key
            c=memo[key]
            c
            i
            if(i-memo[key] >=2)
            return true;
        } else {
            memo[key]=i;
        }
        memo
    }

    return false;
}



function checkSubarraySum1(nums, k) {
    // Map remainder -> earliest index
    const map = new Map();
    map.set(0, -1); // important base case

    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        let rem = k === 0 ? prefixSum : prefixSum % k;

        if (map.has(rem)) {
            // length must be >= 2
            if (i - map.get(rem) >= 2) {
                return true;
            }
        } else {
            map.set(rem, i);
        }
    }
    return false;
};
