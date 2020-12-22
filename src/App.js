import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Menu, NavBar, OrderSideBar } from "./components";

const theme = {
  // primaryColor: "#FFF",
  navBarHeight: "80px",
  sideBarWidth: "380px",
};

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NavBar />
        <OrderSideBar />
        <Menu />
      </ThemeProvider>
    </>
  );
}

export default App;
