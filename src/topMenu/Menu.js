import React, { useEffect, useState } from 'react';
import Navbar from "../userComponents/navbar";
import styled from "styled-components";
import MenuNav from './MenuNav';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Menu() {

  let params = useParams();
  const [dat, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/api/offers/${params.id}/rooms`)
      .then(res => {
        setData(res.data)


      })
      .catch(err => {
        console.log(err);
      })
  }, [])



  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }


  const BackgroundFilter = styled.div`
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.8);
display: flex;
flex-direction: column;
align-items: center;
`;

  return (
    <div >

      <div style={{
        zIndex: "20",
        position: "absolute",
        width: " 100%",
        width: " 100%",
      }}>  <BackgroundFilter>  <Navbar /></BackgroundFilter>
      </div>

      <div style={{
        width: "100%",
        height: "100vh",
        padding: "0",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

      }}>
        <MenuNav imageList={dat} />
      </div>

    </div>

  );
}
export default Menu