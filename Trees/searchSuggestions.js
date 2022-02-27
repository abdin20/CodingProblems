/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */


 var suggestedProducts = function(products, searchWord) {
   
    class TrieNode {
    
        constructor(key) {
            this.key = key;
            this.children = {}
            this.parent=null
            this.isWord = false;
        }
    
        getWord(){
            let currNode=this
    
            let output=[]
            //go up list of parents
            while(currNode!=null){
                output.unshift(currNode.key);
                currNode=currNode.parent;
            }
            return output.join("")
        }
    
    }
    class Trie {
        constructor() {
            this.root = new TrieNode();
            this.resultBuffer=[]
        }
    
        insertWord(word) {
            let curr = this.root;
            //go thru each character
            for (let x = 0; x < word.length; x++) {
    
                //check if root has letter in children, uses char indexing in array
                if (!curr.children[word[x]]) {
                    //create child node in appropiate spot
                
                    curr.children[word[x]] = new TrieNode(word[x]);
                    //set parent
                    curr.children[word[x]].parent = curr;
                }
    
                //go to next node 
                curr = curr.children[word[x]];
              
                if(x===word.length-1) curr.isWord=true;
    
            }
     
    
        }
    
        getWordsWithPrefix(prefix) {
            let currNode = this.root;
            this.resultBuffer=[]
            //go thru each letter in prefix
            for (let i = 0; i < prefix.length; i++) {
                if (currNode.children[prefix[i]]) {
                    currNode = currNode.children[prefix[i]]
                } else {
                    return this.resultBuffer
                }
            }
            this.resultBuffer=[];
            this.dfsWithPrefix(currNode,prefix)
            
            return this.resultBuffer;
           
        }
    
        
        dfsWithPrefix(curr,word){
            let alphabet="abcdefghijklmnopqrstuvwxyz"
            if(this.resultBuffer.length===3) return;
    
            if(curr.isWord) this.resultBuffer.push(word)
            for(let x=0; x<26;x++){
                if(curr.children[alphabet.charAt(x)]){
                    this.dfsWithPrefix(curr.children[alphabet.charAt(x)], word +curr.children[alphabet.charAt(x)].key)
                }
                
            }
        }
    
    } 
            
      let trie = new Trie();   
      for(product of products){
          // console.log(product)
          trie.insertWord(product)
      }
        let output=[]
       for(let x=1; x<=searchWord.length;x++){ 
           console.log(searchWord.substring(0,x))
           output.push(trie.getWordsWithPrefix(searchWord.substring(0,x)))
       } 
      return output;   
    };