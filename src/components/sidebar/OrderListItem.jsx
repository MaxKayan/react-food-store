import React from "react";
import styled from "styled-components";

import TrashIcon from "../../svg/trash.svg";
import { baseButton } from "../../utils/styledComponents";

import { toLocalePrice } from "../../utils/helpers";

const ListItem = styled.li`
  display: flex;
  margin: 15px 0;
  
  &:hover {
    background-color: aliceblue;
    cursor: pointer;
  }
`;

const ItemName = styled.span`
  flex-grow: 1;
  max-width: 210px;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const TrashButton = styled(baseButton)`
  width: 24px;
  height: 24px;

  background: url(${TrashIcon}) center no-repeat;
  background-size: cover;
`;

const ToppingName = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 15px;
  color: gray;
`;

/**
 * @callback removeOrderItem
 * @param {OrderItem} item
 */

/**
 *
 * @param {OrderItem} orderItem
 * @param orderId
 * @param {removeOrderItem} removeOrderItem
 * @param {function} setOpenedItem
 * @returns {null|JSX.Element}
 * @constructor
 */
export default function OrderListItem(
  {
    orderItem,
    orderId,
    removeOrderItem,
    setOpenedItem
  }
) {
  if (!orderItem) return null;

  const {
    item,
    count
  } = orderItem;

  const editOrderItem = () => {
    setOpenedItem({
      ...item,
      orderId,
      orderItem
    });
  };

  return orderItem ? (
    <ListItem onClick={editOrderItem}>
      <ItemName>
        {item.name} {orderItem.choice}
        {orderItem.toppings && (
          <div>
            {orderItem.toppings.map((topping, i) => (
              topping.checked &&
              <ToppingName key={i}>
                {topping.name}
              </ToppingName>
            ))}
          </div>
        )}
      </ItemName>
      <span>{count}</span>
      <ItemPrice>{toLocalePrice(orderItem.getTotalPrice())}</ItemPrice>
      <TrashButton onClick={(ev) => {
        ev.stopPropagation();
        removeOrderItem(orderItem);
      }} />
    </ListItem>
  ) : null;
}
