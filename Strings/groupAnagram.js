/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    
    if(strs.length===0) return [[]];
    
    let wordMap= new Map();
    for(word of strs){
       
        let letters=Array(26).fill(0)
        for(letter of word){
            letters[letter.charCodeAt(0)-97]+=1;   
        }
        key=""
        for(let x=0;x<26;x++){
            key+="#"
            if(letters[x]){
                key+=`${letters[x]}`
            }else{
                key+="0"
            }
        }
        
        if(!wordMap.has(key)){
           wordMap.set(key,[word]);
        }else{
            arr=wordMap.get(key)
            arr.push(word)
            wordMap.set(key,arr);
        }
    }


   return Array.from(wordMap.values());
};