import React from "react";
import "./GetInTouch.css";

function GetInTouch() {
  return (
    <div className="GetInTouch-main-cont">
      <div className="GetInTouch-text-cont">
        <h1 className="GetInTouch-header-tag">Freshness to your inbox</h1>
        <p className="GetInTouch-p-tag">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      <div className="GetInTouch-input-cont">
        <input
          type="text"
          className="GetInTouch-input-tag"
          placeholder="Your email address"
        />
        <div className="GetInTouch-subscribe-button">Subscribe</div>
      </div>
    </div>
  );
}

export default GetInTouch;
