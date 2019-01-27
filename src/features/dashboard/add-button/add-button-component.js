import React from 'react';
import './add-button.scss';

const AddButton = (props) => {
  const { handleClick } = props;

  return (
    <div
      className='add-button'
      onClick={handleClick}
    >
      <p className='add-button__text'>New task</p>
    </div>
  );
};

export default AddButton;
