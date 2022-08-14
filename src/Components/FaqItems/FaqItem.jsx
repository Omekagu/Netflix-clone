import React from 'react';
import Plus from '../svg/Plus';

const FaqItem = (props) => {
  return (
    <div>
      <li className={props.className}>
        <div className="list--text"> {props.text}</div> <Plus />
      </li>
    </div>
  );
};

export default FaqItem;
