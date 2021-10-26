/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    //make new list
    var newList= new ListNode(0)
    
    var dummy= newList;
    
    //go thru both lists
    while(l1!=null &&l2!=null){
        
        //check which value to put in first
        if(l1.val>l2.val){
            dummy.next=new ListNode(l2.val)
            dummy=dummy.next
            l2=l2.next

        } else if(l2.val>l1.val){
            dummy.next=new ListNode(l1.val)
            dummy=dummy.next
            l1=l1.next
        }else{
            //if same doesnt matter which one we put
            dummy.next=new ListNode(l1.val)
            dummy=dummy.next
            l1=l1.next
        }   
    }
    
    //after check to see if l1 or l2 have been gone thru
    if(l1!=null){
        while(l1!=null){
               dummy.next=new ListNode(l1.val)
            dummy=dummy.next
            l1=l1.next
        }
    }
    
    if(l2!=null){
        while(l2!=null){
               dummy.next=new ListNode(l2.val)
            dummy=dummy.next
            l2=l2.next
        }
    }
    
    //return new sortedlinklist
    return newList.next
    
};