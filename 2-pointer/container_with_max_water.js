

// Container with most water 
var maxArea = function(heights) {
    let l = 0, r = heights.length-1;

    let max = 0;
    while(l<r) {
        // calc area
        max = Math.max((r-l) * Math.min(heights[l], heights[r]), max);
        if(heights[l] < heights[r]) {
            l++;
        } else {
            r--;
        }
    }
    return max;

};

let heights = [1,8,6,2,5,4,8,3,7]
heights = [1,1]
m = maxArea(heights);
m
