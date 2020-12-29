/**
 * @namespace
 * @property {{name:string, img:string, id:int, price:int, toppings:string[], choices:string[]}} item
 * @property {{name:string, checked:boolean}[]} toppings
 */
export class OrderItem {
  constructor(item, count, toppings, choice) {
    this.item = item;
    this.count = count;
    this.toppings = toppings;
    this.choice = choice;
  }

  getTotalPrice() {
    const toppingsCount = this.toppings ?
      this.toppings.filter(topping => topping.checked).length : 0;

    const toppingsPrice = (this.item.price * 0.1) * toppingsCount;
    return (this.item.price + toppingsPrice) * this.count;
  }
}
