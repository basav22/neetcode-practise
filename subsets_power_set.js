// Given an integer array nums of unique elements, 
// return all possible subsets (the power set).

 // The solution set must not contain duplicate subsets. Return the solution in any order.


//  Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

subSets([1,2,3]);
function subSets(nums) {
    result = []
    nums
    subSetsHelper(nums, 0, [], result);
    console.log(result);
}

function subSetsHelper(nums, index, currentRes, result) {

    // base case
    if(index == nums.length) {

        currentRes
        
        result
        result.push([...currentRes]);

        result
        // finalRes
        return;
        //  finalRes;
    }

    currentRes.push(nums[index]);
    subSetsHelper(nums, index+1, currentRes, result);

    // currentRes
    currentRes.splice(currentRes.length-1,1);
    // currentRes

    subSetsHelper(nums, index+1, currentRes, result);

    // return res;

}

var arr = [1,3];
b = [];
b.push(4)
arr.push([...b]);
arr
b.pop();

arr