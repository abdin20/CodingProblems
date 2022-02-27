/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b)=>{
        return b[1]- a[1]
    })
    units=0;
    while(truckSize>0 && boxTypes.length>0){
        box=boxTypes.shift();

        if(box[0]<=truckSize){
            truckSize=truckSize-box[0]
            units+=box[0]*box[1]
        }else{
            units+=truckSize*box[1]
            truckSize=0;
    
        }  
    }
    return units
};

console.log(maximumUnits([[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]]
    ,35
    ))