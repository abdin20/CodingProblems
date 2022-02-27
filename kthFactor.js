/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var kthFactor = function(n, k) {
    
    var factorCount=0;
    for(let x=1;x<=n;x++){
        
        if(n%x===0){
            console.log(x)
            factorCount++;
        }
        if(factorCount===k){
            return x
        }
    }
    
    return -1
};
//NOT OPTIMIZED?
console.log(kthFactor(7,2))