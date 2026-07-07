/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let dummy = new ListNode(0, head);

        let curr=head, lp=dummy;
        for(let i=0; i<left - 1; i++){
            lp = curr;
            curr = curr.next;
        }

        let prev = null;
        for(let i=0;i<right-left+1;i++){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        lp.next.next = curr;
        lp.next = prev;

        return dummy.next;
    }
}
