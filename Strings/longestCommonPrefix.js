/**
 * @param {string[]} strs
 * @return {string}
 */

 //given array of strings, find longest common prefix
var longestCommonPrefix = function(strs) {

    if(strs.length===1) return strs[0]

    if(strs.length===0) return "";

    //make the prefix the first word
    prefix = strs[0]

    //go thru every word after first
    for(let m=1;m<strs.length;m++){

        //keep shortening prefix until one is found 
        while(strs[m].indexOf(prefix)!=0){
            prefix=prefix.substring(0,prefix.length-1);

            //if prefix shortened to nothing means no prefix
            if(prefix.length==0) return "";
        }
    }

    return prefix
};

console.log(longestCommonPrefix(["dog","dracecar","dcar"]))
