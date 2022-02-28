/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    let dp=new Array(n+1)
    dp.fill(0)
    
    dp[0]=0
    dp[1]=1
    dp[2]=2


    for (let x=3;x<=n;x++){
        dp[x]=dp[x-1]+dp[x-2]
    }

    return dp[n]
};

console.log(climbStairs(22))