import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { createMuiTheme } from '@material-ui/core';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    color: wite;
    text-decoration: none;

    &:active{
        color:white;
    }
`;

const Slideshow = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/offers')
            .then(res => {
                setOffers(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    const theme = createTheme({
        palette: {
            primary: {
                main: '#3BA550',
            }
        }
    });
    const theme1 = createMuiTheme({
        typography: {
            fontSize: 18,
            fontWeight: "bold",
        },
    });

    const themeDesc = createMuiTheme({
        typography: {
            fontWeight: "lighter",
            fontSize: 10,
            color: "#B5B3B3",

        },
    });

    var settings = {
        arrows: false,
        dots: true,
        autoplaySpeed: 1500,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="custom-dot">
                <i className="fas fa-circle"></i>
            </div>
        ),
    };

    return (
        <div
            style={{
                position: "relative",
                maxWidth: "100vw",
                width: "100%",
                overflow: "hidden",
            }}
        >
            <Slider {...settings} >
                {

                    offers.slice(0, 10).map((img, i) => {
                        const link = `/offer/detail/${img.offer_id}`;
                        return (
                            <div
                                key={i}
                                style={{
                                    width: "300px",
                                    height: "300px",
                                    backgroundColor: 'black',
                                    opacity: '0.5'
                                }}
                            >
                                <div className="DivAnnonce" >
                                    <div style={{ zIndex: 21, height: "35vh", position: 'absolute', }}>
                                        <ThemeProvider theme={theme1}>
                                            <CardHeader
                                                avatar={
                                                    <Avatar sx={{ height: '50px', width: '50px' }} alt={img.user.full_name} src={img.user.profil_image} />
                                                }
                                                sx={{ Color: grey[100] }}
                                                title={img.user.full_name}
                                                subheader={
                                                    <Typography className="FONT">House Owner</Typography>
                                                }
                                            />
                                        </ThemeProvider>
                                        <CardContent sx={{ width: "30%", mt: -2, justifyContent: 'justify' }} >
                                            <ThemeProvider theme={themeDesc}>
                                                <Typography  >
                                                    {img.description}
                                                </Typography>
                                            </ThemeProvider>
                                        </CardContent>
                                    </div>
                                    <div style={{ zIndex: 20, height: "35vh", }}>
                                        <StyledLink to={link} >
                                            <ThemeProvider theme={theme}>
                                                <Button sx={{ borderRadius: 8, fontSize: 10, mt: 18, mb: 1, ml: 150 }} size="large" variant="contained" color='primary'>Read More</Button>
                                            </ThemeProvider>
                                        </StyledLink>
                                    </div>
                                </div>
                                <img src={img.image !== "" && require("../images/" + img.image).default} alt={`img${i}`} style={{ width: "100%", height: "100vh" }} />
                            </div>
                        )
                    })
                }
            </Slider>

        </div>
    );
}

export default Slideshow;