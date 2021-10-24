/**
 * @param {number} x
 * @return {number}
 */
//reverse an integer given, if higher than max 32 bit integer return 0
var reverse = function(x) {
    
    var rev = 0;
    while (x != 0) {
        var pop = x % 10; //get right most digit
        x /= 10; //delete right most digit

            //check if we reach max value by multiplying to 10 or if we are one multiple of 10 away
            // only if the pop is 8 or greater we reach greater than max
        if (rev > Integer.MAX_VALUE/10 || (rev == Integer.MAX_VALUE / 10 && pop > 7)) return 0;

            //check if we will reach min value 
        if (rev < Integer.MIN_VALUE/10 || (rev == Integer.MIN_VALUE / 10 && pop < -8)) return 0;
        rev = rev * 10 + pop; //add pop while multiplying by 10
    }
    return rev;
}

console.log(reverse(115))