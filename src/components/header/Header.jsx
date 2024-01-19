import React from "react";
import "./header.css";
import Cta from "./Cta";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import tushar from "../../images/tushar.JPG";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  const [text] = useTypewriter({
    words: ["Tushar Bali", "FullStack Web Developer"],
    loop: {},
  });
  return (
    <header>
      <div class="container header__container">
        <h3>Hello I'm</h3>

        <h1>
          {text}
          <span className="cursor">
            <Cursor />
          </span>
        </h1>

        <Cta />
        <HeaderSocials />
        <div className="me">
          <img src={tushar} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
