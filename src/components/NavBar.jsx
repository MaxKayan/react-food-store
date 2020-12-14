import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import foodLogo from "../svg/logo.svg";

import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from ".";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299b01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const BrandTitle = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const BrandLogo = styled.img`
  width: 50px;
`;

const LoginButton = styled.button`
  transition: 0.3s;
  color: white;
  font-size: 30px;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  :hover {
    color: #ffe3aa;
  }
`;

export default function NavBar() {
  return (
    <NavBarStyled>
      <Logo>
        <BrandLogo src={foodLogo} alt="logo" />
        <BrandTitle>MrDonald&apos;s</BrandTitle>
      </Logo>
      <Tooltip text="Войти">
        <LoginButton>
          <FontAwesomeIcon icon={faSignInAlt} />
        </LoginButton>
      </Tooltip>
    </NavBarStyled>
  );
}
