/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {

    var digitLogs = []
    var letterLogs = []
    for (log of logs) {
        if (!isNaN(log.split(" ")[1])) {
            digitLogs.push(log)
        } else {
            letterLogs.push(log)
        }
    }

    //sort the letterlogs separately
    letterLogs.sort((a, b) => {
        aContent = a.split(" ");
        aIdentifier = aContent.shift();

        bContent = b.split(" ");
        bIdentifier = bContent.shift();
        
        //check for equal content
        if(aContent.join("")===bContent.join("")){
            return aIdentifier>bIdentifier ? 1:-1;
        }else{
            return aContent>bContent? 1:-1;
        }

    })
    return letterLogs.concat(digitLogs)

};

console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art zero can","dig2 3 6","let2 own kit dig","let3 art zero"]))
// console.log(reorderLogFiles(["j mo", "5 m w", "g 07", "o 2 0", "t q h"]))
// console.log(reorderLogFiles(["zoey i love you", "lucas i love you", "rong i love you"]))
// console.log(reorderLogFiles("dig1 8 1 5 1"))