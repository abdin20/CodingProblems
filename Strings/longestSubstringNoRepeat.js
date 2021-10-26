/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    var max = 0;
    var pointer = 0;

    for (let k = 0; k < s.length; k++) {
        var seenCharacters = new Map();

        //find the longest substring starting at each letter
        pointer = k;
        //go thru string with pointer until longest substring found
        while (pointer < s.length) {

            console.log(`K: ${k} POINTER: ${pointer}`)

            //add to hashmap if character hasnt been seen before
            if (!seenCharacters.has(s.charAt(pointer))) {
                seenCharacters.set(s.charAt(pointer), true);

                pointer++; //increment pointer

            } else {
               break;

            }
        }
        //check for new max
        if ((pointer - k) >= max) {
            max = pointer - k;
        }
    }

    return max;

};



var optimalLongestSubstring = function (s) {

    //two pointers with sliding window
    var aPointer=0;
    var bPointer=0;
    var max=0;

    //create hashmap to keep track of seen characters
    seenCharacters= new Map();
    while(bPointer<s.length){
        
        //go thru until find repeat character
        if(!seenCharacters.has(s.charAt(bPointer))){
            seenCharacters.set(s.charAt(bPointer));
            bPointer++;
            max= Math.max(seenCharacters.size,max); //current max is size of unique characters in hashmap
        }else{

            //once a repeat is found remove the first letter and move to next
           seenCharacters.delete(s.charAt(aPointer));
           aPointer++;
        }

    }

    return max;
}


console.log(optimalLongestSubstring("abcbad312"))