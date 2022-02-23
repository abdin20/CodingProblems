/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    //map to keep track of whats been seen
    var nodemap= new Map();
    
    var dummy=head
    
    while(dummy!=null){
        
        //check to see if node was seen
        if(!nodemap.has(dummy)){
            nodemap.set(dummy,true)
        }else{
            return true; //if seen return true
        }
        dummy=dummy.next
    }
    return false
    
};