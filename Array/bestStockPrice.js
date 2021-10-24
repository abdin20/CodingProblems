/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || prices.length===0){
        return 0; //case if no prices
    }
    var profit=0;
    //go thru each price
    for (let x=0;x<prices.length -1;x++){
        if (prices[x+1]>prices[x]){ //if price next day is higher we sell
            profit+=prices[x+1]- prices[x];
        }
    }
    return profit;
};