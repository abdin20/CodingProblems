/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    
    if(nums.length===0) return 0
    //dp[i] represents max profit with i amount of houses left
    let dp=new Array(nums.length+1)
   
    //with no houses left max profit is 0
    dp[nums.length]=0
    dp[nums.length-1]=nums[nums.length-1]
    
    for(let x=nums.length-2;x>=0;x--){
        dp[x]=Math.max(dp[x+1],dp[x+2]+nums[x])
    }
    
    return dp[0]
};

console.log(rob([2,1,1,2]))