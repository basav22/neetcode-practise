
// Contains Duplicate

var containsDuplicate = function(nums) {
    // keep numbers in map while iterating and lookup map if already seen. no sorting
    let memo = new Map();
    for(let num of nums) {
        if(memo.has(num)){
            return true;
        }
        // add to memo
        memo.set(num,1);
    }
    return false;


    nums.sort((a,b) => a-b);
    // check adjecent
let i=0;    
    for( i=1; i<nums.length;i++) {
        if(nums[i] == nums[i-1]) return true;
    }
    i
    return false;
};



nums = [1, 2, 3, 3]
nums = [1, 2, 3, 4]
res = containsDuplicate(nums);
res