/**
 * @param {number[]} data
 * @return {number}
 */

 var minSwaps = function(data) {
    let totalOnes=0
    let countOnes=0;
    let maxOnes=-1;
    data.forEach(a=>{totalOnes+=a});
    console.log(totalOnes)
    
    let left=0;
    let right=0;
    
    while(right<data.length){
        
        countOnes+=data[right]
        right++;
        
        if(right-left>totalOnes){
            countOnes-=data[left];
            left++;
        }
        
        maxOnes=Math.max(countOnes,maxOnes)
        
    }
    
    return totalOnes-maxOnes
};