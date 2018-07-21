/**
 * 删除链表的倒数第N个节点
 * 关键在于能否只遍历一遍，就能删除对应的节点呢
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var dommy = new ListNode(null)
    dommy.next = head
    var first = dommy
    var second = dommy
    for (var i = 1; i < n + 1; i++){
        first = first.next
    }
    while(first.next) {
        first = first.next
        second = second.next
    }
    second.next = second.next.next
    return dommy.next
};