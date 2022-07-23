import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import ImageSlider from "./ImageSlider";
import Dots from "./Dots";
import "./Slider.css";

const len = ImageSlider.length - 1;
function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} ImageSlider={ImageSlider} />
      <Dots
        activeIndex={activeIndex}
        ImageSlider={ImageSlider}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
