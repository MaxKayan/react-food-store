import React from "react";
import styled from "styled-components";
import { baseButton } from "../../utils/styledComponents";

const addBtnColor = "#06ce06";
const addBtnColorDark = "#04ae04";
const addBtnBorderWidth = "0px";

const StyledButton = styled(baseButton)`
  transition: 0.15s;
  border: ${addBtnBorderWidth} solid ${addBtnColor};
  height: 50px;
  background-color: ${addBtnColor};
  border-radius: 9999px;
  padding: 0 20px;

  box-shadow: 0 0 20px -5px ${addBtnColor};

  /* Text Font */
  font-family: "Jura", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  font-size: 25px;
  padding-bottom: 3px;

  :active {
    background-color: ${addBtnColorDark};
  }

  :hover {
    border: ${addBtnBorderWidth} solid ${addBtnColor};
    box-shadow: 0 0 20px 0 ${addBtnColor};
  }
  
  :disabled {
    background-color: gray;
    box-shadow: none;
    cursor: auto;
  }
`;

export default function SuccessButton({ children, ...other }) {
  return <StyledButton {...other}>{children}</StyledButton>;
}
