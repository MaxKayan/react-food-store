import { useState } from "react";

export default function useItemOpen() {
  const [openedItem, setOpenedItem] = useState(null);
  return { openedItem, setOpenedItem };
}
