import { useState } from "react";

const initToppings = toppings => toppings && toppings.map(topping => ({
  name: topping,
  checked: false
}));

export default function useToppings(openedItem) {
  const value = openedItem && openedItem.orderItem ?
    openedItem.orderItem.toppings :
    initToppings(openedItem.toppings);

  const [toppings, setToppings] = useState(value);

  const checkToppings = index => {
    setToppings(toppings.map((item, i) => {
      if (i === index) {
        item.checked = !item.checked;
      }
      return item;
    }));
  };

  return { toppings, checkToppings };
}
