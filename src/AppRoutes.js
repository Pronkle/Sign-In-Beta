import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage  } from './Pages/homepage';
import { HomedetailPage } from './Pages/homedetailpage';
import { NotfoundPage } from './Pages/notfound';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/homepage/:homepageID" element={<HomedetailPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;