// KADANE ALGO
// MAX SUBARRAY SUM

var maxSubArray = function(nums) {
    curSum=nums[0];
    maxSum = nums[0];

    for(let i=1; i<nums.length; i++) {
        curSum = Math.max(nums[i], curSum+nums[i]);
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
}

// Print the subarray
var printMaxSubArray = function(nums) {
    curSum=nums[0];
    maxSum = nums[0];

    start=0, end=0;
    tempStart=0;

    for(let i=1; i<nums.length; i++) {
        // curSum
        if(nums[i] > curSum + nums[i]) {
            i // switch
            tempStart = i;
        }
        curSum = Math.max(nums[i], curSum+nums[i]);

        if(curSum > maxSum) {
            start = tempStart;
            end = i;
        }
        maxSum = Math.max(maxSum, curSum);
    }
    return {maxSum, start, end};
}

var maxSubarraySumCircular = function(nums) {
    let sum = nums[0];
    let curSum = nums[0], maxSum = nums[0];
    let curMinSum = nums[0], minSum = nums[0];

    for(let i=1; i< nums.length; i++) {
        // calculate max kadane
        curSum = Math.max(nums[i], nums[i]+curSum);
        maxSum = Math.max(maxSum, curSum);

        // calculate min kadane
        curMinSum = Math.min(nums[i], nums[i] + curMinSum);
        minSum = Math.min(minSum, curMinSum);

        // calculate array sum
        sum += nums[i];
    }
    sum
    minSum
    maxSum
    if(maxSum < 0) {
        return maxSum;
    }
    let circularMaxSum = sum - minSum;
    return Math.max(maxSum, circularMaxSum);
};






var maxProductSubArray = function(nums) {
    curProduct=nums[0];
    maxProduct = nums[0];
    minProduct = nums[0];

    for(let i=1; i<nums.length; i++) {
        tempProduct = curProduct*nums[i];
        curProduct = Math.max(nums[i], curProduct*nums[i], minProduct * nums[i]);
        curProduct
        minProduct = Math.min(nums[i], minProduct*nums[i], tempProduct);
        minProduct

        maxProduct = Math.max(maxProduct, curProduct);
    }
    return maxProduct;
}

a=maxProductSubArray( [2,3,-2,-1]);
a




c= maxSubarraySumCircular([1,-6,-7,4]);
c



a=maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
a

b=printMaxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
b
