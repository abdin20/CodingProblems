/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    
    if(numRows===1) return s
    var rows=[]
    for(let x=0;x<numRows;x++){
        rows.push([])
    }

    counter=0;
    increment=1;
    for(letter of s){
        console.log(counter)
      rows[counter].push(letter)
        counter+=increment
        
        if(counter==numRows-1 || counter===0){
            increment*=-1
        }
    }
    var stringBuilder=""
    for(row of rows){
        console.log(row)
        stringBuilder+=row.join("")
    }
    return stringBuilder
};