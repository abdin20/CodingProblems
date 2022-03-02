// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


var getNthNodeFromEnd = (head, n) => {

    let fastPointer = head

    let slowPointer = head;

    for (i = 0; i < n; i++) {
        fastPointer = fastPointer.next;
    }

    while (fastPointer != null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }

    return slowPointer.val

}

let head = new ListNode(null, null);

let dummy = head;
for (let i = 0; i < 1; i++) {
    dummy.next = new ListNode(7, null);
    dummy = dummy.next;
}

console.log(head)
console.log(getNthNodeFromEnd(head, 1))