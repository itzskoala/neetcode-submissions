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
     * @return {ListNode}
     */
    reverseList(head) {
        let cur = head; //current navigator
        let prev = null;


        
        //give 1 pointer in a var
        // 2 pointer needs to point to 1 instead
        // 1 pointer needs to be 2 instead curr.next = prev
        // current = next pointer
        // let hold_next = curr.next
        // cur.next = prev (starts at 1, 2 is now 1,)
        // prev = curr; // 1 is now 2 
        // curr = hold_next // 2

        //let hold = curr.next
        //cur.next = prev;
        //prev = cur;
        //curr = hold;





        while(cur !== null) {
            let hold_next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = hold_next;

        }
        return prev;

    }
}
