// Two Sum II - Input Array Is Sorted


var twoSum = function(numbers, target) {
    let i,j;
    for(i=0,j=numbers.length-1; i<j;) {
        let sum = numbers[i]+numbers[j]
        if(sum == target)
            break;
        else if(sum>target) {
            // move j to left
            j--;
        } else {
            // move i right
            i++;
        }
    }
    return [i+1, j+1];
};

let numbers = [2,7,11,15], target = 9;
numbers = [2,3,4], target = 6

numbers = [-1,0], target = -1

r = twoSum(numbers, target);
r