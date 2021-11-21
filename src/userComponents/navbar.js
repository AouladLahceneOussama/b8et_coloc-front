import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./button";
import { Marginer } from "./marginer";
import logoWhite from "../assets/logo/b8et_colloc_logo_white.png";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { COLORS } from "../theme/theme";
import { IoIosHeart } from "react-icons/io";
import './Offers.css';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createMuiTheme } from '@material-ui/core';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';


const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 3em 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.lightGreen.primary,
    }
  }
});

const theme1 = createMuiTheme({
  typography: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

const BrandContainer = styled.div`
  width:100px
`;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavButton = styled(Button)`
  background-color: transparent;
  border: none;

  &:hover {
    background-color: transparent;
    border: none;
    color: rgb(212, 212, 212);
    background-color: rgba(212, 212, 212,0.2);
  }
`;

const LogoImg = styled.img`
  width: 100%;
`;


export default function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    var storage = JSON.parse(localStorage.getItem('favorites' || '[]'))
    setFavorites(storage)
    console.log(favorites)
  }, [])

  return (
    <NavbarContainer>
      <BrandContainer>
        <LogoImg src={logoWhite} />
      </BrandContainer>
      <AccessibilityContainer sx={{ position: 'absolute' }}>
        <Link to="/">
          <NavButton medium>Home</NavButton>
        </Link>
        <Marginer direction="horizontal" margin="14px" />

        <Link to="/offers/catalogue">
          <NavButton medium>Offers</NavButton>
        </Link>
        <Marginer direction="horizontal" margin="14px" />

        <Link to="/">
          <NavButton medium>About us</NavButton>
        </Link>
        <Marginer direction="horizontal" margin="14px" />

        <Link to="/">
          <NavButton medium>Services</NavButton>
        </Link>
        <Marginer direction="horizontal" margin="14px" />

        <Link to="/">
          <NavButton medium>Contact</NavButton>
        </Link>
        <Marginer direction="horizontal" margin="14px" />
        <div style={{
          marginTop:-10
        }}>
          <ThemeProvider theme={theme}>
            <IconButton aria-label="add to favorites" sx={{ width: 50, height: 50 }} color="primary">
              <IoIosHeart sx={{ width: 50, height: 50 }} onClick={handleClick} />
            </IconButton>
          </ThemeProvider>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              style: {
                maxHeight: '800px',
                width: '35ch',
                Height: '200px',
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >

            {
              favorites.map((listItem) => {
                const link = `/offer/detail/${listItem.offer_id}`;
                return (

                  <MenuItem key={listItem.offer_id}>
                    <div>
                      <ThemeProvider theme={theme1}>
                        <CardHeader
                          avatar={
                            <Avatar sx={{ height: '50px', width: '50px' }} alt={listItem.user.full_name} src={listItem.user.profil_image} />
                          }
                          title={listItem.user.full_name}
                          subheader="House Owner"
                        />
                      </ThemeProvider>
                      <Link to={link} >
                      <CardActions disableSpacing>
                        <ThemeProvider theme={theme}>
                          <Button sx={{ borderRadius: 8, fontSize: 10 }} size="small" variant="contained" color='primary'>Read More</Button>
                        </ThemeProvider>
                      </CardActions>
                      </Link>
                    </div>
                  </MenuItem>

                )
              })
            }

          </Menu>
        </div>
        <Link to="/login">
          <NavButton medium>Login</NavButton>
        </Link>
        <Marginer direction="horizontal" margin="14px" />

      </AccessibilityContainer>

    </NavbarContainer>


  );
}