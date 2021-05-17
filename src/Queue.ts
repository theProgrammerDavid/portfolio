
export default class Queue<Type> {
  items: Type[];
  constructor() {
    this.items = [];
  }
  push(element:Type) {
    this.items.push(element);
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  dequeue() {
    if (this.isEmpty()) return;
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) return;
    return this.items[0];
  }
}
