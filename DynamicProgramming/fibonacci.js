/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    let dpArray=[0,1]
    
    for(let x=2;x<=n;x++){
        dpArray[x]=dpArray[x-1]+ dpArray[x-2]
    }
    
    return dpArray[n]
    
};