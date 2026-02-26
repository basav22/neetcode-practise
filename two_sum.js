

// Two sum
// nums = [2,7,11,15], target = 9
// Output: [0,1]
var twoSum = function(nums, target) {
    var hashTable = {};
    for(index in nums) {
        var curNum = nums[index];

        var remainingSum = target - curNum;
        if(hashTable[remainingSum] != null) {
            return [Number(hashTable[remainingSum]), Number(index)];
        }

        hashTable[curNum] = index;
    }

};

res = twoSum([0,4,3,0], 0);
res


