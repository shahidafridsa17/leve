import React from "react";
import "./HamNav.css";
import { GrClose } from "react-icons/gr";

function HamNav({ setHam }) {
  return (
    <div className="ham-nav-main-cont">
      <div className="ham-nav-close-div">
        <GrClose onClick={() => setHam(false)} size="25px" />
      </div>
      <div className="ham-nav-nav-links-cont">
        <span className="ham-nav-links">Home</span>
        <a
          onClick={() => setHam(false)}
          href="#perfumes"
          className="ham-nav-links"
        >
          Perfumes
        </a>
        <span className="ham-nav-links">Blog</span>
        <a
          onClick={() => setHam(false)}
          href="#contact-us"
          className="ham-nav-links"
        >
          Contact us
        </a>
        <span className="ham-nav-links">About us</span>
      </div>
    </div>
  );
}

export default HamNav;
