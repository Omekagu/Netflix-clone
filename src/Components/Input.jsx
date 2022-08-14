import React from 'react';
import Button from './Button';

const Input = (props) => {
  return (
    <div>
      {/* <label htmlFor="search" className='header__label'>email address</label> */}
      <input
        className={`input ${props.className}`}
        type="text"
        name="search"
        id="search"
        placeholder={props.placeholder}
      />
      <Button className="header__input-btn" name="get started" />
    </div>
  );
};

export default Input;
