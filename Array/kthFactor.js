/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var kthFactor = function(n, k) {
    
    var factors=[]
    var squareRoot=Math.floor(Math.sqrt(n))

    //go thru each factor from `1 to root(n)
    for(let x=1;x<=squareRoot;x++){
        
        if(n%x===0){
            factors.push(x);   
            //decrement k everytime we add independent divisor
            k--;
        }
        //if k=0 we reached kth highest divisor
        if(k===0){
            return x;
        }
    
    }
    
    //if perfect square need to increase k to 
    if((squareRoot*squareRoot)===n)  k++;

    if(k<=factors.length){
        return n/factors[factors.length-k];
    }
     return -1
};

    //7th highest factor of 64

    //go all the way to 8, k=3 since we subtracted 4 times.
    //new divisor is n divided by factors[length-k], since we look at the pairs of divisors now
   // [1,2,4,8]
   // [8,16,32,64]