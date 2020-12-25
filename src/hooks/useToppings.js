import { useState } from "react";

const initToppings = toppings => toppings && toppings.map(topping => ({
  name: topping,
  checked: false
}));

export default function UseToppings(openedItem) {
  const [toppings, setToppings] = useState(initToppings(openedItem.toppings));

  // if (openedItem && !toppings.length) {
  //   setToppings(initToppings(openedItem.toppings));
  // }

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
