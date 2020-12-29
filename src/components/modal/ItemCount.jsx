import React from "react";
import styled from "styled-components";
import { clampValue } from "../../utils/helpers";
import { baseButton } from "../../utils/styledComponents";

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
`;

const ButtonCount = styled(baseButton)``;

const maxCount = 1999999900;

export default function ItemCount({
  itemCount,
  countUp,
  countDown,
  onCountChange,
}) {
  return (
    <CountWrapper>
      <span>Количество</span>
      <div>
        <ButtonCount disabled={itemCount <= 1} onClick={countDown}>
          –
        </ButtonCount>
        <CountInput
          type="number"
          min="1"
          max={maxCount}
          value={clampValue(itemCount, 1, maxCount)}
          onChange={onCountChange}
        />
        <ButtonCount disabled={itemCount >= maxCount} onClick={countUp}>
          +
        </ButtonCount>
      </div>
    </CountWrapper>
  );
}
