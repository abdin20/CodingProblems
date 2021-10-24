/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    var wordMap = new Map();
    var checkWordMap = new Map();

    //case for different lengths 
    if (s.length !== t.length) {
        return false
    }

    //loop through original word
    for (let x = 0; x < s.length; x++) {

        if (wordMap.has(s.charAt(x))) {
            wordMap.set(s.charAt(x), wordMap.get(s.charAt(x)) + 1);
        } else {
            wordMap.set(s.charAt(x), 1);
        }



    }


    //loop through original word
    for (let x = 0; x < t.length; x++) {

        if (checkWordMap.has(t.charAt(x))) {
            checkWordMap.set(t.charAt(x), checkWordMap.get(t.charAt(x)) + 1);
        } else {
            checkWordMap.set(t.charAt(x), 1);
        }


    }


    //loop through original word
    for (let x = 0; x < t.length; x++) {

        if (wordMap.get(t.charAt(x)) !== checkWordMap.get(t.charAt(x))) {
            return false;
        }

    }
    return true;
};

var optimizedIsAnagram = function (s, t) {
    var wordMap = new Map();

    //case for different lengths 
    if (s.length !== t.length) {
        return false
    }

    //loop through original word
    for (let x = 0; x < s.length; x++) {

        //increase letter count everytime seen in s
        if (wordMap.has(s.charAt(x))) {
            wordMap.set(s.charAt(x), wordMap.get(s.charAt(x)) + 1);
        } else {
            wordMap.set(s.charAt(x), 1);
        }

        //subtract letter count everytime seen in t
        if (wordMap.has(t.charAt(x))) {
            wordMap.set(t.charAt(x), wordMap.get(t.charAt(x)) - 1);
        } else {
            wordMap.set(t.charAt(x), -1);
        }
    }

    //iterate through hashmap
    for (let value of wordMap.values()){
        if (value !== 0) {
            return false
        }
    }


    //loop through map
    return true



}

optimizedIsAnagram("rac", "123")