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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
         let left = head;
    let right = head;

    // Move right n steps
    while (n--) {
        right = right.next;
    }

    // If right is null, remove the head
    if (right === null) {
        return head.next;
    }

    // Stop when right is at the last node
    while (right.next) {
        left = left.next;
        right = right.next;
    }

    left.next = left.next.next;

    return head;
    }
}
