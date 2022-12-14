/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// DOESN'T PASS ALL TESTS
// const hasCycle = function(head) {
//   const hash = {}

//   let temp = head
//   while (temp) {
//     if (hash[temp.val]) return true
//     hash[temp.val] = temp.val
//     temp = temp.next
//   } 
    
//   return false
// };


// tortoise & hare algorithm
const hasCycle = function(head) {
  let slow = head
  let fast = head

  while (slow && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      return true
    }
  }

  return false
}
