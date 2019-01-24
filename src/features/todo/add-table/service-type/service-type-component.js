import React from 'react';
import './service-type.scss';
import logo1 from '../../../../assets/icons/noun_321339_cc.svg';
import logo2 from '../../../../assets/icons/noun_321315_cc.svg';
import logo3 from '../../../../assets/icons/noun_321363_cc.svg';
import logo4 from '../../../../assets/icons/noun_321399_cc.svg';
import logo5 from '../../../../assets/icons/noun_321395_cc.svg';

const ServiceType = (props) => {
  return (
    <div className='service-type'>
      <h3 className='service-type__heading'>Service type</h3>
      <div className='service-type__icons-wrap'>
        <div className='service-type__icon'>
          <div className='service-type__image-wrap'>
            <img className='service-type__image' src={logo1} alt='icon' />
          </div>
          <p className='service-type__description'>Electrician</p>
        </div>
        <div className='service-type__icon'>
          <div className='service-type__image-wrap'>
            <img className='service-type__image' src={logo2} alt='icon' />
          </div>
          <p className='service-type__description'>Plumber</p>
        </div>
        <div className='service-type__icon'>
          <div className='service-type__image-wrap'>
            <img className='service-type__image' src={logo3} alt='icon' />
          </div>
          <p className='service-type__description'>Gardener</p>
        </div>
        <div className='service-type__icon'>
          <div className='service-type__image-wrap'>
            <img className='service-type__image' src={logo4} alt='icon' />
          </div>
          <p className='service-type__description'>Housekeeper</p>
        </div>
        <div className='service-type__icon'>
          <div className='service-type__image-wrap'>
            <img className='service-type__image' src={logo5} alt='icon' />
          </div>
          <p className='service-type__description'>Cook</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceType;
