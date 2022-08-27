import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        {" "}
        Matias Polo Friz
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience" Experience>
            Experience
          </a>
        </li>

        {/* <li>
            <a href="#">Services</a>
           </li>*/}

        <li>
          <a href="#portfolio">Proyects</a>
        </li>

        {/* <li>
            <a href="#">Testimonials</a>
          </li>{" "}
          */}

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/MatiPoloFriz/">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/matiaspolofriz/">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/matiaspolofriz">
          <FaTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MPF. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
