import React from "react";
import "./PremiumAd.css";
import premium from "../../../premium.jpg";

function PremiumAd() {
  return (
    <div className="PremiumAd-main-cont">
      <div className="PremiumAd-right-container mobile-PremiumAd-right-container">
        <div className="PremiumAd-left-premium-stamp mobile-stamp">
          <img src={premium} alt="Premium" />
          <h3 className="PremiumAd-stamp-para ">Premium</h3>
        </div>
      </div>
      <div className="PremiumAd-left-container">
        <div className="PremiumAd-left-premium-stamp">
          <img src={premium} alt="Premium" />
          <h3 className="PremiumAd-stamp-para">Premium</h3>
        </div>
        <h1 className="PremiumAd-header-tag">
          Premium Attar
          <br />
          Free from
          <br />
          Alcohol.
        </h1>
        <h1 className="PremiumAd-header-tag mobile-PremiumAd-header-tag">
          Premium Attar Free
          <br />
          from Alcohol.
        </h1>
        <p className="PremiumAd-description-tag">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
        <div className="PremiumAd-bottom-div">
          <div
            className="PremiumAd-left-premium-brand"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            KHULD
          </div>
          <div className="PremiumAd-left-premium-buyNow">Buy Now</div>
        </div>
      </div>
      <div className="PremiumAd-right-container"></div>
    </div>
  );
}

export default PremiumAd;
