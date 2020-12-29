import React from "react";
import { Checkbox, Label, Wrap } from "./styles";

function ToppingsList({ toppings, checkToppings }) {
  return (
    <>
      <h3>Добавки</h3>
      <Wrap>
        {toppings.map((item, i) => (
          <Label key={i}>
            <Checkbox
              type="checkbox"
              checked={item.checked}
              onChange={() => checkToppings(i)}
            />
            {item.name}
          </Label>
        ))}
      </Wrap>
    </>
  );
}

export default ToppingsList;