//given a string, perform basic compression by writing only the letter and number of times repeated
//aaabbbaaa would be a3b3a3
//if compressed string isnt shorter return original string


var stringCompression= function(s){

    var stringBuilder="";

    //loop thru string
    var count=1;
    for(let i =0;i<s.length;i++){
        //if next char is same dont print yet but keep count
        if((i+1<s.length) && s.charAt(i)===s.charAt(i+1)){
            count++;
        }else{
            //if next char isnt same, print char and running count
            //also reset count
            stringBuilder+=s.charAt(i)+count;
            count=1;
        }
    }  

    //check to see if string is larger than original
    if(stringBuilder.length>s.length) return s;

    return stringBuilder;

}

console.log(stringCompression("aaabbbccc"))