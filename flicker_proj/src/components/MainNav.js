import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = (props) => {
    return(
        <nav className="main-nav">
        <ul>
          <li ><NavLink to='/beach'>Beach</NavLink></li>
          <li><NavLink to='/dogs' >Dogs</NavLink></li>
          <li><NavLink to='/food' >Food</NavLink></li>
        </ul>
      </nav>
    )
}


export default MainNav;