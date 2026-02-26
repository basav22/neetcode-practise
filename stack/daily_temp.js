
// Daily Temperatures
// Input: temperatures = [30,38,30,36,35,40,28]

// Output: [1,4,1,2,1,0,0]

// use stack to keep monotonic decreasing order

temperatures = [30,38,30,36,35,40,28];

r = dailyTemperatures(temperatures);
r


function dailyTemperatures(temperatures) {
    let len = temperatures.length;
    let stack = [];

    // let memo = new Map();
    

    let result = Array(temperatures.length).fill(0);
    for(let i=0; i< temperatures.length; i++) {
        let temp = temperatures[i];
        
        while(stack.length > 0 && temp > stack[stack.length -1].get('temp')) {
            // let map = stack.pop();
            let popi = stack.pop().get('index');
            result[popi] = i - popi;
        }
        // push current 
        stack.push(new Map([['temp', temp,] ,['index', i]]));
    }
    return result;
}


