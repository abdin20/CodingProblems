/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//given two sorted arrays find median.
 var findMedianSortedArrays = function(nums1, nums2) {
    
    let mergedArr=[]



    while(nums1.length>0 && nums2.length>0){

        if(nums1[0]<nums2[0]){
            mergedArr.push(nums1[0])
            nums1.shift();
        }else if(nums1[0]>nums2[0]){
            mergedArr.push(nums2[0])
            nums2.shift();
        }else{
            mergedArr.push(nums1[0])
            mergedArr.push(nums1[0])
            nums1.shift();
            nums2.shift();
        }
    }

   

    if(0===nums1.length && 0!==nums2.length){
        mergedArr=mergedArr.concat(nums2);
    }else if(0===nums2.length && 0!==nums1.length){
        mergedArr=mergedArr.concat(nums1);
    }

    console.log(mergedArr)

    if(mergedArr.length%2!==0){

        return mergedArr[Math.floor(mergedArr.length/2)]
    }else{
        var midPoint=Math.floor(mergedArr.length/2)
        return (mergedArr[midPoint]+mergedArr[midPoint-1])/2
    }
};

console.log(findMedianSortedArrays([1,3],[2,4]))