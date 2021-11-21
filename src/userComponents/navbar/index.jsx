import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Marginer } from "../marginer";
import logoWhite from "../../assets/logo/b8et_colloc_logo_white.png";

import { COLORS, FONTS } from "../../theme/theme";
import Boutton from "../../components/boutton";

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavButton = styled(Button)`
  background-color: transparent;
  border: none;
  font-size:20px;
  &:hover {
    background-color: transparent;
    border: none;
    color: rgb(212, 212, 212);
    background-color: rgba(212, 212, 212,0.2);
  }
`;

const LogoImg = styled.img`
  width: 2.5em;
  height: 2.5em;
`;
const LogoText = styled.div`
  font-size: 25px;
  padding:10px;
  color: rgb(255,255,255);
  font-weight:600;
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      <BrandContainer>
        <LogoImg src={logoWhite} />
        <LogoText>
          B8ET COLOC
        </LogoText>
      </BrandContainer>
      <AccessibilityContainer>
        <NavButton medium>Home</NavButton>
        <Marginer direction="horizontal" margin="14px" />
        <NavButton medium>About Us</NavButton>
        <Marginer direction="horizontal" margin="14px" />
        <NavButton medium>Services</NavButton>
        <Marginer direction="horizontal" margin="14px" />
        <NavButton medium>Contact Us</NavButton>
        <Marginer direction="horizontal" margin="14px" />
  
        <Marginer direction="horizontal" margin="14px" />
        <Boutton width="100px" bgColor={COLORS.lightGreen} text="Log In" type = "button" />
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
