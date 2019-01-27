import React from 'react';
import Navigation from './navigation/navigation-component';
import './header.scss';

const Header = () => (
  <header className="header">
    <div className="header__container">
      <div className="header__logo-wrap">
        <h1 className="header__logo">JobUp</h1>
      </div>
      <div className="header__nav-wrap">
        <Navigation />
      </div>
    </div>
  </header>
);

export default Header;
