import React from 'react';
import './button.scss';

const Button = (props) => {
  const { name, primary, fontSize, handleClick } = props;

  return (
    <button
      className={primary ? 'button button--primary' : 'button'}
      onClick={handleClick}
      style={{ fontSize }}
    >{name}</button>
  );
};

export default Button;
