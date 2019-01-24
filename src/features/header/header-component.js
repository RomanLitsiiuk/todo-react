import React, { Component } from 'react';
import Navigation from './navigation/navigation-component';
import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 'a',
    };
  }

  render() {
    return (
      <header className='header'>
        <div className='header__container'>
          <div className='header__logo-wrap'>
            <h1 className='header__logo'>{this.props.logo}</h1>
          </div>
          <div className='header__nav-wrap'>
            <Navigation />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
