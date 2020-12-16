import React from "react";
import { createGlobalStyle } from "styled-components";
import { Menu, NavBar, ThemeProvider } from "./components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: black;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3 {
    font-family: Pacifico;
    padding: 0;
    margin: 0;
  }

  input, button {
    font-family: inherit;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider themeData={{ primaryColor: "#FFF" }}>
        <NavBar />
        <Menu />
      </ThemeProvider>
    </>
  );
}

export default App;
