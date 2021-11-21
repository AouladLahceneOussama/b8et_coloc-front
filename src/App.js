import React, { useState } from 'react';
import MenuAdmin from './adminComponents/menuAdmin';
import UpMenuAdmin from './adminComponents/upMenuAdmin';
import OfferDisplayer from './adminComponents/offerDisplayer';
import AddOffer from './adminComponents/addOffer';
import Settings from './adminComponents/settings';
import Demand from './adminComponents/demand';
import app from './styles/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './userComponents/navbar'
import { Homepage } from './userComponents/homepage';
import OffersFiltering from './userComponents/OffersFiltering';
import Detail from './components/detail';
import Login from './adminComponents/login';
import SingUp from './adminComponents/signUp';
import AdminIndex from './adminIndex';

function App() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/offers/catalogue" exact element={<OffersFiltering />} />
          <Route path="/offer/detail/:id" exact element={<Detail />} />
          <Route path="/gesture/*" exact element={<AdminIndex />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SingUp />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
