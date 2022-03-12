/**
 * @param {number[]} nums
 * @return {number}
 */
 var subArrayRanges = function(nums) {
    
    var sum=0;
    
    for(let i=0;i<nums.length;i++){
       let small=nums[i]
        let big=nums[i];
        
        for(let j=i+1; j<nums.length;j++){
            small=Math.min(small,nums[j])
            big=Math.max(big,nums[j]);
            
            sum+=big-small;
        }
    }
    
    return sum
    
};