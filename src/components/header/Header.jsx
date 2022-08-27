import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I´m</h5>
        <h1>Polo Friz, Matias</h1>
        <h5 className="text-light">Front-end</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" className="perfil" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
