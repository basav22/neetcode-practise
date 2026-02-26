// [0,1,0,3,12]
// [1,0,0,3,12]
// [1,0,0,3,12]
// [1,3,0,0,12]
// [1,3,12,0,0]
var moveZeroes = function(nums) {
    var start=0;
    for(i=1;i<nums.length;i++) {
        var cur = nums[i];
        startVal=nums[start];
        startVal
        if(startVal ==0) {
            //swap 2 nums; startVal, cur
            temp = startVal;
            nums[start] = cur;
            nums[i] = temp;
        }
        if(cur!=0 || startVal !=0) {
            start++;
        }
        nums

    }
    nums;
};

moveZeroes([1,0,1]);