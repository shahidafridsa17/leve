import React from "react";
import "./Footer.css";
import textLogo from "../../../textLogo.svg";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-main-cont">
      <div className="footer-logoLinks-cont">
        <div className="footer-logo-cont">
          <img src={textLogo} alt="textLogo" className="footer-logo-img-tag" />
          <p className="footer-logo-p-tag">
            Lorem ipsum dolor sit amet, consectetuipisicing elit,
          </p>
        </div>
        <div className="footer-link-cont">
          <a href="#perfumes" className="footer-link-tag">
            Perfumes
          </a>
          <span className="footer-link-tag">Blog</span>

          <a href="#contact-us" className="footer-link-tag">
            Contact us
          </a>

          <span className="footer-link-tag">About us</span>
        </div>
      </div>
      <div className="footer-copy-main-cont">
        <div className="footer-copy-cont">
          <span className="footer-copy-tag">© 2022 Leve. Powered by Leve</span>
        </div>
        <div className="footer-copy-social-cont">
          <FiInstagram
            className="socialmedia-icons"
            size="25px"
            style={{ marginRight: "30px" }}
          />
          <BsTwitter
            className="socialmedia-icons"
            size="25px"
            style={{ marginRight: "30px" }}
          />
          <FaFacebookF className="socialmedia-icons" size="25px" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
