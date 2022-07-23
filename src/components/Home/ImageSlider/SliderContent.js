import React from "react";

function SliderContent({ activeIndex, ImageSlider }) {
  return (
    <section>
      {ImageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt={index} />

          <h2 className={`slide-title title-${slide.align}`}>{slide.title}</h2>
          <h3 className={`slide-text text-${slide.align}`}>
            {slide.description}
          </h3>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
