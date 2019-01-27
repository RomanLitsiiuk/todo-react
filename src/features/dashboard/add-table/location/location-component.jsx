import React from 'react';
import './location.scss';

const Location = (props) => {
  const { location } = props;
  return (
    <div className='location'>
      <h3 className='location__heading'>Location</h3>
      <p className='location__text'>{location}</p>
    </div>
  );
};

export default Location;
