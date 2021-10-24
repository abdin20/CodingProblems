/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase();

    var left=0;
    var right=s.length-1;

    while(left<right){
        console.log(`LEFT: ${s.charCodeAt(left)}`)
        if( !(s.charCodeAt(left)>=48 && s.charCodeAt(left)<=57 ) || !(s.charCodeAt(left)>=97 && s.charCodeAt(left)<=122) ){
            console.log(`IN LEFT: ${s.charCodeAt(left)}`)
            left++;
        }

        if( !(s.charCodeAt(right)>=48 && s.charCodeAt(right)<=57 ) || !(s.charCodeAt(left)>=97 && s.charCodeAt(right)<=122) ){
            console.log(`RIGHT: ${s.charCodeAt(right)}`)
            right--;
        }

        
        if(s.charCodeAt(left)!==s.charCodeAt(right)){
            console.log("NOT")
            return false;
        }

    }
    console.log(s.toLowerCase())
    return true
    
    
};

isPalindrome("r ! !#$@#$@ a  r")