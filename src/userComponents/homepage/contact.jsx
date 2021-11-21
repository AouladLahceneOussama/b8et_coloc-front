import React, { useState, useRef } from "react";
import styled from "styled-components";
import InputContact from "../../userComponents/inputContact";
import Boutton from "../../userComponents/boutton";
import Area from "../../userComponents/textArea";
import emailjs, { init } from "emailjs-com";
import { Element } from "react-scroll";
import BackgroundImg from "../../assets/illustrations/contact.jpg";
import { Marginer } from "../../userComponents/marginer";
import { COLORS } from "../../theme/theme";


const ContactContainer = styled(Element)`
    width: 100%;
    height: 100vh;
    padding: 0;
    background-image: url(${BackgroundImg});
    background-size: cover;
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

const MainContainer = styled.div`
  display: flex;
  margin-top:40px;
  padding:10px 0;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(7,185,43, 0.18);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;

    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;

  }

  @media only screen and (min-width: 768px) {
    width: 80vw;

  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;

  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;

  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:80%;
`;

const HorizontalRule = styled.hr`
  height: 0.31rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #015D13 0%, #07B92B 70%);
  backdrop-filter: blur(25px);
`;

export default function Contact() {

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_y2p7rbd', 'template_b8l4d3t', form.current, 'user_GTzN8jtT2yuI9TLnWK8Ko')
      .then((result) =>
      /*{
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });*/ {
        alert("Message Sent, We will get back to you shortly", result.text);
      },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        });
  }

  const [data, setData] = useState({
  });

  return (
    <ContactContainer>
      <BackgroundFilter>
        <form ref={form} onSubmit={sendEmail}>
          <MainContainer>
            <WelcomeText>Contact Us<HorizontalRule />
            </WelcomeText>
            <InputContainer>
              <InputContact placeholder="Name" name="Name" setData={setData} data={data} />
              <InputContact placeholder="Email" name="Email" setData={setData} data={data} />
              <InputContact placeholder="Phone" name="Phone" setData={setData} data={data} />
              <Area placeholder="Description" name="desc" setData={setData} data={data} />
              <Boutton width="330px" bgColor={COLORS.lightGreen} text="Send" type="submit" />

            </InputContainer>
          </MainContainer>
        </form>
      </BackgroundFilter>
    </ContactContainer>
  );
};