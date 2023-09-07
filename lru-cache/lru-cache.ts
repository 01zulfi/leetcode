type LNode = {
  value: number;
  next?: LNode;
  prev?: LNode;
};

class LRUCache {
  private capacity: number;
  private head?: LNode;
  private tail?: LNode;
  private lookup: Map<number, LNode>;
  private reverseLookup: Map<LNode, number>;
  private length: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.head = undefined;
    this.tail = undefined;
    this.lookup = new Map();
    this.reverseLookup = new Map();
    this.length = 0;
  }

  get(key: number): number {
    const node = this.lookup.get(key);
    if (!node) {
      return -1;
    }
    this.detach(node);
    this.prepend(node);
    return node.value;
  }

  put(key: number, value: number): void {
    const node = this.lookup.get(key);
    if (node) {
      this.detach(node);
      this.prepend(node);
      node.value = value;
    } else {
      const newNode = this.createNode(value);
      this.length += 1;
      this.prepend(newNode);
      this.trimCache();
      this.lookup.set(key, newNode);
      this.reverseLookup.set(newNode, key);
    }
  }

  private trimCache() {
    if (this.length > this.capacity) {
      const tail = this.tail as LNode;
      this.detach(tail);
      const key = this.reverseLookup.get(tail) as number;
      this.lookup.delete(key);
      this.reverseLookup.delete(tail);
      this.length -= 1;
    }
  }

  private createNode(value: any) {
    return { value } as LNode;
  }

  private detach(node: LNode) {
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    if (node === this.head) {
      this.head = this.head.next;
    }
    if (node === this.tail) {
      this.tail = this.tail.prev;
    }
    node.next = undefined;
    node.prev = undefined;
  }

  private prepend(node: LNode) {
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
