import React from 'react';
import Input from './Input/Input';
import LogoSvg from './Logo/LogoSvg';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <LogoSvg />
        <span className="header__signUp--link btn">sign in</span>
      </nav>

      <div className="header__box">
        <h1 className="header__head">
          <h3 className="header__title big--text">
            Unlimited movies, TV shows, and more.
          </h3>
          <p className="header__subtitle medium--text">
            Watch anywhere. Cancel anytime.
          </p>
        </h1>
        <Input className="header__form" />
      </div>
    </header>
  );
};

export default Header;
