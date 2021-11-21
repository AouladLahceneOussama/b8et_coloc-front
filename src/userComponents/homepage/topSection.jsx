import React from "react";
import styled from "styled-components";

import BackgroundImg from "../../assets/illustrations/student.jpg";
import { Logo } from "../../userComponents/logo";
import { Marginer } from "../../userComponents/marginer";
import Boutton from "../../userComponents/boutton";
import { ButtonWhite } from "../../userComponents/buttonWhite";
import { DownArrow } from "../../userComponents/downArrow";
import Navbar from "../../userComponents/navbar";
import { Element, scroller } from "react-scroll";
import { COLORS, FONTS } from "../../theme/theme";
import { Link } from 'react-router-dom';


const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotivationalText = styled.h1`
  font-size: 26px;
  font-weight: 700;
  line-height: 1.4;
  color: #fff;
  margin: 0;
  text-align: center;
`;

const Text = styled.h1`
  font-size: 24px;
  font-weight: 2;
  color: #fff;

  text-align: center;
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
`;
const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

const Diiv = styled.div`

  align-items: center;
  display: flex;
  flex-direction: row;
`;
export function TopSection(props) {

  const scrollToNextSection = () => {
    scroller.scrollTo("moreAboutSection", { smooth: true, duration: 500 });
  };

  return (
    <TopContainer>
      <BackgroundFilter>
        <Navbar />
        <Marginer direction="vertical" margin="10em" />
        <Logo />
        
        <MotivationalText>Facilitate the rental of houses for everyone </MotivationalText>

        <Diiv>
          <Link to="/signup">
            <Boutton width="100px" bgColor={COLORS.lightGreen} text="Sign Up" type="button" />
          </Link>
          <Marginer direction="horizontal" margin="15px" />
          <Link to="/offers/catalogue">
            <Boutton width="100px" bgColor={COLORS.grey} text="Rent" type="button" />
          </Link>
        </Diiv>
        <Text>More<br />About Us</Text>
        <DownArrowContainer onClick={scrollToNextSection}>
          <DownArrow />
        </DownArrowContainer>

      </BackgroundFilter>
    </TopContainer>
  )
}
