/**
 * @param {number[]} time
 * @return {number}
 */
 var numPairsDivisibleBy60 = function(time) {
    
    let remainders = new Array(60);
    remainders.fill(0)
    let count = 0;

    for (let t of time) {
        if (t % 60 === 0) { // check if a%60==0 && b%60==0
            count += remainders[0];
        } else { // if not perfectly div
            count += remainders[60 - t % 60];
        }
        remainders[t % 60]++; // remember to update the remainders
    }
    return count;

};