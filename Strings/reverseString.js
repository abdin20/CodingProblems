/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var length =s.length

    //switch front and back n/2 times 
    for(let m=0;m< Math.floor(length/2);m++){
        var tmp = s[s.length-m-1];
        s[s.length-m-1]=s[m]
        s[m]=tmp;

    }
   
};

console.log(reverseString(["h","e","l","l","o"]))