
function minSubArrayLen(T, nums) {
    let left =0, right=0;
    let sum=0, maxL = -Infinity;
    while(left <= right && right < nums.length) {
        while(right < nums.length && sum <= T) {
            maxL = Math.max(maxL, right-left+1);
            sum += nums[right];
            right += 1;
        }
        sum -= nums[left];
        left += 1;
    }
    return maxL == -Infinity ? 0 : maxL;
}

let nums = [2,1,5,1,5,3], T = 10;
nums = [];
let l = minSubArrayLen( T, nums);
l