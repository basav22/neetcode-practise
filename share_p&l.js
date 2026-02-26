// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


var maxProfit = function(prices) { //[7,6,5,4,8,10,11]
    var less=10000, max=0, profits=0;
    // find decreasing sequence 
    for(i=0; i<prices.length; i++) {
        if(prices[i] < less) {
            less=prices[i];
            continue;
        }
        // price start rising; calculate profits
        profits = Math.max(profits,prices[i] - less);

    }


    return profits; //max of profits array
};

res = maxProfit([7,2,5,1,6,4]);
res