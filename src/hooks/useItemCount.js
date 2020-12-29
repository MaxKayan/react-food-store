import { useState } from "react";

export default function useItemCount(openedItem) {
  console.log(openedItem);
  const value = openedItem && openedItem.orderItem ? openedItem.orderItem.count : 1;
  const [itemCount, setItemCount] = useState(value);

  const countUp = () => {
    setItemCount(itemCount + 1);
  };

  const countDown = () => {
    setItemCount(itemCount - 1);
  };

  const onCountChange = (ev) => setItemCount(parseInt(ev.target.value));

  return { itemCount, setItemCount, countUp, countDown, onCountChange };
}
