import React, { useState } from 'react';
import MenuAdmin from './adminComponents/menuAdmin';
import UpMenuAdmin from './adminComponents/upMenuAdmin';
import OfferDisplayer from './adminComponents/offerDisplayer';
import AddOffer from './adminComponents/addOffer';
import Settings from './adminComponents/settings';
import Demand from './adminComponents/demand';
import Login from './adminComponents/login';
import SingUp from './adminComponents/signUp';
import EditOffer from './adminComponents/editOffer';
import app from './styles/app.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AdminIndex() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="app">
        <MenuAdmin openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div style={{ width: '100%' }}>
          <UpMenuAdmin openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <Routes>
            <Route path="offer" exact element={<OfferDisplayer/>}/>
            <Route path="offer/add" exact element={<AddOffer/>}/>
            <Route path="demands" exact element={<Demand/>}/>
            <Route path="settings" exact element={<Settings/>}/>
            <Route path="offer/edit/:id" exact element={<EditOffer/>}/>
          </Routes>
        </div>
    </div>
  );
}


export default AdminIndex;
