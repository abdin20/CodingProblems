/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    
    let n =nums.length
    let dp=new Array(n+1)

    dp.fill(0)
    
    //robbed n houses means max profit is 0
    dp[n]=0;
    
    //robbed n-1 houses means we are at last house which max profit is itself
    dp[n-1]=nums[n-1]
    
    for(let i=n-2;i>-1;i--){
        //start at second last house
        //max profit at current house is max profit at next house, or max profit at next next house plus this one
        dp[i] = Math.max(dp[i+1], dp[i+2] +nums[i])
        
    }
    
    return dp[0]
};

console.log(rob([2,1,1,2]))