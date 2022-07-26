import React from "react";
// import Banner1 from "../../../banner1.svg";
// import Banner2 from "../../../banner2.svg";
// import Banner3 from "../../../banner3.svg";

function SliderContent({ activeIndex, ImageSlider }) {
  return (
    <section>
      {/* {ImageSlider.map((slide, index) => (
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
      ))} */}
      <div key={0} className={0 === activeIndex ? "slides active" : "inactive"}>
        <div className="slider-content1">
          {/* <img className="slide-image" src={Banner1} alt="sj" /> */}

          <h2 className={`slide-title-my`}>Leve Perfumes</h2>
          <h3 className={`slide-text-my`}>
            Allow our aroma to enchant your senses
          </h3>
          <div className="slide-button">Buy now</div>
        </div>
      </div>
      <div key={1} className={1 === activeIndex ? "slides active" : "inactive"}>
        <div className="slider-content2">
          {/* <img className="slide-image" src={Banner1} alt="sj" /> */}

          <h2 className={`slide-title-my`}>
            Perfume <br />
            Customization
          </h2>
          <h3 className={`slide-text-my`}>
            Allow our aroma to enchant your senses
          </h3>
          <div className="slide-button">Buy now</div>
        </div>
      </div>
      <div key={2} className={2 === activeIndex ? "slides active" : "inactive"}>
        <div className="slider-content3">
          {/* <img className="slide-image" src={Banner1} alt="sj" /> */}

          <h2 className={`slide-title-my title-3`}>
            Premium Collection
            <br /> of Khuld
          </h2>
          <h3 className={`slide-text-my`}>
            Allow our aroma to enchant your senses
          </h3>
          <div className="slide-button">Buy Now</div>
        </div>
      </div>
      <div key={3} className={3 === activeIndex ? "slides active" : "inactive"}>
        <div className="slider-content4">
          {/* <img className="slide-image" src={Banner1} alt="sj" /> */}

          <h2 className={`slide-title-my title-4`}>Premium Collection</h2>
          <h3 className={`slide-text-my`}>
            Allow our aroma to enchant your senses
          </h3>
          <div className="slide-button">Buy Now</div>
        </div>
      </div>
    </section>
  );
}

export default SliderContent;
