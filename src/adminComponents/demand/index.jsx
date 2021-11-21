//template_mio0pqk
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Boutton from "../../userComponents/boutton/index";
import { Marginer } from "../../userComponents/marginer/index";
import axios from 'axios';
import { COLORS, FONTS } from "../../theme/theme";
import { Container } from "../offerElements";
import { Link } from 'react-router-dom';

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100vh;
  background-color:rgba(7,185,43,0.1);
  display: flex;
  flex-direction: rows;
  align-items: center;
`;

const MainContainer = styled.div`
    @media only screen and (max-width: 320px) {
      width: 80vw;
      height: 90vh;
      hr {
        margin-bottom: 0.3rem;
      }
      h4 {
        font-size: small;
      }
    }
    @media only screen and (min-width: 360px) {
      width: 80vw;
      height: 90vh;
      h4 {
        font-size: small;
      }
    }

    @media only screen and (min-width: 411px) {
      width: 80vw;
      height: 90vh;
    }

    @media only screen and (min-width: 768px) {
      width: 80vw;
      height: 80vh;
    }
    @media only screen and (min-width: 1024px) {
      width:76vw;
      height: 70vh;
    }
  `;

const ContainerGlobal = styled.div`
    width:100%;
    height:100vh;
  `;

const DemandCont = styled.div`
    height:12vh;
    width:100%;
    display: flex;
    flex-direction: colomn;
    margin:0;
  
`;

const Image = styled.div`
    background-color:rgb(7,185,43);

    border-radius: 100%;
    margin:15px;
    @media only screen and (max-width: 320px) {
      height:3vh;
      width:3vh;
    }
    @media only screen and (min-width: 360px) {
      height:3vh;
      width:3vh;
    }

    @media only screen and (min-width: 411px) {
      height:6vh;
      width:6vh;
    }

    @media only screen and (min-width: 768px) {
      height:6vh;
      width:6vh;
    }
    @media only screen and (min-width: 1024px) {
      height:6vh;
      width:6vh;
    }
`;

const DemandRight = styled.div`
    display: flex;
    flex-direction: rows;
    align-items: center;
`;

const NameSection = styled.div`
    display: flex;
    flex-direction: rows;
    align-items: center;
`;

const HorizontalRule = styled.hr`
  width: 80%;
  height: 0.31rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #E8F9EC 0%, #CAF3D4 70%);
  margin-left: 8em;
  backdrop-filter: blur(25px);
`;

const DemandLeft = styled.div`

`;


const Demand = () => {

  const [Demands, setDemands] = useState([]);
  const [userId, setUserId] = useState();
  //Demands From API
  useEffect(() => {
    if (localStorage.getItem("userSession") !== null)
      setUserId(localStorage.getItem("userSession"));

    console.log("apdjaspodposad deamnd");
    axios.get('http://localhost:8080/api/demand/status/0')
      .then(res => {
        console.log(res.data)
        setDemands(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (

    <Container>

      {

        Demands.map((DM) => {
          const link = `/offer/detail/${DM.offer.offer_id}`;

          function UpdateStat(stat) {
            console.log(stat);
            axios.post(`http://localhost:8080/api/demands/update/${DM.demand_id}`, stat).then(res => {
              console.log(res);
              window.location.reload();
            });
          }

          if (DM.offer.user.user_id == userId) {

            return (
              <><DemandCont style={{ flex: 1 }}>
                <DemandLeft style={{ flex: 5 }}>
                  <NameSection>
                    <Image><i
                      style={{
                        fontSize: 32,
                        marginLeft: 11,
                        marginTop: 8,
                        color: "white"
                      }}
                      class="fas fa-user"></i></Image>
                    <Marginer direction="horizontal" margin="2em" />
                    <h3>{DM.fullName}</h3>
                    <Marginer direction="horizontal" margin="2em" />
                    <h5>{DM.created_at}</h5>
                    <Marginer direction="horizontal" margin="5em" />
                    <Link to={link}>
                      <Boutton width="150px" bgColor={COLORS.blue} text="Details" />
                    </Link>
                  </NameSection>
                </DemandLeft>
                <DemandRight style={{ flex: 1 }}>
                  <Boutton width="100px" bgColor={COLORS.lightGreen} text="Accept" onClick={() => UpdateStat("1=")} />
                  <Boutton width="100px" bgColor={COLORS.red} text="Reject" onClick={() => UpdateStat("2=")} />
                </DemandRight>
              </DemandCont>
                <HorizontalRule /></>
            );
          }

        })}

    </Container>
  );
}

export default Demand