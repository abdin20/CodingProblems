//replace all spaces with %20 in a string
//given string and true length of string

var URLify = function(s,length){

    var cleanString=""
    //loop thru every character
    for(let i=0;i<s.length;i++){

        //check for space, if exists add %20
        if(s.charAt(i)===" "){
            cleanString+="%20"
        }else{
            cleanString+=s.charAt(i)
        }
        
    }

    return cleanString
}

console.log(URLify("s 1",1))