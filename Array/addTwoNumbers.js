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

 function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode();                    
    let node = head;                              //node acts as pointer so node.next at first is head.next,
    let carry =0; //default carry to 0            //after that if we do node=node.next it will point to the node after head and edit it                                          
                                                   //as long as head doesnt change we have access to whole list from beginning
   
    //loop thru until end of linked list    

    let count=0;
    while (l1 || l2){

        count++;
        var value1=0; //always set to 0 incase one list is done before the other
        var value2=0;

         //check if l1 and l2 exist
        if(l1){
            //if so get their values and reassign to next element in list
            value1=l1.val;
            l1=l1.next;

        }
        if(l2){
            //if so get their values and reassign to next element in list
             value2=l2.val;
            l2=l2.next;
        }

        let sum = value1+ value2 + carry;
        //if sum >9 we assign the carry for the next iteration of loop to add the carry
        if(sum>9){
            sum=sum%10;
            carry=1;
        }else{carry=0;}

        //add node to linked list
        node.next= new ListNode(sum,null);
        //reference the last node of list for next iteration
        node= node.next;
    }


    //if there is carry left over after the loop ends we add at end
    if(carry){
        node.next=new ListNode(carry)
    }
    console.log(head.next.next)
    return head.next;
};

var l1 = new ListNode(2)
var node=l1

node.next = new ListNode(4)
node = node.next;

node.next = new ListNode(9)
node = node.next;



var l2 = new ListNode(5)
var node=l2

node.next = new ListNode(6)
node = node.next;

node.next = new ListNode(4)
node = node.next;
node.next = new ListNode(9)
node = node.next;

console.log("FINAL RESULT: "+ addTwoNumbers(l1,l2));