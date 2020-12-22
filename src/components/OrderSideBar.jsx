import React from "react";
import styled from "styled-components";

import { OrderListItem, SuccessButton } from "../components";

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

export default function OrderSideBar() {
  return (
    <SideBar>
      <Title>Ваш заказ</Title>
      <Content>
        <OrdersList>
          <OrderListItem />
          <OrderListItem />
          <OrderListItem />
        </OrdersList>
      </Content>
      <Total>
        <span>Итого</span>
        <span>5</span>
        <TotalPrice>850 Р</TotalPrice>
      </Total>
      <SuccessButton>Оформить</SuccessButton>
    </SideBar>
  );
}