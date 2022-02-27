/**
 * @param {string} s
 * @return {number}
 */
 var minFlipsMonoIncr = function(s) {
    
    var one = 0;
    var flip =0;
    for(var i=0;i<s.length;i++)
    {
        if(s.charAt(i)=='1'){
            one++;
        }else{
            flip++;
        }
        flip = Math.min(one,flip);
    }
    return flip;
}
    