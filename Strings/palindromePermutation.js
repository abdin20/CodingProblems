//given a string check to see if it is a permutation of a palindrome
var palindromePermutations = function (s) {

    //check for length 0 edge case
    if (s.length === 0) return true;

    //get rid of spaces
    s = s.replace(/\s+/g, '');

    //set everything to lower case
    s = s.toLowerCase();

    //flag for seeing odd amount of characters
    var notSeenOdd = true;

    var charMap = new Map();


    //loop thru every letter
    for (let i = 0; i < s.length; i++) {

        if (s.charAt(i) !== " ") {


            //add count to hashmap
            if (!charMap.has(s.charAt(i))) {
                charMap.set(s.charAt(i), 1);
            } else {
                charMap.set(s.charAt(i), charMap.get(s.charAt(i)) + 1);
            }
        }
    }

    //go thru every count
    for (count of charMap.values()) {

        //check for odd amount of characters
        if (count%2 !=0 && notSeenOdd) {
            notSeenOdd = false;

            //can at most have 1 character that is odd 
        } else if (count%2 !=0 && !notSeenOdd) {
            return false;
        }

    }
    return true;

}

console.log(palindromePermutations("racecar"))