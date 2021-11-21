import React from "react";
import styled from "styled-components";
import { Logo } from "../../userComponents/logo";
import { FONTS } from "../../theme/theme";
const Box = styled.div`
  padding: 18px 60px;
  background: #484646;
  position: relative;
  bottom: 0;
  width: 100%;
   
  @media (max-width: 1000px) {
    padding: 16px 30px;
  }
`;

const footer = () => {
  return (
    <Box>
      <Logo />
      <h2 style={{
        color: "white",
        textAlign: "center",
        ...FONTS.smallTitle
      }}>
        B8ET COLOC @ Copyright 2021
      </h2>
    </Box>
  );
};
export default footer;
