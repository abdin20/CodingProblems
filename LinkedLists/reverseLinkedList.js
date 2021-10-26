/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    //case of null list or 1 length linked list
  if(head===null || head.next===null) return head;
    
    //two pointers
    var p1=head
    var p2=head.next
    
    //make the front of the linked list null
    head.next=null;
    
    //keep going until pointers reach end of list
    while(p1!=null && p2!=null){
        
        //temp var for 3rd node
        var temp=p2.next
        
        //second node now points to first
        p2.next=p1
        
        //move the pointers over 1
        p1=p2 //p1 moves to the right to p2
        p2=temp //p2 move to the right which is p2.next
    }
    
    return p1
};