import React from "react";
import styled from "styled-components";

import TrashIcon from "../svg/trash.svg";
import { baseButton } from "../utils/styledComponents";

const OrderItem = styled.li`
  display: flex;
  margin: 15px 0;
`;

const ItemName = styled.span`
  flex-grow: 1;
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

export default function OrderListItem() {
  return (
    <OrderItem>
      <ItemName>JS Burger</ItemName>
      <span>2</span>
      <ItemPrice>750</ItemPrice>
      <TrashButton />
    </OrderItem>
  );
}
