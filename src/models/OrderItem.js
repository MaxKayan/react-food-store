export class OrderItem {
  constructor(item, count, toppings) {
    this.item = item;
    this.count = count;
    this.toppings = toppings;
  }

  getTotalPrice() {
    const toppingsCount = this.toppings &&
      this.toppings.filter(item => item.checked).length;

    const toppingsPrice = (this.item.price * 0.1) * toppingsCount;
    return (this.item.price + toppingsPrice) * this.count;
  }
}
