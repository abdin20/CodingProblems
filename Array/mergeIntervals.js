/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if(intervals.length===1) return intervals;
    
   intervals.sort((a,b) =>{return a[0]-b[0]});
    
    var merged=[];

    merged.push(intervals[0])
    
    for(let i=1; i<intervals.length;i++){
        
        //check if start of this interval is greater than ending of previous interval
        //add it to interval list if so
        if(merged[merged.length-1][1]<intervals[i][0]){
            merged.push(intervals[i]);
        }else{
            //otherwise the ending of the last interval is the max of the two
            merged[merged.length-1][1]= Math.max( merged[merged.length-1][1], intervals[i][1] )
        }
    }
    
    return merged
    
};