import React from 'react';
import './button.scss';

const Button = ({
  name, primary, fontSize, handleClick,
}) => (
  <button
    className={primary ? 'button button--primary' : 'button'}
    onClick={handleClick}
    style={{ fontSize }}
    type="button"
  >{name}
  </button>
);

export default Button;
