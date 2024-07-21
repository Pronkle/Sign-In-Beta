import React from 'react'
import '../App.css'
import {Menudata} from './menudata'

function Menu() {
  return (
    <div className='Menu'>
        <ul className="Menulist">
            {Menudata.map((val, key) => {
                return(
                    <li key={key} className="row" 
                        onclick={() => {
                            window.location.pathname = val.link
                        }}
                    >
                        {" "}
                        <div id="icon">{val.icon}</div>{" "}
                        <div id="title">{val.title}</div>
                    </li>
                );
            })}
        </ul>
    </div>
  );
}

export default Menu