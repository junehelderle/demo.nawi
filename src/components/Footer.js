import React from "react";
import nawiLogo from "../Assets/nawi.png?as=webp";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footerlogo">
          <img src={nawiLogo} alt="Footer-logo" />
        </div>
        <div>
          <h3>
            Cookies Settings <br />
            Legal Information
          </h3></div>
        <div className="terms">
          <h3>
            Terms of Service <br />
            Social media handle
          </h3>
        </div>
        <div className="footerlinks">

          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Donate</a>
            </li>
            <li>
              <a href="/">Press</a>
            </li>
          </ul>

        </div>
        <div className="linkfooter">

          <ul>
            <li>
              <a href="/about">Filmcrew</a>
            </li>
            <li>
              <a href="/contact">Impact</a>
            </li>
            <li>
              <a href="/">News</a>
            </li>
          </ul>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
