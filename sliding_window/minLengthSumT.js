
function minSubArrayLen(T, nums) {
    let left =0, right=0;
    let sum=0, minL = Infinity;
    while(right < nums.length) {
        sum += nums[right];
        while(sum >= T) {
            minL = Math.min(minL, right-left+1);
            sum -= nums[left];
            left+=1;
        }

        right += 1;
    }
    return minL == Infinity ? 0 : minL;
}

let nums = [2,1,5,1,5,3], T = 10;
nums = [];
let l = minSubArrayLen( T, nums);
l