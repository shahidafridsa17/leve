import React, { useState } from "react";
import "./GetInTouch.css";

function GetInTouch() {
  const [email, setEmail] = useState("");

  const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };
  const onSubmit = () => {
    console.log(email);
    let number = 918590302028;
    let message = "hiii";
    let url;
    const device = deviceType();
    if (device === "desktop") {
      url = `https://web.whatsapp.com/send?phone=${number}`;

      url += `&text=${encodeURI(message)}&app_absent=0`;
    } else {
      url = `whatsapp://send?phone=${number}`;
      url += `&text=${encodeURI(message)}&app_absent=0`;
    }
    window.open(url);
  };

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
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="GetInTouch-input-tag"
          placeholder="Your email address..."
        />
        <div onClick={() => onSubmit()} className="GetInTouch-subscribe-button">
          Subscribe
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
