/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
  var dpArray=[0,1,1]
  
  for(let x=3;x<=n;x++){

    dpArray[x]=dpArray[x-3] + dpArray[x-2] + dpArray[x-1]

  }

  return dpArray[n]

};