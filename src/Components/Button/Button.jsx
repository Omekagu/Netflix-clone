import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button className={`btn ${props.className}`}>{props.name}</button>
    </div>
  );
};

export default Button;