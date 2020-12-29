import { useState } from "react";

export default function UseChoices(openedItem) {
  const [choice, setChoice] = useState(null);

  const changeChoice = (ev) => {
    setChoice(ev.target.value);
  };

  return { choice, changeChoice };
}