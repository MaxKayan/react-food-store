import React from "react";
import { Wrap, Label, Radio } from "./styles";


export default function Choices({ choice, changeChoice, openedItem }) {
  return (
    <>
      <h3>Сделайте выбор:</h3>
      <Wrap>
        {openedItem.choices.map((item, i) => (
          <Label key={i}>
            <Radio
              type="radio"
              name="choices"
              checked={choice === item}
              value={item}
              onChange={changeChoice}
            />
            {item}
          </Label>
        ))}
      </Wrap>
    </>
  );
}