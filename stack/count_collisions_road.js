// 

// Count Collisions on a Road
// 
var countCollisions = function(directions) {
    let stack = [];
    let count = 0;
    var collideCount = function(firstDirection, secondDirection) {
        let res = firstDirection + secondDirection;
        switch(res) {
            case 'RL': return 2;
            case 'RS': return 1;
            case 'SL': return 1;

            default: return 0;
        }
    }

    for(dir of directions) {
        dir
        // push current dir to stack
        stack.push(dir);

        while(stack.length >=2 && collideCount(stack[stack.length - 2], stack[stack.length-1]) > 0) {
            
            count += collideCount(stack[stack.length - 2], stack[stack.length-1]);
            // pop both
            stack.pop();
            stack.pop();
            stack.push('S');
        }

    }
    count
    return count;
};
directions = "LLRR";

countCollisions(directions);