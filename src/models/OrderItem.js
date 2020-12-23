export class OrderItem {
  constructor(item, count) {
    this.item = item;
    this.count = count;
  }

  getTotalPrice() {
    return this.item.price * this.count;
  }
}
