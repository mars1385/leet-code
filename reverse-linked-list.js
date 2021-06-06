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
var reverseList = function (head) {
  // if(head.next === null) {
  //   return []
  // }

  let currentLink = head;
  let tail = head;

  // not complete
  while (tail.next !== null) {
    let pre = currentLink;
    let next = currentLink.next;
    tail.next = next.next;
    currentLink = next;
    currentLink.next = pre;
  }
  return tail;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
