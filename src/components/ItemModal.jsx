import { transparentize } from "polished";
import React from "react";
import styled from "styled-components";
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

const addBtnColor = "#06ce06";
const addBtnColorDark = "#04ae04";
const addBtnBorderWidth = "0px";
const addBtnShadowOpacity = 0;

const AddButton = styled.button`
  transition: 0.15s;
  position: absolute;
  left: 50%;
  top: -25px;
  border: ${addBtnBorderWidth} solid ${addBtnColor};
  outline: none;
  height: 50px;
  background-color: ${addBtnColor};
  transform: translateX(-50%);
  border-radius: 25px;
  padding: 5px 15px;
  cursor: pointer;

  box-shadow: 0 0 20px -5px ${transparentize(addBtnShadowOpacity, addBtnColor)};

  text-transform: uppercase;
  color: white;
  font-size: 20px;

  :active {
    /* border: none; */
    background-color: ${addBtnColorDark};
  }

  :focus {
  }

  :hover {
    /* color: ${addBtnColor}; */
    /* background-color: white; */
    border: ${addBtnBorderWidth} solid ${addBtnColor};
    box-shadow: 0 0 20px 0 ${transparentize(addBtnShadowOpacity, addBtnColor)};
  }

  span {
    text-transform: uppercase;
    color: white;
    font-size: 20px;
  }
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
            console.log("Modal click");
          }}
        >
          <Banner src={item.img} />
          <Container>
            <AddButton>Добавить</AddButton>
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
