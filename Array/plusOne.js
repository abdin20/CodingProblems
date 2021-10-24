/**
 * @param {number[]} digits
 * @return {number[]}
 */


var plusOne = function (digits) {

    var length = digits.length;

    //keep track of when to add
    // true at beginning for first addition
    var additionFlag = true;
    for (let k = length - 1; k > -1; k--) {


        if (additionFlag) {
            var sum = digits[k] + 1;
            digits[k] = sum;
            additionFlag = false;

            //if sum >9 need to add to next digit
            if (sum > 9 && k !== 0) {

                digits[k] = 0;
                additionFlag = true;

                //edge case if first digit is 9
            } else if (sum > 9 && k === 0) {
                digits[k] = 0;
                
                var newDigits = [1, ...digits];

                return newDigits;

            }
        }

    }
    return digits;

}




console.log(plusTwo([9, 9, 9]));