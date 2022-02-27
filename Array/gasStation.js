/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
    
    let totalTank=0;
    let currentTank=0;
    let startingStation=0
    
    //total gas- total cost must =0
    
    //go thru each station once, to see which one is possible to start at
    //check if currentStation is possible to start at if not we increment starting station
    for(let x=0;x<gas.length;x++){
        
        totalTank+=gas[x]-cost[x];
        currentTank+=gas[x]-cost[x]
        
        if(currentTank<0){
            currentTank=0;
            startingStation=x+1;
        }
           
    }
    
    if(totalTank>=0){
        return startingStation
    }else{
        return -1
    }
    
};