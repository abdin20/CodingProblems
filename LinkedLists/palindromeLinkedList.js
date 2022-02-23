/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    var dummy=head
    var listStack=[]
    
    //go thru linkedlist and add to stack
    while(dummy!=null){
        
        listStack.push(dummy.val)
        dummy=dummy.next
    }
    
    dummy=head
    
    //compare stack and orignal linkedlist values 
    while(dummy!=null){
        
        if(listStack.pop()!=dummy.val){
            return false;
        }
        dummy=dummy.next;
    }
    
    return true;
    
};