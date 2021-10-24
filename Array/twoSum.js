/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map1=new Map();
    //loop thru array of nums
    for(let k=0;k<nums.length;k++){

        var neededNumber= target-nums[k]
        if(map1.has(neededNumber)){

            return [k,map1.get(neededNumber)];

        }else{
            map1.set(nums[k],k);
        }

    }
    return [];
};

console.log(twoSum([2,7,11,15],9))