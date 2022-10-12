const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let prevNode = l;
  let curNode = l;
  while (curNode) {

    while ((curNode) && (curNode.value !== k)) {
      prevNode = curNode;
      curNode = curNode.next;
    }
    if (!curNode) return l;
    if (prevNode.value == k) {
      prevNode = prevNode.next;
      curNode = prevNode;
      l = prevNode;
    }
    else {
      prevNode.next = curNode.next;
      curNode = curNode.next;
    }
  }
  return l;
}
function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}
const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
const expected = convertArrayToList([1, 2, 4, 5]);

removeKFromList(initial, 3);
module.exports = {
  removeKFromList
};
