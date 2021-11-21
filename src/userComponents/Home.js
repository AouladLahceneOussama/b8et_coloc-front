import React, { useState } from 'react';
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io"
import Card from '@mui/material/Card';
import { COLORS } from "../theme/theme";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createMuiTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: wite;
    text-decoration: none;
    position: relative; 
    margin-top:5px;

    &:active{
        color:white;
    }
`;

const Home = ({ user, favorites, setFavorites }) => {

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
  const addToFavorite = (user) => {
    let array = favorites;
    if (!array.includes(user)) {
      setFavorites([...favorites, user]);
      var storage = localStorage.getItem('favItem' || '0')
      if (storage == null) {
        localStorage.setItem('favItem' + (user.offer_id), JSON.stringify(user.offer_id));
      }
      else {
        localStorage.setItem('favItem' + (user.offer_id), JSON.stringify(user.offer_id));
      }

    } else {
      console.log('Already added');
    }
  }
  //Headen Div of Search
  const [isShown, setIsShown] = useState(false);
  const link = `/offer/detail/${user.offer_id}`

  return (
    <Card key={user.offer_id} sx={{ ml: 2, mt: 2, maxWidth: 300, boxShadow: 4, borderRadius: 6 }}>

      <CardMedia
        component="img"
        height="180"
        image={user.image !== "" && require("../images/" + user.image).default}
        alt="Home"
      >
      </CardMedia>


      <ThemeProvider theme={theme}>
        <IconButton aria-label="add to favorites" sx={{ ml: 32, mt: -42, bgcolor: grey[100], width: 30, height: 30 }} color="primary">
          {localStorage.getItem('favItem' + (user.offer_id)) != null && localStorage.getItem('favItem' + (user.offer_id)).includes(user.offer_id) ?
            (<IoIosHeart onClick={() => addToFavorite(user)} color={COLORS.darkGreen} />) :
            (localStorage.getItem('favItem' + (user.offer_id)) == null || !localStorage.getItem('favItem' + (user.offer_id)).includes(user.offer_id) ?
              (<IoIosHeartEmpty onClick={() => addToFavorite(user)} color={COLORS.darkGreen} />) :
              (<IoIosHeart onClick={() => addToFavorite(user)} color={COLORS.gray} />)

            )

          }

        </IconButton>
      </ThemeProvider>


      <ThemeProvider theme={theme1}>
        <CardHeader
          sx={{ mt: -2, mt: -4 }}
          avatar={
            <Avatar sx={{ height: '50px', width: '50px' }} alt={user.user.full_name} src={user.user.profil_image} />
          }
          title={user.user.full_name}
          subheader="House Owner"
        />
      </ThemeProvider>

      <CardContent sx={{ mt: -2 }}>
        <ThemeProvider theme={themeDesc}>
          <Typography  >
            {user.description}
          </Typography>
        </ThemeProvider>
      </CardContent>

      <StyledLink to={link} >
        <CardActions disableSpacing>
          <ThemeProvider theme={theme}>

            <Button sx={{ borderRadius: 8, fontSize: 10, mt: -2, mb: 1, ml: 1 }} size="small" variant="contained" color='primary'>Read More</Button>

          </ThemeProvider>
        </CardActions>
      </StyledLink >
    </Card >
  );
}
export default Home;