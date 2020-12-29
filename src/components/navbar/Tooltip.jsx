import React from "react";

import styled from "styled-components";

const TooltipStyled = styled.div`
  span {
    display: inline;
    position: absolute;
    pointer-events: none;

    transform: translate(-80%, 40px);
    transition: 0.3s;
    opacity: 0;
    font-size: 20px;
    background: #ffffff;
    border-radius: 6px;
    padding: 2px;
    color: #6c6c6c;
  }

  :hover span {
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
