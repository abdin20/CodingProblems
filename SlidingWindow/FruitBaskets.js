/**
 * https://leetcode.com/problems/fruit-into-baskets/
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function(fruits) {
    var fruitFreq={};

    var maxLength=-1;

    var left=0
    for (let right=0;right<fruits.length;right++){

        if(!(fruits[right] in fruitFreq)){
            fruitFreq[fruits[right]]=1;
        }else{
            fruitFreq[fruits[right]]+=1;
        }

        while(Object.keys(fruitFreq).length>2){
             fruitFreq[fruits[left]]-=1;

            if( fruitFreq[fruits[left]]===0){
                delete fruitFreq[fruits[left]]
            }
            left++;
        }

        maxLength=Math.max(maxLength,right-left+1)

    }
    return maxLength
};