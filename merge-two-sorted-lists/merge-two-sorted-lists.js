/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

////////////////////
// NODE AND LINKEDLIST CLASS
////////////////////

class Node {
  constructor(item) {
    this.val = item;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(val) {
    const node = new Node(val);

    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.length++;
  }

  indexOf(val) {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      if (current.val === val) return count;
      count++;
      current = current.next;
    }

    return -1;
  }

  map(callback) {
    let curr = this.head;
    while (curr) {
      callback(curr);
      curr = curr.next;
    }
  }

  mapvals(callback) {
    let curr = this.head;
    while (curr) {
      callback(curr.val);
      curr = curr.next;
    }
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  fromArray(arr) {
    arr.forEach((item) => {
      this.add(item);
    });
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Out of Indexed!");
    } else {
      let curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;
      if (index === 0) {
        this.head = curr.next;
      } else {
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
      }
      this.length--;
      return curr.val;
    }
  }

  get array() {
    const arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr;
  }

  get size() {
    return this.length;
  }

  head() {
    return this.head;
  }
}

////////////////////
// SOLUTION STARTS HERE
////////////////////

const mergeTwoLists = function (list1, list2) {
  const array1 = traverse(list1);
  const array2 = traverse(list2);
  const merged = [...array1, ...array2];
  const sorted = merged.sort((a, b) => a - b);
  const list = createList(sorted);
  return list;
};

const traverse = function (list) {
  let current = list;
  const nodes = [];
  while (current) {
    nodes.push(current.val);
    current = current.next;
  }
  return nodes;
};

const createList = function (array) {
  return array.reverse().reduce((acc, curr) => {
    if (acc == null) {
      acc = new ListNode(curr);
    } else {
      acc = new ListNode(curr, acc);
    }
    return acc;
  }, null);
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//////////////
// TESTING
/////////////

const list1 = new LinkedList();
list1.fromArray([1, 2, 4]);
const list2 = new LinkedList();
list2.fromArray([1, 3, 4]);
const mergedlist = mergeTwoLists(list1.head, list2.head);
console.log(traverse(mergedlist));
