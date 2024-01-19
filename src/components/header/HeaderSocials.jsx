import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/tushar-bali-37b792211/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://www.instagram.com/tushar_cgcian" target="_blank">
        <BsInstagram />{" "}
      </a>
      <a href="https://github.com/Tusharbalii" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
