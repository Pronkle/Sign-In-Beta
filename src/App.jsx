import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './Pages/homepage';
import { HomedetailPage } from './Pages/homedetailpage';
import { NotfoundPage } from './Pages/notfound';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <div>
        <Menu /> {/* Your navigation menu */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage/:homepageID" element={<HomedetailPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;