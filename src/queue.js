const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(value) {
    if (value !== undefined)
      this.head = new ListNode(value);
    else this.head = null;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    let curNode = this.head;
    if (curNode === null)
      this.head = newNode;
    else {
      while (curNode.next)
        curNode = curNode.next;
      curNode.next = newNode;
    }
  }

  dequeue() {
    let res = this.head.value;
    this.head = this.head.next;
    return res;
  }
}

const queue = new Queue();

queue.enqueue(1); // adds the element to the queue
queue.enqueue(3); // adds the element to the queue
queue.dequeue(); // returns the top element from queue and deletes it, returns 1
queue.getUnderlyingList() // returns { value: 3, next: null }

module.exports = {
  Queue
};
