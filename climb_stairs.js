

//  Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


var climbStairs = function(n) {
    let count = 0;
    climbStairs1(n);
    function climbStairs1(n) {
        
        if( n == 0) {
            count++;
        }
        if(n>=2) {
         climbStairs1(n-1);
         climbStairs1(n-2);
        } else {
         climbStairs1(n-1);

        }
    };
    console.log(count);
    return (count);
};

a=climbStairs(2);




