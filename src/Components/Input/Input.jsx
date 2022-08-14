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
            type="text"
            name="search"
            id="search"
            placeholder="email address"
          />
          <Button name="get started" className="header__input-btn" />

          <svg
            viewBox="0 0 6 12"
            xmlns="http://www.w3.org/2000/svg"
            className="header__chevron"
          >
            <desc>chevron</desc>
            <path
              d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
              fill="white"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </form>
      {/* <input
          className={`input ${props.className}`}
          type="text"
          name="search"
          id="search"
          placeholder={props.placeholder}
        />
        <p className="header__paragraph meduim--text">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="header__form">
          <Input
            type="text"
            className="header__input"
            placeholder="email address"
          />
          <Button name="get started" className="header__input-btn" />

          <svg
            viewBox="0 0 6 12"
            xmlns="http://www.w3.org/2000/svg"
            className="header__chevron"
          >
            <desc>chevron</desc>
            <path
              d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
              fill="white"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </form> */}
    </div>
  );
};

export default Input;
