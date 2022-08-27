import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/matiaspolofriz/" target="_black">
        <BsLinkedin />
      </a>

      <a href="https://github.com/matiaspolofriz" target="_black">
        <BsGithub />
      </a>

      <a href="https://twitter.com/matiaspolofriz" target="_black">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocial;
