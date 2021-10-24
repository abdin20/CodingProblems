
//given 2 strings determine if 1 is permutation of another
var checkPermutation = function (s1, s2) {

    //check if same lengths first
    if (s1.length !== s2.length) return false;

    var charMap = new Map();

    //loop thru every character in both strings
    for (let i = 0; i < s1.length; i++) {

        //check first string to see if seen before, if not add it
        if (!charMap.has(s1.charAt(i))) {
            charMap.set(s1.charAt(i), 1);
        } else {
            //if seen before we add to the count
            charMap.set(s1.charAt(i), charMap.get(s1.charAt(i)) + 1);
        }

        //check second string to see if seen before, if not add it
        if (!charMap.has(s2.charAt(i))) {
            charMap.set(s2.charAt(i), -1);
        } else {
            //if seen before we subtract to the count
            charMap.set(s2.charAt(i), charMap.get(s2.charAt(i)) - 1);
        }


    }

    //check each value in hashmap for 0 count
    for(value of charMap.values()){
        if(value!==0){
            return false;
        }
    }
    return true;
}

console.log(checkPermutation("s1","22"))

//another solution would be to sort each string and check for identical strings afterwards since both would have to be the same