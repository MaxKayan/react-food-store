import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Menu, NavBar, OrderSideBar } from "./components";
import { useOrderItems } from "./hooks";

const theme = {
  // primaryColor: "#FFF",
  navBarHeight: "80px",
  sideBarWidth: "380px"
};

function App() {
  const orderItemsHook = useOrderItems();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NavBar />
        <OrderSideBar hook={orderItemsHook} />
        <Menu {...orderItemsHook} />
      </ThemeProvider>
    </>
  );
}

export default App;
