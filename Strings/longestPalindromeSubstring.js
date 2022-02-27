/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function (s) {
    if(s.length===0) return "";
      var dpArray= [];
  
      //default case of 1 length
      var startIndex=0;
      var length=1;
  
      //create 2d array
      for(let m=0;m<s.length;m++){
          dpArray.push(new Array(s.length))
      }
  
      //palindromes of 1 length are true
      for(let m=0;m<s.length;m++){
          dpArray[m][m]=true;
  
  
      }
  
  
      //palindrome of 2 length
      for(let m=0;m<s.length-1;m++){
          if(s.charAt(m)===s.charAt(m+1)){
              dpArray[m][m+1]=true;
              startIndex=m;
              length=2;
          }
      }
  
      
      //loop thru all lengths of 3 or more
      //start at 2 cuz we adding 2 to the starting index so its 3
      for(let k=2;k<s.length;k++){
  
          //rotate thru starting positions
          for(let i=0;i<s.length-k;i++){
              
              //ending position based on current length loop
              endingPosition=i+k
  
              //check if the substring before is palindrome
              //check if first and last char are matching
              if(dpArray[i+1][endingPosition-1] && s.charAt(i)===s.charAt(endingPosition)){
                  dpArray[i][endingPosition]=true;
  
                  //k+1 is length of string including starting spot
                  if(k+1>length){
                      startIndex=i;
                      length=k+1
                  }
              }
  
          }
  
      }
      return s.substring(startIndex,startIndex+length)
  }
  
  