/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
        var lastNonZeroFoundAt = 0;
        // If the current element is not 0, then we need to
        // append it just in front of last non 0 element we found. 
        for (let i = 0; i < nums.length; i++) {
            
            if (nums[i] != 0) {
                nums[lastNonZeroFoundAt++] = nums[i];
         
                // console.log(nums)
                
            }
          
        }
         // After we have finished processing new elements,
         // all the non-zero elements are already at beginning of array.
         // We just need to fill remaining array with 0's.
        for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
            nums[i] = 0;
        }
    

        console.log(nums)

};


moveZeroes([1,0,2,0,3]);