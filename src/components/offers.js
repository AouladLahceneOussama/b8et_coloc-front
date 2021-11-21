import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: wite;
    text-decoration: none;
    position: relative;

    &:active{
        color:white;
    }
`;


const offers = ({ id, img, image, Nom, prenom }) => {

    const link = `/offer/detail/${id}`;
    return (
        <div>

            <div style={{
                width: "300px",
                height: "270px",
                marginTop: "3%",
                marginRight: "90px",
                marginLeft: "20px",
                position: "relative",
                textalign: "center",
            }} >
                <img src={img} style={{
                    width: "120%",
                    height: "90%",
                    position: "absolute",
                    borderRadius: "25px",
                }} />
                <img src={image} style={{
                    position: "absolute",
                    top: "8px",
                    left: "16px",
                    width: "50px",
                    height: " 50px",
                    borderRadius: "90px",
                    borderspacing: "0px 0px"

                }} />

                <h3 style={{
                    position: "absolute",
                    top: "-6px",
                    left: "70px",
                    color: "white"
                }}
                >{Nom}  {prenom}</h3> <p style={{
                    position: "absolute",
                    top: "18px",
                    left: "70px",
                    color: "white"
                }}
                >house owner</p>
                <div
                    style={{
                        position: "absolute",
                        bottom: "40px",
                        right: "-30px",
                        padding: "2px 10px",
                        textAlign: "center",
                        borderRadius: "25px",
                        color: "#4ACC64",
                        cursor: "pointer",

                        backgroundColor: "white",
                        width: "120px"
                    }}
                >

                    <StyledLink to={link}>
                        <span
                            style={{
                                fontSize: "10",
                                fontWeight: "bold"
                            }}
                        >
                            Read More
                        </span>
                    </StyledLink>
                </div>
            </div>
        </div>
    );
}
export default offers;
