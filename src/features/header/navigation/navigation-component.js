import React from 'react';
import './navigation.scss';

const Navigation = (props) => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__tab nav__tab--active'>Dashboard</li>
        <li className='nav__tab'>History</li>
        <li className='nav__tab nav__tab--last'>Profile</li>
      </ul>
    </nav>
  );
};

export default Navigation;
