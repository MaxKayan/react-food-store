import { useState } from "react";

export default function useOrders() {
  const [orderItems, setOrderItems] = useState([]);

  const addOrderItem = (item) => {
    setOrderItems([...orderItems, item]);
  };

  return { orderItems, setOrderItems, addOrderItem };
}
