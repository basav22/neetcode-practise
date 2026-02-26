
function findTargetSumWays(nums, target) {
    return dfs(nums,0, 0,target);
}

function dfs(nums, index, curSum, target) {
    // n = nums.length?
    // n
    if(index >= nums.length) {
        index
        curSum
        if(curSum == target) return 1;
        else return 0;
    }
    // index
    // curSum
    let res = 0;
    
    let num = nums[index], i = index;
    
    // for the remaining
    // for(let i = index; i<nums.length;i++) {
        let positive = dfs(nums, i+1,curSum+num, target);
        // positive
        let negative = dfs(nums, i+1, curSum-num, target)
        // negative
        
        res += (positive+negative);
    // }

    return res;
}

nums = [2,2,2,], target = 2;
res = findTargetSumWays(nums, target)
res

function heightBTree(root) {
    return 1 + max(heightBTree(root.left), heightBTree(root.right)) ;
}