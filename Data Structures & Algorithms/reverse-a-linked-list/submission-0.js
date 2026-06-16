class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    const values = [];

    let current = head;

    while (current !== null) {
      values.push(current.val);
      current = current.next;
    }

    current = head;
    while (current !== null) {
      current.val = values.pop();
      current = current.next;
    }

    return head;
  }
}