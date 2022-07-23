import React from "react";
import "./Header.css";
import logo from "../../../logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default function Header() {
  return (
    <div className="header-main-container">
      <div className="header-logo-main-cont">
        <img className="header-logo" src={logo} alt="logo" />
      </div>
      <div className="header-navlinks-main-cont">
        <span className="header-navlinks-options">Home</span>
        <a href="#perfumes" className="header-navlinks-options">
          Perfumes
        </a>
        <span className="header-navlinks-options">Blog</span>
        <a href="#contact-us" className="header-navlinks-options">
          Contact
        </a>
        <span className="header-navlinks-options">About us</span>
      </div>
      <div className="header-sociallinks-main-cont">
        <FiInstagram
          className="socialmedia-icons"
          size="30px"
          style={{ marginRight: "30px" }}
        />
        <BsTwitter
          className="socialmedia-icons"
          size="30px"
          style={{ marginRight: "30px" }}
        />
        <FaFacebookF className="socialmedia-icons" size="30px" />
      </div>
      <div className="header-mobile-ham">
        <GiHamburgerMenu size="30px" />
      </div>
    </div>
  );
}
