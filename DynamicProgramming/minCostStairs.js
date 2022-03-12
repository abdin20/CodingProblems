/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    let dp=new Array(n+1)
    dp[0]=0;
    dp[1]=0;

    for(let i=2;i<dp.length;i++){

        //min total cost to reach curr step is
        //minimum of total cost to get to last step plus its cost and total cost of last last step plus its cost
        dp[i]=Math.min(dp[i-1] + cost[i-1],dp[i-2] + cost[i-2])
    }

    return dp[n]

};