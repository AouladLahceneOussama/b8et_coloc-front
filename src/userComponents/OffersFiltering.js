import React, { useEffect, useState } from "react";
import Button from "../basicComponents/button";
import Home from "./Home";
import Footer from "./footer";
import ReactPaginate from "react-paginate";
import { COLORS, FONTS } from "../theme/theme";
import Menu from './Menu';
import axios from 'axios';
import Select from "./select";
import CheckBox from "./checkBox1";
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import '../styles/app.css';
import "./Offers.css";

function OffersFiltering() {
  //Add to Favoris
  const [favorites, setFavorites] = useState([]);
  //Pagination : max offers per page
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;
  //Offers data
  const [offers, setOffers] = useState([]);
  //Rooms data
  const [rooms, setRooms] = useState([]);
  //Offers From API 
  useEffect(() => {
    axios.get('http://localhost:8080/api/offers')
      .then(res => {
        setOffers(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  //Offers Rooms From API 
  useEffect(() => {
    axios.get('http://localhost:8080/api/rooms')
      .then(res => {
        setRooms(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  //Count Pagination
  const pageCount = Math.ceil(offers.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  //Part Favorites
  const saveWatchListLocal = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites));

  }
  useEffect(() => {
    getFromLocal()
  }, [])


  useEffect(() => {
    saveWatchListLocal()
  }, [favorites]);
  const getFromLocal = () => {
    if ((JSON.parse(localStorage.getItem('favorites'))) !== null)
      setFavorites([...(JSON.parse(localStorage.getItem('favorites')))])
  }
  //Hiden Div of Search
  const [isShown, setIsShown] = useState(false);

  //Search Part
  const optionsCity = ["Casablanca", "Fés", "Tanger", "Marrakech", "Salé", "Meknès", "Rabat", "Oujda", "Kénitra", "Agadir", "Tétouan", "Témara", "Safi",
  "Mohammédia", "Khouribga", "El Jadida", "Béni Mellal", "Nador", "Taza", "Khémisset", "Settat"];
  const optionsLocation = ["Room", "Home", "Studio"];
  const optionsGender = ["Male", "Female"];
  const optionsContrat = ["Yes", "No"];
  const optionsNumberPersons = [1, 2, 3, 4, 5];
  const [price, setPrice] = useState([500, 1000]);
  const [search, setSearch] = useState({ "city": "", "gender": "", "contrat": "", "nbrPersons": "", "Included": [], "Equippement": [], "Price": [] });

  const updateRange = (e, range) => {
    setPrice(range)

    setSearch({
      ...search,
      ["Price"]: e.target.value

    });
  };

  //PArt of SliderRange
  const PrettoSlider = styled(Slider)({
    color: 'white',
    height: 8,
    width: '350px',
    '& .MuiSlider-track': {
      border: 'none',
      backgroundColor: 'white',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: COLORS.lightGreen.primary,
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 13,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: 'white',
      color: COLORS.lightGreen.primary,
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });

  return (
    <><Menu />

      <div className="OffersPagination">
        <div className="search">
          <Button bgColor={COLORS.lightGreen} icon="search" onClick={() => setIsShown(!isShown)} />
        </div>
        {isShown && (
          <form className="searchAdvanced">
            <div className="Part1">
              <Select label="City" options={optionsCity} width="350px" name="city" data={search} setData={setSearch} />
              <Select label="Coming Soon" options={optionsLocation} width="350px" name="location" data={search} setData={setSearch} />
              <div style={{ width: "360px", marginLeft: '15px' }}>
                <p style={{ ...FONTS.smallTitle, color: "white", marginBottom: "5px" }}>Price</p>
                <PrettoSlider
                  min={100}
                  max={2500}
                  value={price}
                  onChange={updateRange}
                  valueLabelDisplay="auto"
                  name="Price"
                />
              </div>
              <Select label="Gender" options={optionsGender} width="350px" name="gender" data={search} setData={setSearch} />
              <Select label="Number of Persons" options={optionsNumberPersons} width="350px" name="nbrPersons" data={search} setData={setSearch} />
              <Select label="Contrat" options={optionsContrat} width="350px" name="contrat" data={search} setData={setSearch} />
            </div>
            <div className="Part2">

              <div className="Included1">

                <p style={{ ...FONTS.smallTitle, color: "white", marginBottom: "5px" }}>Included</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <CheckBox text="Water and Electricity" name="Included" data={search} setData={setSearch} />
                  <CheckBox text="Wifi" name="Included" data={search} setData={setSearch} />
                </div>
              </div>
              <div className="Included2">
                <p style={{ ...FONTS.smallTitle, color: "white", marginBottom: "8px" }}>Equippement</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <CheckBox text="Kitchen" name="Equippement" data={search} setData={setSearch} />
                  <CheckBox text="Wifi" name="Equippement" data={search} setData={setSearch} />
                  <CheckBox text="Closet" name="Equippement" data={search} setData={setSearch} />
                  <CheckBox text="Bed" name="Equippement" data={search} setData={setSearch} />
                </div>
              </div>
            </div>
          </form>
        )}
        <div className="Offers" id="notif">

          {offers.filter((val) => {
            //Case no select no search
            if (search.Equippement == "" && search.city == "" && search.gender == "" && search.contrat == "" && search.nbrPersons == "" && search.Price == "" && search.Included == "") {
              return val
            }

            //Case  just 1 select 
            if (search.city != "" && search.Equippement == "" && search.gender == "" && search.contrat == "" && search.nbrPersons == "" && search.Price == "" && search.Included == "") {
              if ((val.city.toLowerCase().includes((search.city).toLocaleLowerCase()))) {
                return val
              }
            }

            if (search.Included != "" && search.Equippement == "" && search.gender == "" && search.city == "" && search.contrat == "" && search.nbrPersons == "" && search.Price == "") {
              if (val.wifi == 'Exist/Included' || val.water_electricity == 'Exist/Included') {
                return val
              }
            }
            if (search.Equippement != "" && search.Included == "" && search.gender == "" && search.city == "" && search.contrat == "" && search.nbrPersons == "" && search.Price == "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  for (var j = 0; j < search.Equippement.length; j++) {
                    if (rooms[i].equipment.split(",").includes(search.Equippement[j])) {
                      return val;
                    }
                  }
                }
              }
            }
            if (search.gender != "" && search.Equippement == "" && search.city == "" && search.contrat == "" && search.nbrPersons == "" && search.Price == "" && search.Included != "") {
              if (val.user.gender.includes(search.gender)) {
                return val
              }
            }
            if (search.contrat != "" && search.Equippement == "" && search.gender == "" && search.city == "" && search.nbrPersons == "" && search.Price == "" && search.Included != "") {
              if (val.contrat == (search.contrat == 'Yes' ? '1' : '0')) {
                return val
              }
            }
            if (search.nbrPersons != "" && search.Equippement == "" && search.city == "" && search.gender == "" && search.contrat == "" && search.Price == "" && search.Included != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id) && (rooms[i].nbr_personne == search.nbrPersons)) {
                  return val;
                }
              }
            }
            if (search.Price != "" && search.Equippement == "" && search.nbrPersons == "" && search.city == "" && search.gender == "" && search.contrat == "" && search.Included == "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id) && (search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) {
                  return val;
                }
              }
            }
            //Case  just 2 select 
            if (search.city != "" && search.gender != "" && search.contrat == "" && search.nbrPersons == "" && search.Price == "" && search.Included == "") {
              if ((val.city.toLowerCase().includes((search.city).toLocaleLowerCase())) || val.user.gender.includes(search.gender)) {
                return val
              }
            }
            if (search.gender != "" && search.contrat != "" && search.city == "" && search.nbrPersons == "" && search.Price == "" && search.Included == "") {
              if (val.user.gender.includes(search.gender) || val.contrat == (search.contrat == 'Yes' ? '1' : '0')) {
                return val
              }
            }
            if (search.contrat != "" && search.city != "" && search.gender == "" && search.nbrPersons == "" && search.Price == "" && search.Included == "") {
              if (val.contrat == (search.contrat == 'Yes' ? '1' : '0') || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase()))) {
                return val
              }
            }
            if (search.city != "" && search.nbrPersons != "" && search.gender == "" && search.contrat == "" && search.Price == "" && search.Included == "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if ((rooms[i].nbr_personne == search.nbrPersons) || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase()))) {
                    return val
                  }
                }
              }
            }

            if (search.gender != "" && search.nbrPersons != "" && search.city == "" && search.contrat == "" && search.Price == "" && search.Included == "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if ((rooms[i].nbr_personne == search.nbrPersons) || val.user.gender.includes(search.gender)) {
                    return val
                  }
                }
              }
            }
            if (search.gender == "" && search.nbrPersons != "" && search.city == "" && search.contrat != "" && search.Price == "" && search.Included == "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if ((rooms[i].nbr_personne == search.nbrPersons) || val.contrat == (search.contrat == 'Yes' ? '1' : '0')) {
                    return val
                  }
                }
              }
            }
            if (search.city != "" && search.Price != "" && search.nbrPersons == "" && search.gender == "" && search.contrat == "" && search.Included != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if (((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase()))) {
                    return val
                  }
                }
              }
            }
            if (search.gender != "" && search.Price != "" && search.city == "" && search.nbrPersons == "" && search.contrat == "" && search.Included == "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if (((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (val.user.gender.includes(search.gender))) {
                    return val
                  }
                }
              }
            }
            if (search.Price != "" && search.nbrPersons != "" && search.city == "" && search.gender == "" && search.contrat == "" && search.Included == "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if (((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (rooms[i].nbr_personne == search.nbrPersons)) {
                    return val
                  }
                }
              }
            }
            if (search.Price != "" && search.contrat != "" && search.city == "" && search.gender == "" && search.nbrPersons == "" && search.Included == "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if (((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0'))) {
                    return val
                  }
                }
              }
            }
            //Case just 3 select
            if (search.gender != "" && search.city != "" && search.contrat != "" && search.nbrPersons == "" && search.Price == "") {
              if ((val.contrat == (search.contrat == 'Yes' ? '1' : '0')) || (val.user.gender.includes(search.gender)) || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase()))) {
                return val
              }
            }
            if (search.gender != "" && search.city != "" && search.contrat == "" && search.nbrPersons != "" && search.Price == "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if ((rooms[i].nbr_personne == search.nbrPersons) || (val.user.gender.includes(search.gender)) || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase()))) {
                    return val
                  }
                }
              }
            }
            if (search.gender != "" && search.city == "" && search.contrat != "" && search.nbrPersons != "" && search.Price == "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if ((rooms[i].nbr_personne == search.nbrPersons) || (val.user.gender.includes(search.gender)) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0'))) {
                    return val
                  }
                }
              }
            }
            if (search.gender == "" && search.city != "" && search.contrat != "" && search.nbrPersons != "" && search.Price == "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if ((rooms[i].nbr_personne == search.nbrPersons) || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase())) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0'))) {
                    return val
                  }
                }
              }
            }
            if (search.gender != "" && search.city != "" && search.contrat == "" && search.nbrPersons == "" && search.Price != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if (((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase())) || (val.user.gender.includes(search.gender))) {
                    return val
                  }
                }
              }
            }
            if (search.gender != "" && search.city == "" && search.contrat != "" && search.nbrPersons == "" && search.Price != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if (((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0')) || (val.user.gender.includes(search.gender))) {
                    return val
                  }
                }
              }
            }
            if (search.gender != "" && search.city == "" && search.contrat != "" && search.nbrPersons == "" && search.Price != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if (((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0')) || (val.user.gender.includes(search.gender))) {
                    return val
                  }
                }
              }
            }
            if (search.gender != "" && search.city == "" && search.contrat == "" && search.nbrPersons != "" && search.Price != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if (((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (rooms[i].nbr_personne == search.nbrPersons) || (val.user.gender.includes(search.gender))) {
                    return val
                  }
                }
              }
            }
            if (search.gender == "" && search.city == "" && search.contrat != "" && search.nbrPersons != "" && search.Price != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if (((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (rooms[i].nbr_personne == search.nbrPersons) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0'))) {
                    return val
                  }
                }
              }
            }
            if (search.gender == "" && search.city != "" && search.contrat == "" && search.nbrPersons != "" && search.Price != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if (((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (rooms[i].nbr_personne == search.nbrPersons) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0'))) {
                    return val
                  }
                }
              }
            }
            //Case just 4 select
            if (search.gender != "" && search.city != "" && search.contrat != "" && search.nbrPersons != "" && search.Price == "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if ((rooms[i].nbr_personne == search.nbrPersons) || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase())) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0')) || (val.user.gender.includes(search.gender))) {
                    return val
                  }
                }
              }
            }
            if (search.gender != "" && search.city != "" && search.contrat != "" && search.nbrPersons == "" && search.Price != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if (((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase())) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0')) || (val.user.gender.includes(search.gender))) {
                    return val
                  }
                }
              }
            }
            if (search.gender != "" && search.city != "" && search.contrat == "" && search.nbrPersons != "" && search.Price != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if (((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase())) || (rooms[i].nbr_personne == search.nbrPersons) || (val.user.gender.includes(search.gender))) {
                    return val
                  }
                }
              }
            }
            if (search.gender != "" && search.city == "" && search.contrat != "" && search.nbrPersons != "" && search.Price != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if (((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0')) || (rooms[i].nbr_personne == search.nbrPersons) || (val.user.gender.includes(search.gender))) {
                    return val
                  }
                }
              }
            }
            if (search.gender == "" && search.city != "" && search.contrat != "" && search.nbrPersons != "" && search.Price != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if (((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0')) || (rooms[i].nbr_personne == search.nbrPersons) || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase()))) {
                    return val
                  }
                }
              }
            }
            //Case just 5 select
            if (search.gender != "" && search.city != "" && search.contrat != "" && search.nbrPersons != "" && search.Price != "" && search.Included == "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if (((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (rooms[i].nbr_personne == search.nbrPersons) || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase())) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0')) || (val.user.gender.includes(search.gender))) {
                    return val
                  }
                }
              }
            }
            if (search.gender != "" && search.city != "" && search.contrat != "" && search.nbrPersons != "" && search.Included != "" && search.Price == "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if ((val.wifi == 'Exist/Included' || val.water_electricity == 'Exist/Included') || (rooms[i].nbr_personne == search.nbrPersons) || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase())) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0')) || (val.user.gender.includes(search.gender))) {
                    return val
                  }
                }
              }
            }
            if (search.gender == "" && search.city != "" && search.contrat != "" && search.nbrPersons != "" && search.Price != "" && search.Included != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if ((val.wifi == 'Exist/Included' || val.water_electricity == 'Exist/Included') || ((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (rooms[i].nbr_personne == search.nbrPersons) || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase())) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0'))) {
                    return val
                  }
                }
              }
            }
            if (search.gender != "" && search.city == "" && search.contrat != "" && search.nbrPersons != "" && search.Price != "" && search.Included != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if ((val.wifi == 'Exist/Included' || val.water_electricity == 'Exist/Included') || ((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (rooms[i].nbr_personne == search.nbrPersons) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0')) || (val.user.gender.includes(search.gender))) {
                    return val
                  }
                }
              }
            }
            if (search.gender != "" && search.city != "" && search.contrat == "" && search.nbrPersons != "" && search.Price != "" && search.Included != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if ((val.wifi == 'Exist/Included' || val.water_electricity == 'Exist/Included') || ((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (rooms[i].nbr_personne == search.nbrPersons) || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase())) || (val.user.gender.includes(search.gender))) {
                    return val
                  }
                }
              }
            }
            if (search.gender != "" && search.city != "" && search.contrat != "" && search.nbrPersons == "" && search.Price != "" && search.Included != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if ((val.wifi == 'Exist/Included' || val.water_electricity == 'Exist/Included') || ((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase())) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0')) || (val.user.gender.includes(search.gender))) {
                    return val
                  }
                }
              }
            }
            //Case 6 select
            if (search.gender != "" && search.city != "" && search.contrat != "" && search.nbrPersons != "" && search.Price != "" && search.Included != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  if ((rooms[i].nbr_personne == search.nbrPersons) || (val.wifi == 'Exist/Included' || val.water_electricity == 'Exist/Included') || ((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase())) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0')) || (val.user.gender.includes(search.gender))) {
                    return val
                  }
                }
              }
            }
            //Case just 7 select
            if (search.gender != "" && search.city != "" && search.contrat != "" && search.nbrPersons != "" && search.Price != "" && search.Included != "") {
              for (var i = 0; i < rooms.length; i++) {
                if ((rooms[i].offer.offer_id == val.offer_id)) {
                  for (var j = 0; j < search.Equippement.length; j++) {
                    if (rooms[i].equipment.split(",").includes(search.Equippement[j]) || (val.wifi == 'Exist/Included' || val.water_electricity == 'Exist/Included') || ((search.Price[0] <= rooms[i].price) && (search.Price[1] >= rooms[i].price)) || (rooms[i].nbr_personne == search.nbrPersons) || (val.city.toLowerCase().includes((search.city).toLocaleLowerCase())) || (val.contrat == (search.contrat == 'Yes' ? '1' : '0')) || (val.user.gender.includes(search.gender))) {
                      return val
                    }
                  }
                }

              }
            }


          }).slice(pagesVisited, pagesVisited + usersPerPage).map((val, key) => {
            return (

              <Home
                key={key}
                user={val}
                favorites={favorites}
                setFavorites={setFavorites}
              />

            );
          })}
        </div>
        <pre>
        </pre>

        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"} />
      </div>

      <Footer></Footer>
    </>
  );
}
export default OffersFiltering;
