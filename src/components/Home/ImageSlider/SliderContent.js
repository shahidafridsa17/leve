import React from "react";
// import Banner3 from "../../../banner3.svg";

function SliderContent({ activeIndex, ImageSlider }) {
  return (
    <section>
      {ImageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.image} alt={index} />
        </div>
      ))}

    </section>
  );
}

export default SliderContent;
