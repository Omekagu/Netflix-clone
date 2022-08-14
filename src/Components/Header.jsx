import React from 'react';
import Input from './Input';
import LogoSvg from './LogoSvg';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <LogoSvg />
        <span className="header__signUp--link btn">sign up</span>
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
        <form>
          <p className="header__paragraph meduim--text">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <Input
            type="text"
            className="header__input"
            placeholder="email address"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
