/**
 * @param {string} s
 * @return {number}
 */
 var countBinarySubstrings = function(s) {
    let groups=[];
    let groupCounter=0;
    groups[0]=1;

    for(let index=1;index<s.length;index++){
        if(s.charAt(index)===s.charAt(index-1)){
            groups[groupCounter]+=1;
        }else{
            groupCounter+=1
            groups[groupCounter]=1;
        }
    }

    var count=0;
    for(let x=1;x<=groupCounter;x++){
        count+=(Math.min(groups[x],groups[x-1]))
    }
    return count;
};
console.log(countBinarySubstrings("01010101011"))