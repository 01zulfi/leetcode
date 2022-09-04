const Stack = () => {
  let stack = []

  return {
    stack: () => stack.slice(),
    push: (el) => stack.push(el),
    peek: () => stack[stack.length - 1],
    pop: () => stack.pop(),
    size: () => stack.length,
    isEmpty: () => stack.length === 0
  }
}

const MyQueue = function() {
  this.stackOne = Stack();
  this.stackTwo = Stack();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
   while (!this.stackOne.isEmpty()) {
    this.stackTwo.push(this.stackOne.pop())
   }

   this.stackOne.push(x)

  while (!this.stackTwo.isEmpty()) {
    this.stackOne.push(this.stackTwo.pop())
   }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  const popped = this.stackOne.pop()
  return popped
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.stackOne.peek()   
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.stackOne.isEmpty()   
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
