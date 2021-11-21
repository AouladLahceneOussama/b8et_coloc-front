import React from "react";
import styled, { css } from "styled-components";
import logoWhite from "../../assets/logo/b8et_colloc_logo_white.png";
import { COLORS, FONTS } from "../../theme/theme";

const LogoContainer = styled.div` 
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImg = styled.img`
  width:100%;

`;

const LogoTextGREEN = styled.div`
  margin-top: ${({ inline }) => (inline ? 0 : "6px")};
  font-size: ${({ inline, small }) =>
    inline ? "18px" : small ? "23px" : "40px"};
  color: ${({ inline }) => (inline ? "#fff" : COLORS.primary)};
  font-weight: 700;
`;

const LogoTextWHITE = styled.div`
  margin-top: 6px;
  font-size: 45px;
  color: ${COLORS.white};
  font-weight:700;
`;

const Divv = styled.div`

  align-items: center;
  display: flex;
  flex-direction: row;
`;

export function Logo(props) {
  const { inline, small } = props;

  return (
    <LogoContainer inline={inline} small={small}>
      <LogoImg src={logoWhite} />
      
    </LogoContainer>
  );
}
