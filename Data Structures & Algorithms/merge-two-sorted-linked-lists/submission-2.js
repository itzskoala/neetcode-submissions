/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

//  class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//     }
//  }
class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        //so i know they are in order...
        /*
        Input: list1 = [1,2,4], list2 = [1,3,5]
        Output: [1,1,2,3,4,5]
        */

        //just compare element by element in the array and add to a list?
        //first compare which head is the largest of the 2 LL
        //second compare with the value to the next and with the value 
        //why am I trying to handle two lists at once?
        // just handle one since i know they are all sorted...
        //so traverse through each one add compare 
        
        // let p1 = list1;//this starts you off at the head...
        // let p2 = list2;//this starts you off at the head...

        // while(p1 !== null && p2 !== null){ // traverse through both and just combine logic
        //     if(p2.val > p1.val){
        //         p1.next = p2;
        //     }
        //     else{
        //         p2.next = p1;
        //     }
        //     p1 = p1.next;
        //     p2 = p2.next;
        // }
        // return list2;


        let dummy = new ListNode(0); // we are using 3 LL, so basically go throuhg one LL, add the 2 items to the first in Dummy LL
        let head = dummy;

        while(list1 !== null && list2 !== null){
            if(list1.val <= list2.val){ //compare and set dummy LL as you go ...
                dummy.next = list1;
                list1 = list1.next;
            }
            else{
                dummy.next = list2;
                list2 = list2.next;
            }
            dummy = dummy.next;
        }
        if(list1 !== null){//case when list is empty
            dummy.next = list1; 
        }
        else{
            dummy.next = list2;
        }
        return head.next; //this gives you a pointer to the entire LL...dummy
    }
}
// const myLinkList = new Solution;
// console.log(myLinkList.mergeTwoLists([1,2,4], [1,3,5]));
