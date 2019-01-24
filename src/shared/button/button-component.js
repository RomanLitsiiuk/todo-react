import React from 'react';
import './button.scss';

const Button = (props) => {
  const { name, primary, fontSize } = props;

  return (
    <button
      className={primary ? 'button button--primary' : 'button'}
      style={{ fontSize }}
    >{name}</button>
  );
};

export default Button;
