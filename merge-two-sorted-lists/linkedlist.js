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
}
