import React, { useState } from "react";
import "./header.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">About</a>
    </p>
    <p>
      <a href="#possibility">Projects</a>
    </p>
    <p>
      <a href="#features">Contact</a>
    </p>
  </>
);

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="portfolio__header">
      <div className="portfolio__header-links">
        <div className="portfolio__header-links_container">
          <Menu />
        </div>
      </div>
      <div className="portfolio__header-name">
        <h1>I am Nikoloz Kereselidze.</h1>
      </div>
    </div>
  );
};

export default Header;
