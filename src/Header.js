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
          <a  rel="noopener noreferrer" target='_blank' href="https://github.com/jremy813">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/jeremy-watkins-23bb8216b/">
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
