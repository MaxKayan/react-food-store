import React from "react";
import styled from "styled-components";

import { OrderListItem, SuccessButton } from "../index";
import { toLocalePrice } from "../../utils/helpers";

const SideBar = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: ${({ theme }) => theme.navBarHeight};
  left: 0;
  background: white;
  min-width: ${(props) => props.theme.sideBarWidth};
  height: calc(100% - ${(props) => props.theme.navBarHeight});
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const OrdersList = styled.ul``;

const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;

  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 25px;
`;

const EmptyListMessage = styled.p`
  text-align: center;
`;

export default function OrderSideBar({ orderItemsHook, openedItemHook }) {
  const { orderItems, removeOrderItem } = orderItemsHook;
  const { setOpenedItem } = openedItemHook;

  const totalPrice = orderItems.reduce(
    (prev, item) => item.getTotalPrice() + prev,
    0
  );

  const totalCount = orderItems.reduce((prev, item) => item.count + prev, 0);

  return (
    <SideBar>
      <Title>Ваш заказ</Title>
      <Content>
        {orderItems.length ? (
          <OrdersList>
            {orderItems.map((item, index) => (
              <OrderListItem
                key={index}
                orderId={index}
                orderItem={item}
                removeOrderItem={removeOrderItem}
                setOpenedItem={setOpenedItem}
              />
            ))}
          </OrdersList>
        ) : (
          <EmptyListMessage>Список заказов пуст</EmptyListMessage>
        )}
      </Content>
      <Total>
        <span>Итого</span>
        <span>{totalCount}</span>
        <TotalPrice>{toLocalePrice(totalPrice)}</TotalPrice>
      </Total>
      <SuccessButton>Оформить</SuccessButton>
    </SideBar>
  );
}
