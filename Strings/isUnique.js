//given a string determine if every character is unique
//bonus dont use any other data structure?
//O(n) time since we go thru each letter at most once
var isUnique = function (s) {

    //loop thru each letter
    for (let i = 0; i < s.length; i++) {
        var currLetter= s.charAt(i);
        //substring out the letter we are on
        var trimmedString = s.substring(i+1);
        
        //check to see if letter is seen anywhere else in string
        if(trimmedString.indexOf(currLetter)>-1){
            return false;
        }

    }

    return true;

}

console.log(isUnique("abcda"))


//another solution is to have a hashmap to keep track of used characters