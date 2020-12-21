import React from "react";
import styled from "styled-components";

const addBtnColor = "#06ce06";
const addBtnColorDark = "#04ae04";
const addBtnBorderWidth = "0px";

const StyledButton = styled.button`
  transition: 0.15s;
  border: ${addBtnBorderWidth} solid ${addBtnColor};
  outline: none;
  height: inherit;
  background-color: ${addBtnColor};
  border-radius: 25px;
  padding: 5px 15px;
  cursor: pointer;

  box-shadow: 0 0 20px -5px ${addBtnColor};

  font-family: "Jura", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  font-size: 20px;

  :active {
    background-color: ${addBtnColorDark};
  }

  :hover {
    border: ${addBtnBorderWidth} solid ${addBtnColor};
    box-shadow: 0 0 20px 0 ${addBtnColor};
  }

  span {
    text-transform: uppercase;
    color: white;
    font-size: 20px;
  }
`;

export default function SuccessButton({ children, ...other }) {
  return <StyledButton {...other}>{children}</StyledButton>;
}
