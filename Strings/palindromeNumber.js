/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let runningTotal=0;
    let digits=[]
    if(x<0){
        return false
    }
    while(x>0){
        digits.push(x%10);
        x=Math.floor(x/10)
    }
    let i=0;
    let j =digits.length-1
    while(i<digits.length && j>-1){

        console.log(`i: ${i}, j ${j}`)
        if(digits[i]!==digits[j]){
            return false;
        }
        i++;
        j--;
    }
    console.log(digits)
    return true;
};