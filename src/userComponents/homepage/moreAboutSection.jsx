import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../userComponents/sectionTitle";
import { COLORS, FONTS } from "../../theme/theme";
import { Marginer } from "../../userComponents/marginer";

import logoDark from "../../assets/logo/b8et_colloc_logo_dark.png";


const MoreAboutContainer = styled(Element)`
  min-height: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
  background-color:rgb(0,0,0,0.17);

`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  padding:160px;

  @media screen and (max-width: 200px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;

const AboutContainerVert = styled.div`
  justify-content: center;
  align-items: center;
  border-radius:40px;
  padding:50px;
  background-color:${COLORS.primary};
  @media only screen and (max-width: 320px) {
    max-width: 100%;
  }
  @media only screen and (min-width: 360px) {
    max-width: 100%;
  }
  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

const AboutText = styled.p`
  font-size: 29px;
  color: #2f2f2f;
  font-weight: 700;
  line-height: 1.4;
  padding:50px;
  max-width:900px;
`;

const AboutImg = styled.img`
  width: 200px;
`;
const HorizontalRule = styled.hr`
  width: 80%;
  height: 0.31rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #015D13 0%, #07B92B 70%);
  backdrop-filter: blur(25px);
`;

export function MoreAboutSection(props) {
  return (
    <MoreAboutContainer name="moreAboutSection">
      <SectionTitle>About Us <HorizontalRule /></SectionTitle>
      <AboutContainer>
      <AboutContainerVert>
      <AboutImg src={logoDark} />
      </AboutContainerVert>
        <AboutText>
        <h4>B8ET COLOC is a platform for students to
        help them find location and roommate with 
        less energy and time spend.</h4>
        </AboutText>
      </AboutContainer>
    </MoreAboutContainer>
  );
}
