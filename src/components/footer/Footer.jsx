import React from "react";
import "./footer.css";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Tushar bali
      </a>
      <ul className="personal__links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/tushar_cgcian">
          <BsInstagram />
        </a>
        <a href="https://github.com/Tusharbalii">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/tushar-bali-37b792211/">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Tushar Bali. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
