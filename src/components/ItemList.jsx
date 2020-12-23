import React from "react";
import styled from "styled-components";
import { toLocalePrice } from "../utils/helpers";

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Item = styled.li`
  transition: 0.3s;
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({ img }) => `url(${img})`};
  box-shadow: inset 0 0 50px 30px rgba(0, 0, 0, 0.1);
  background-position: center;
  background-size: cover;
  margin: 30px;
  padding: 15px;
  font-size: 30px;
  color: white;
  z-index: 1;

  &:after {
    transition: 0.3s;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: black;
    opacity: 33%;
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px rgba(0, 0, 0, 0.8);
    &:after {
      opacity: 0;
    }
  }
`;

export default function ItemList({ dataList, setOpenedItem }) {
  return (
    <List>
      {dataList.map((item) => (
        <Item
          key={item.id}
          img={item.img}
          onClick={() => {
            setOpenedItem(item);
          }}
        >
          <p>{item.name}</p>
          <p>{toLocalePrice(item.price)}</p>
        </Item>
      ))}
    </List>
  );
}
