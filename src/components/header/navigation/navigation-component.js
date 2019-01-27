import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.scss';


const Navigation = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__tab">
        <NavLink
          className="nav__link"
          activeClassName="nav__link--active"
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
      <li className="nav__tab">
        <NavLink
          className="nav__link"
          activeClassName="nav__link--active"
          to="/history"
        >
          History
        </NavLink>
      </li>
      <li className="nav__tab nav__tab--last">
        <NavLink
          className="nav__link"
          activeClassName="nav__link--active"
          to="/profile"
        >
          Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
