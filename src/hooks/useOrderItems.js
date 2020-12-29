import { useState } from "react";
import { removeItemFromArray } from "../utils/helpers";

export default function useOrderItems() {
  const [orderItems, setOrderItems] = useState([]);

  /**
   * @param {OrderItem} item
   */
  const addOrderItem = (item) => {
    setOrderItems([...orderItems, item]);
  };

  /**
   * @param {OrderItem} item
   */
  const removeOrderItem = (item) => {
    const newArray = [...orderItems];
    removeItemFromArray(newArray, item);
    setOrderItems(newArray);
  };

  const updateOrderItem = (item, index) => {
    const newArray = [...orderItems];
    newArray[index] = item;
    setOrderItems(newArray);
  };

  return { orderItems, setOrderItems, addOrderItem, updateOrderItem, removeOrderItem };
}
