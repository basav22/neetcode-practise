
// Next Greater Element I
let nums1 = [4,1,2], nums2 = [1,3,4,2]
nums1 = [1,3,5,2,4], nums2 = [6,5,4,3,2,1,7]
// [4,3,2,1]




var nextGreaterElement = function(nums1, nums2) {
    // let num1 = nums1[0];
    let stack = [];
    let memo = new Map();
    for(let num2 of nums2) {
        num2
        while(stack.length > 0 && stack[stack.length-1] < num2) {
            memo.set(stack.pop(), num2);
        }
        // push current
        stack.push(num2);
    }
memo
    let res = [];
    // iterate first array and lookup memo map
    for(let num1 of nums1) {
        res.push(memo.has(num1) ? memo.get(num1) : -1);
    }
    return res;
};

a =nextGreaterElement(nums1, nums2);
a
