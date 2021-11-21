import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../userComponents/marginer";
import { ReviewCard } from "../../userComponents/reviewCard";
import { SectionTitle } from "../../userComponents/sectionTitle";

import User1Img from "../../assets/illustrations/house.jpg";
import User2Img from "../../assets/illustrations/security.jpg";
import User3Img from "../../assets/illustrations/money.jpg";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


const ReviewsContainer = styled(Element)`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap:wrap;
`;


const Diivv = styled.div`
  align-items: center;
  display: flex;
  justify-content:space-around
`;

const HorizontalRule = styled.hr`
  width: 7%;
  height: 0.31rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #015D13 0%, #07B92B 70%);
  backdrop-filter: blur(25px);
`;


export function ReviewsSection(props) {

  return (

    <ReviewsContainer>
      <SectionTitle >Services </SectionTitle>
      <HorizontalRule />
      <Marginer direction="vertical" margin="3em" />
      <Diivv>
        <ReviewCard
          reviewText=" Houses\nRooms\nCollocation"
          username="Student Location"
          ImageUrl={User1Img}
          title="We provide you different kind
              of location types"
          icon={faAngleDown}
        />
        <ReviewCard
          reviewText="Your data is safe and our
              support team is available 
               24h/24 7j/7"
          username="Security & support"
          ImageUrl={User2Img}
          title="Your confort & security are 
              our priority"
          icon={faAngleDown}
        />

        <ReviewCard
          reviewText="Facilitate location :
              Reduce time, money and energy
                "
          username="Facilities "
          ImageUrl={User3Img}
          title="Our services are free & 
              available for everyone"
          icon={faAngleDown}
        />
      </Diivv>
    </ReviewsContainer>

  );
}
