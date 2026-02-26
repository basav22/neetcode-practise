
// maximum length of repeated subarray
// LCS variation

// Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
// Output: 3
// Explanation: The repeated subarray with maximum length is [3,2,1].


var findLength = function(nums1, nums2) {
//     dp= new Array(nums1.length+1);
//     for(let j=0;j<nums1.length+1;j++) {
//         dp[j]= new Array(nums2.length+1);
//     }

// // fill first row and first col =0

//     for(let i=0;i<nums1.length+1;i++) {
//         dp[i][0] = 0;
//     }
//     for(let j=0; j< nums2.length+1;j++) {
//         dp[0][j] = 0;
    // }
    const m = nums1.length;
    const n = nums2.length;


    const dp = Array.from({ length: m + 1 }, () =>
        Array(n + 1).fill(0)
    );

    dp
    
    let maxLength = 0;

    for(let i=1;i<nums1.length+1;i++) {
        for(let j=1; j< nums2.length+1; j++) {
            if(nums1[i-1] == nums2[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1];
                maxLength = Math.max(maxLength, dp[i][j]);
            } else {
                dp[i][j] = 0;
            }
        }
    }
    return maxLength;
};

let nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7];
// nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]

r = findLength(nums1, nums2);
r