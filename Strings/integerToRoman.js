/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    
    place=0
    romanString=""
    romanValues=["I","V","X","L","C","D","M"]
    while(num>=1){
        digit=num%10;
        console.log("Number" +num)
        num=Math.floor(num/10);
        nextDigit=""
        
        if(digit<4){
            for(x=0;x<digit;x++){
                nextDigit+=romanValues[place]
            }
        }else if (digit===4){
            nextDigit+=`${romanValues[place]}${romanValues[place+1]}`
        }else if(digit>=5 && digit<9){
            nextDigit+=romanValues[place+1]
            for(let x=0;x<digit-5;x++){
                console.log(x)
                nextDigit+=romanValues[place]
            }
        }else if(digit===9){
            nextDigit+=`${romanValues[place]}${romanValues[place+2]}`
        }
        romanString=`${nextDigit}${romanString}`
        place+=2;   
        }
        return romanString
    }

    console.log(intToRoman(1994))