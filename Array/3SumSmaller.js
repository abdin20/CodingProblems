/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumSmaller = function(nums, target) {
    nums.sort((a,b)=>{return a-b})
    
    const twoSums=function(nums,start,target){
        
        let sum=0;
        let rightPointer=nums.length-1
        while(start<rightPointer){
            
            if( (nums[start] + nums[rightPointer]) < target){
                sum+= (rightPointer-start);
                start=start+1;
            }else{
                rightPointer=rightPointer-1;
            }
            
        }
        return sum
        
    }
    
    let sums=0;
    for (let i = 0; i <(nums.length) - 2; i++) {
      let result = twoSums(nums, i + 1,target - nums[i]);
      sums += result;
    }
    return sums

};