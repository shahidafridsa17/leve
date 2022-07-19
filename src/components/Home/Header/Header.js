import React from "react";
import "./Header.css";
import logo from "../../../logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <div className="header-main-container">
      <div className="header-logo-main-cont">
        <img className="header-logo" src={logo} alt="logo" />
      </div>
      <div className="header-navlinks-main-cont">
        <span className="header-navlinks-options">Home</span>
        <span className="header-navlinks-options">Perfumes</span>
        <span className="header-navlinks-options">Blog</span>
        <span className="header-navlinks-options">Contact</span>
        <span className="header-navlinks-options">About us</span>
      </div>
      <div className="header-sociallinks-main-cont">csdv</div>
      <div className="header-mobile-ham">
        <GiHamburgerMenu size="30px" />
      </div>
    </div>
  );
}
