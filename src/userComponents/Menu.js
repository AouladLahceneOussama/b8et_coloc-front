import React, { useState } from "react";
import Navbar from "./navbar";
import styled from "styled-components";
import '../styles/app.css';
import  Slideshow  from './slideshow';

function Menu(){

    
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
               position:"absolute",
               width:" 100%",
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
            <Slideshow />
            
            </div>
          </div>
      );
}
export default Menu