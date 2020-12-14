import React from "react";

import styled from "styled-components";

const TooltipStyled = styled.div`
  span {
    display: inline;
    position: absolute;
    /* left: 50%; */
    transform: translate(-80%, 40px);
    /* top: 40px; */
    transition: 0.3s;
    opacity: 0;
    font-size: 20px;
    background: #ffffff;
    border-radius: 6px;
    padding: 2px;
    /* top: 65px; */
    /* left: 0px; */
    /* border: 1px solid #cccccc; */
    color: #6c6c6c;
  }

  :hover span {
    /* top: 70px; */
    opacity: 100%;
  }
`;

export default function Tooltip({ text, children }) {
  return (
    <TooltipStyled>
      {children}
      <span>{text}</span>
    </TooltipStyled>
  );
}
