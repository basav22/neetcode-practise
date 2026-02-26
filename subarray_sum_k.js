// subarray sum=k


var subarraySum = function(nums, k) {

    prefixSum = Array(nums.length).fill(0);

    for(let i=0; i<nums.length; i++) {
        if(i == 0) prefixSum[i] = nums[i];
        else {
            prefixSum[i] = prefixSum[i-1] + nums[i];
        }
    }
    prefixSum

    // make memo
    let memo = new Map();
    memo.set(0,1);

    cnt=0;
    // iterate prefixsum
    for(let num of prefixSum) {
num
        // lookup
        if(memo.has(num - k)){
            cnt+=memo.get(num-k);
            // memo.set(num,1+memo.get(num-k));

        } 
        // else {
            memo.set(num, (memo.get(num) || 0) + 1);

            // memo.set(num,1);
        // }
    }
    cnt
    return cnt;
}

c=subarraySum([1,-1,0], 0);
c