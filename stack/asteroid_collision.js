// Asteroid Collision


// For each asteroid, the absolute value represents its size, 
// and the sign represents its direction (positive meaning right, negative meaning left).
//  Each asteroid moves at the same speed.

// Input: 

var asteroidCollision = function(asteroids) {
    let stack = [];
    for(let i in asteroids) {
        let a = asteroids[i];
        a
        stack
        while(stack.length>=1 && stack[stack.length-1] >0 && a <0) {
            a

            let diff = stack[stack.length-1] - Math.abs(a);
            diff
            if(diff < 0) {
                stack.pop();
            } else if(diff >0) {
                a=0;
            } else {
                a=0;
                stack.pop();
            }
        }    
        if(a!=0) {
            stack.push(a);
        }
    }
    return stack;
};
let asteroids = [2,4,-4,-1];
 asteroids = [5,-5];
//  asteroids = [7,-3,9];
//  asteroids= [3,5,-6,2,-1,4];
//  asteroids = [-1,4]
// asteroids = [8,-8]
// asteroids = [-2,-1,1,2]
// asteroids = [-2,-2,1,-2]
res = asteroidCollision(asteroids);
res

// Output: [2]
