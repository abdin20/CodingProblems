//3 types of edits, insert, add or remove a character
//given 2 strings check if they are 1 or less edits away from each other




var oneAway = function (s1, s2) {
        
    var editReplace=function(s1,s2){

        var differenceFlag=false;
        for(let i =0; i<s1.length;i++){
            
            //check for different letter
            if(s1.charAt(i)!==s2.charAt(i)){
                
                //can have at most 1 character different
                if(differenceFlag){
                    return false;
                }

                differenceFlag=true;
            }
        }

        return true;
    }


    var editInsert = function(s1,s2){

        var s1Index=0;
        var s2Index=0;
    
        while (s1Index< s1.length && s2Index<s2.length){
    
            if(s1.charAt(s1Index)!=s2.charAt(s2Index)){
                if(s1Index!=s2Index){
                    return false
                }
                s2Index++;
            }else{
                s1Index++;
                s2Index++;
            }
            
        }
    
        return true;
    
        }
    //3 cases

    //same length means we only consider replacing
    //other means we must insert or remove

    if(s1.length===s2.length){
        return editReplace(s1,s2)
    }else if ((s1.length+1)===s2.length){
        return editInsert(s1,s2);
    }else if((s1.length-1)===s2.length){
        return editInsert(s2,s1);
    }else{
        return false;
    }
    //case for same length strings


    //case for 2 different string lengths
    //s2 will be the bigger string




}

console.log(oneAway("pplee", "ple"))