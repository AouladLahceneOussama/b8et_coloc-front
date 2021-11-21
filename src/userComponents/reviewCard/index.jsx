import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import { COLORS, FONTS } from "../../theme/theme";


const CardContainer = styled.div`
  width: 400px;
  height: 430px;
  background-color: #fff;
  box-shadow: 0px 0px 12px rgba(17, 17, 17, 0.2);
  border-radius: 30px;
  margin: 5px 0;
  position: relative;
  margin-left:20px;
`;


const ReviewText = styled.p`
  font-size: 17px;
  color: #000000;
  font-weight: 500;
  display: flex;
  justify-content: center;
  padding:30px;
`;
const Title = styled.p`
  font-size: 19px;
  color: #000000;
  font-weight: 700;
  display: flex;
  justify-content: center;
  height:50px;
  padding:10px;
  width:90%;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ArrowIcon = styled.div`
  margin-top: 3px;
  color: #fff;
  font-size: 29px;
`;
const Image = styled.img`
  width: 100%;
  height: 130px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin:0;
`;

const Username = styled.span`
  font-size: 20px;
  color: #000000;
  font-weight:900;
  padding:18px;

`;
const IconContain = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: ${COLORS.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    border: 2px solid ${COLORS.primary};
  }
`;
export function ReviewCard(props) {
  const { ImageUrl, icon, reviewText, username, title } = props;

  return (
    <CardContainer>
      <Image src={ImageUrl} />
      <UserDetails>
        <IconContain>
          <ArrowIcon>
            <FontAwesomeIcon icon={icon} />
          </ArrowIcon>
        </IconContain>
        <Username>{username}</Username>
      </UserDetails>
      <Title>{title}</Title>
      <ReviewText>{reviewText.split('\n').map(text => (<p>{text}</p>))}</ReviewText>
      <Marginer direction="vertical" margin="7em" />
    </CardContainer>
  );
}
