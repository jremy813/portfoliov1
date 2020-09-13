import React from "react";
import "./Header.css";
import Logo from "./assets/logo_transparent.png";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <>
      <header>
        <img src={Logo} alt="logo" />
        <div>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
