import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="portfolio__header" id="home">
      <div className="portfolio__header-image">
        <img
          src={require("../../assets/header-background.jpeg")}
          alt="Desert"
          className="heading-image"
        />
      </div>
      <div className="portfolio__header-links">
        <p className="portfolio__header-links_text">
          <a href="#home" className="heading-link">
            Home
          </a>
        </p>
        <p className="portfolio__header-links_text">
          <a href="#about">About</a>
        </p>
        <p className="portfolio__header-links_text">
          <a href="#projects">Projects</a>
        </p>
        <p className="portfolio__header-links_text">
          <a href="#contact">Contact</a>
        </p>
      </div>
      <div className="portfolio__header-about">
        <h1 className="heading-primary">I am Nikoloz Kereselidze.</h1>
        <h3 className="heading-tertiary">
          I am a Frontend Developer and Data Scientist. I like dabbling in
          various parts of frontend development and like to learn about new
          technologies, write technical articles or simply play games in my free
          time.
        </h3>

        <div className="portfolio__header-icons">
          <a
            href="https://www.linkedin.com/in/nikoloz-kereselidze-259573232/"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a
            href="https://github.com/NikolozKereselidze"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a
            href="https://twitter.com/kereselidzenika"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </div>
      </div>

      <div className="heading-arrow">
        <a href="#about">
          <ion-icon name="arrow-down-circle-sharp"></ion-icon>
        </a>
      </div>
    </div>
  );
};

export default Header;
