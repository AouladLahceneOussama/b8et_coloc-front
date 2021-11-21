import React from "react";
import styled, { css } from "styled-components";
import { COLORS, FONTS } from "../theme/theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 8em;
  height: 8em;

  ${({ inline }) =>
    inline &&
    css`
      width: 24px;
      height: 24px;
      margin-right: 6px;
    `};

  ${({ small }) =>
    small &&
    css`
      width: 4.8em;
      height: 4.8em;
    `};
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
      <Divv>
        <LogoTextWHITE inline={inline}>
          B8ET
        </LogoTextWHITE>
        <LogoTextGREEN>
          COLOC
        </LogoTextGREEN>
      </Divv>
    </LogoContainer>
  );
}
