/**
 * @param {string} s
 * @return {number}
 */


var solutionFirstUniqChar = function(s){
    
    //make map of characters and their frequency
    var map= new Map();
    
    for(let m=0;m<s.length;m++){

        if(map.has(s.charAt(m))){
            map.set(s.charAt(m),map.get(s.charAt(m))+1)
        }else{
            map.set(s.charAt(m),1);
        }
    }

    //go thru word again until frequency is 1
    for(let m=0;m<s.length;m++){

        if(map.get(s.charAt(m))===1){
            return m;
        }
    }
    return -1;
}


var firstUniqChar = function (s) {

    if (s.length === 1) {
        return 0;
    }

    //loop thru string
    for (let m = 0; m < s.length; m++) {

        //edge check only right of first letter
        if (m === 0) {
            if ((s.substring(m + 1).indexOf(s.charAt(m)) < 0)){
                return m;
            }

            //edge check only left of last letter
        } else if (m === s.length - 1) {

            if(s.substring(0,m).indexOf(s.charAt(m)) < 0 ){
                return m
            }

            //else check both sides of letter
        } else {
            if ((s.substring(m + 1).indexOf(s.charAt(m)) < 0) && (s.substring(0, m).indexOf(s.charAt(m)) < 0)) {
                return m;
            }
        }



    }
    return -1;
};

console.log(solutionFirstUniqChar("1122343456"))