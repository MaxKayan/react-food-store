import React from "react";
import styled from "styled-components";
import { SuccessButton } from ".";
import { toLocalePrice } from "../utils/helpers";

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
  background-color: rgba(0, 0, 0, ${(props) => (props.open ? 0.5 : 0)});
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
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem;
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
`;

const Container = styled.div`
  position: relative;
  padding: 1.5rem;
  text-align: center;

  .item-modal-info {
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
  }
`;

export default function ItemModal({ item, setOpenedItem }) {
  return (
    <Overlay open={item !== null} onClick={() => setOpenedItem(null)}>
      {item ? (
        <Modal
          onClick={(ev) => {
            ev.stopPropagation();
          }}
        >
          <Banner src={item.img} />
          <Container>
            <OffsetBlock>
              <SuccessButton onClick={(ev) => console.log(ev)}>
                Добавить
              </SuccessButton>
            </OffsetBlock>
            <div className="item-modal-info">
              <h3>{item.name}</h3>
              <h3>{toLocalePrice(item.price)}</h3>
            </div>
          </Container>
        </Modal>
      ) : null}
    </Overlay>
  );
}