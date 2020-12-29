import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Menu, NavBar, OrderSideBar } from "./components";
import { useItemOpen, useOrderItems } from "./hooks";

const theme = {
  // primaryColor: "#FFF",
  navBarHeight: "80px",
  sideBarWidth: "380px"
};

function App() {
  const openedItemHook = useItemOpen();
  const orderItemsHook = useOrderItems();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NavBar />
        <OrderSideBar
          openedItemHook={openedItemHook}
          orderItemsHook={orderItemsHook}
        />
        <Menu
          openedItemHook={openedItemHook}
          orderItemsHook={orderItemsHook}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
