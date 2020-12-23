import { useState } from "react";

export default function useItemCount() {
  const [itemCount, setItemCount] = useState(1);

  const countUp = () => {
    setItemCount(itemCount + 1);
  };

  const countDown = () => {
    setItemCount(itemCount - 1);
  };

  const onCountChange = (ev) => setItemCount(parseInt(ev.target.value));

  return { itemCount, setItemCount, countUp, countDown, onCountChange };
}
