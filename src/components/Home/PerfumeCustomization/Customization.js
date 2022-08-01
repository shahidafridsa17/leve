import React from "react";
import "./Customization.css";

function Customization() {
  return (
    <div className="customization-main-cont">
      <div className="customization-Text-main-cont">
        <h1 className="customization-text-header-tag">
          Perfume <br />
          Customization
        </h1>
        <hr className="customization-horizontal-line" />
        <div className="customization-ul-div">
          <p className="customization-text-p-tag">
            Customize perfumes with your likings
          </p>
          <ul className="customization-ul">
            <li className="customization-text-p-tag">
              Customized Perfume Bottle
            </li>
            <li className="customization-text-p-tag">
              Customized Premium Perfume Box{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="customization-image-cont"></div>
    </div>
  );
}

export default Customization;
