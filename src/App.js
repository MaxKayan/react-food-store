import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Menu, NavBar } from "./components";

const theme = {
  // primaryColor: "#FFF",
  navBarHeight: "80px",
};

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NavBar />
        <Menu />
      </ThemeProvider>
    </>
  );
}

export default App;
