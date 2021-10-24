/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase();

    var left = 0;
    var right = s.length - 1;

    //keep looping until pointers are out of bounds
    while (left < right) {

        //check to see if left pointer is at a valid character
        if (!(s.charCodeAt(left) >= 48 && s.charCodeAt(left) <= 57) || !(s.charCodeAt(left) >= 97 && s.charCodeAt(left) <= 122)) {
            left++;
            //check to see if right pointer is at valid character
        } else if (!(s.charCodeAt(right) >= 48 && s.charCodeAt(right) <= 57) || !(s.charCodeAt(left) >= 97 && s.charCodeAt(right) <= 122)) {
            right--;
        } else {
            //if both are at valid characters then check if they are equal
            if (s.charCodeAt(left) !== s.charCodeAt(right)) {
                return false;
            }
        }

    }
    return true

};

console.log(isPalindrome("r ! !#$@#$@ a  r"))