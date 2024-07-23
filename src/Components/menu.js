// import React from 'react'
// import '../App.css'
// import {Menudata} from './menudata'

// function Menu() {
//   return (
//     <div className='Menu'>
//         <ul className="Menulist">
//             {Menudata.map((val, key) => {
//                 return(
//                     <li 
//                         key={key} 
//                         className="row" 
//                         id = {window.location.pathname == val.link ? "active" : ""}
//                         onClick={() => {
//                             window.location.pathname = val.link
//                         }}
//                     >
//                         {" "}
//                         <div id="icon">{val.icon}</div>{" "}
//                         <div id="title">{val.title}</div>
//                     </li>
//                 );
//             })}
//         </ul>
//     </div>
//   );
// }

// export default Menu

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';
import { Menudata } from './menudata';

function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='Menu'>
      <ul className="Menulist">
        {Menudata.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={location.pathname === val.link ? "active" : ""}
              onClick={() => navigate(val.link)}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;