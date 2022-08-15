import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button className={`btn ${props.className}`}>
        <span>{props.name}</span>
        <span>
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
        </span>
      </button>
    </div>
  );
};

export default Button;
