import React from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "../theme/theme";

const ButtonWrapper = styled.button`
  padding: ${({ small }) => (small ? "5px 8px" : "7px 15px")};
  border-radius: 5px;
  background-color: ${COLORS.primary};
  color: #fff;
  font-weight: bold;
  font-size: ${({ small }) => (small ? "12px" : "16px")};
  outline: none;
  border: 2px solid transparent;
  transition: all 220ms ease-in-out;
  cursor: pointer;
  border-radius:20px;
  border : 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid ${COLORS.primary};
  }
`;

export function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}