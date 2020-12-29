import React from "react";
import styled from "styled-components";
import { ItemCount, SuccessButton, ToppingsList, Choices } from "../index";
import { useItemCount, useToppings, useChoices } from "../../hooks";
import { OrderItem } from "../../models/OrderItem";
import { toLocalePrice } from "../../utils/helpers";

const Overlay = styled.div`
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, ${({ open }) => (open ? 0.5 : 0)});
  z-index: 120;
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
`;

const Modal = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 600px;
  height: 600px;
  overflow: hidden;
  /* box-shadow: 0 3px 9px 10px rgba(0, 0, 0, 0.2); */
  box-shadow: rgba(0, 0, 0, 0.15) 0 0.5rem 1rem;
  margin: 1.5rem;
  /* z-index: 200; */
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background: url(${({ src }) => src}) center no-repeat;
  background-size: cover;
`;

const OffsetBlock = styled.div`
  position: absolute;
  left: 50%;
  top: -25px;
  transform: translateX(-50%);
  height: 50px;

  button {
    height: inherit;
  }
`;

const Container = styled.div`
  position: relative;
  padding: 1.5rem;

  .item-modal-info {
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
  }
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

/**
 *
 * @param {{name:string, img:string, id:int, price:int, toppings:string[], choices:string[]}} openedItem
 * @param setOpenedItem
 * @param addOrderItem
 * @returns {JSX.Element}
 * @constructor
 */
export default function ItemModal(
  {
    openedItem,
    setOpenedItem,
    addOrderItem
  }) {

  const counterHook = useItemCount();
  const toppingsHook = useToppings(openedItem);
  const choicesHook = useChoices(openedItem);

  const orderItem = new OrderItem(
    openedItem,
    counterHook.itemCount,
    toppingsHook.toppings,
    choicesHook.choice
  );

  const addToOrder = () => {
    addOrderItem(orderItem);
    setOpenedItem(null);
  };

  return (
    <Overlay open={openedItem} onClick={() => setOpenedItem(null)}>
      {openedItem ? (
        <Modal onClick={(ev) => ev.stopPropagation()}>
          <Banner src={openedItem.img} />
          <Container>

            <OffsetBlock>
              <SuccessButton
                onClick={addToOrder}
                disabled={openedItem.choices && !orderItem.choice}
              >Добавить</SuccessButton>
            </OffsetBlock>

            <div className="item-modal-info">
              <h3>{openedItem.name}</h3>
              <h3>{toLocalePrice(openedItem.price)}</h3>
            </div>

            <ItemCount {...counterHook} />

            {openedItem.toppings &&
            <ToppingsList {...toppingsHook} />}

            {openedItem.choices &&
            <Choices {...choicesHook} openedItem={openedItem} />}

            <TotalPriceItem>
              <span>Итого:</span>
              <span>{toLocalePrice(orderItem.getTotalPrice())}</span>
            </TotalPriceItem>
          </Container>
        </Modal>
      ) : null}
    </Overlay>
  );
}
