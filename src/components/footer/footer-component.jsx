import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 'a',
    };
  }

  render() {
    return (
      <footer className='footer'>
        <div className='footer__container'>
          <div className='footer__logo-wrap'>
            <p className='footer__logo'>Footer</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
