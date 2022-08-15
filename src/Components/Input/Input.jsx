import React from 'react';
import Button from '../Button/Button';

const Input = (props) => {
  return (
    <div>
      <form className="form">
        <p className="header__paragraph meduim--text">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className={props.className}>
          <input
            className="input header__input"
            type="email"
            name="search"
            id="search"
            placeholder="email address"
          />
          <Button name="get started" className="header__input-btn" />
        </div>
      </form>
    </div>
  );
};

export default Input;
