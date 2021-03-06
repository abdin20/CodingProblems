
 // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }
 
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
      
    //declare dummy head 

    //this is so if we have to remove the first node we wont get an null exception
    var dummy_head = new ListNode(0)
    //next one is pointing to head 
    dummy_head.next=head;
     
     var normal=dummy_head
     var dummy= dummy_head;
     
     //move dummy over n+1 because we want node right before nth node from behind to set the next variable
     for(let i=0;i<=n;i++){
         dummy=dummy.next;
     }
     
     //increment normal head and dummy head until dummy reaches end
     while(dummy!=null){
         normal=normal.next
         dummy=dummy.next;
     }
     
     //when dummy reaches end we kno normal pointer has to skip over
     normal.next=normal.next.next
     
     return dummy_head.next
 };



    